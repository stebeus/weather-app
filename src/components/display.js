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

function updateForecast(node) {
  main.remove();
  main.append(node);
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

  const nodes = [
    { id: "temperature", key: temp },
    { id: "feels-like", key: feelslike },
  ];

  for (const node of nodes) {
    assignValuesToNode(
      clone,
      node.id,
      node.key,
      formatTemperature,
      currentUnitLabel,
    );
  }

  assignValuesToNode(clone, "location", resolvedAddress, formatLocation);
  assignValuesToNode(clone, "humidity", humidity, formatHumidity);
  assignValuesToNode(clone, "description", description);

  updateForecast(clone);
}

export async function renderFetchedTimeline(location, unit) {
  try {
    const weatherData = await fetchTimeline(location, unit);
    renderForecast(weatherData);
  } catch (error) {
    console.error(error);
  }
}
