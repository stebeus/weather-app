import { fetchTimeline } from "../services/weatherService";

const main = document.querySelector("main");

function renderForecast({
  resolvedAddress,
  temp,
  feelslike,
  humidity,
  description,
}) {
  const template = document.querySelector("#forecast-template");
  const clone = template.content.cloneNode(true);

  clone.querySelector("#location").textContent = resolvedAddress;
  clone.querySelector("#temperature").textContent = temp;
  clone.querySelector("#feels-like").textContent = feelslike;
  clone.querySelector("#humidity").textContent = humidity;
  clone.querySelector("#description").textContent = description;

  main.appendChild(clone);
}

export async function renderFetchedTimeline(location) {
  try {
    const weatherData = await fetchTimeline(location);
    renderForecast(weatherData);
  } catch (error) {
    console.error(error);
  }
}
