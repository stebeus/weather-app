import { fetchTimeline } from "../services/weatherService";
import {
  formatLocation,
  formatTemperature,
  formatHumidity,
} from "../utils/formatters";
import { currentUnitLabel } from "./unit-switcher";

const main = document.querySelector("main");

class FormattedElement {
  constructor(id, value, formatter) {
    this.id = id;
    this.id = value;
    this.id = formatter;
  }
}

function assignValuesToElement(node, id, value, formatter, formatOptions) {
  const element = node.getElementById(id);

  element.textContent = formatter ? formatter(value, formatOptions) : value;
  if (element.hasAttribute("data-value")) element.dataset.value = value;
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
    assignValuesToElement(
      clone,
      node.id,
      node.key,
      formatTemperature,
      currentUnitLabel,
    );
  }

  assignValuesToElement(clone, "location", resolvedAddress, formatLocation);
  assignValuesToElement(clone, "humidity", humidity, formatHumidity);
  assignValuesToElement(clone, "description", description);

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
