import { fetchTimeline } from "../services/weatherService";
import {
  formatLocation,
  formatTemperature,
  formatHumidity,
} from "../utils/formatters";
import { currentUnitLabel } from "./unit-switcher";

const main = document.querySelector("main");

function assignValuesToNode(node, id, key, formatter, formatOptions) {
  const element = node.getElementById(id);

  element.textContent = formatter ? formatter(key, formatOptions) : key;
  if (element.hasAttribute("data-value")) element.dataset.value = key;
}

function renderForecast({
  resolvedAddress,
  temp,
  feelslike,
  humidity,
  description,
}) {
  const template = document.querySelector("#forecast-template");
  const clone = template.content.cloneNode(true);

  assignValuesToNode(clone, "location", resolvedAddress, formatLocation);

  assignValuesToNode(
    clone,
    "temperature",
    temp,
    formatTemperature,
    currentUnitLabel,
  );

  assignValuesToNode(
    clone,
    "feels-like",
    feelslike,
    formatTemperature,
    currentUnitLabel,
  );

  assignValuesToNode(clone, "humidity", humidity, formatHumidity);

  assignValuesToNode(clone, "description", description);

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
