import { fetchTimeline } from "../services/weatherService";
import {
  formatLocation,
  formatTemperature,
  formatHumidity,
} from "../utils/formatters";
import { currentUnitLabel } from "./unit-switcher";

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
    `${formatTemperature(temp, currentUnitLabel)}`;
  clone.querySelector("#feels-like").textContent =
    `${formatTemperature(feelslike, currentUnitLabel)}`;
  clone.querySelector("#humidity").textContent +=
    ` ${formatHumidity(humidity)}`;
  clone.querySelector("#description").textContent = description;

  main.innerHTML = "";
  main.appendChild(clone);
}

export async function renderFetchedTimeline(location, unit) {
  try {
    const weatherData = await fetchTimeline(location, unit);
    renderForecast(weatherData);
  } catch (error) {
    console.error(error);
  }
}
