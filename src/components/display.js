import { fetchTimeline } from "../services/weatherService";
import {
  formatLocation,
  formatTemperature,
  formatHumidity,
} from "../utils/formatters";

const main = document.querySelector("main");

const setDatasetValue = (element, id, value) =>
  (element.querySelector(`#${id}`).dataset.value = value);

function renderForecast({
  resolvedAddress,
  temp,
  feelslike,
  humidity,
  description,
}) {
  const template = document.querySelector("#forecast-template");
  const clone = template.content.cloneNode(true);

  setDatasetValue(clone, "temperature", temp);
  setDatasetValue(clone, "feels-like", feelslike);
  setDatasetValue(clone, "humidity", humidity);

  clone.querySelector("#location").textContent =
    formatLocation(resolvedAddress);
  clone.querySelector("#temperature").textContent =
    `${formatTemperature(temp)}`;
  clone.querySelector("#feels-like").textContent =
    `${formatTemperature(feelslike)}`;
  clone.querySelector("#humidity").textContent +=
    ` ${formatHumidity(humidity)}`;
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
