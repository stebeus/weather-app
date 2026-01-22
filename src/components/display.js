import { fetchTimeline } from "../services/weatherService";
import {
  formatLocation,
  formatTemperature,
  formatHumidity,
} from "../utils/formatters";
import { currentUnitLabel } from "./unit-switcher";
import { loadWeatherIcon } from "./image-loader";

const main = document.querySelector("main");

class FormattedElement {
  constructor(id, value, formatter) {
    this.id = id;
    this.value = value;
    this.formatter = formatter;
  }
}

function assignValuesToElement(node, id, value, formatter, formatOptions) {
  const element = node.getElementById(id);

  element.textContent = formatter ? formatter(value, formatOptions) : value;
  if (element.hasAttribute("data-value")) element.dataset.value = value;
}

function updateForecast(node) {
  main.innerHTML = "";
  main.append(node);
}

function renderForecast({
  resolvedAddress,
  temp,
  feelslike,
  humidity,
  description,
  icon,
  conditions,
}) {
  const template = document.querySelector("#forecast-template");
  const clone = template.content.cloneNode(true);

  const formattedElements = [
    new FormattedElement("location", resolvedAddress, formatLocation),
    new FormattedElement("temperature", temp, formatTemperature),
    new FormattedElement("feels-like", feelslike, formatTemperature),
    new FormattedElement("humidity", humidity, formatHumidity),
  ];

  for (const formattedElement of formattedElements) {
    assignValuesToElement(
      clone,
      formattedElement.id,
      formattedElement.value,
      formattedElement.formatter,
      currentUnitLabel,
    );
  }

  assignValuesToElement(clone, "description", description);
  loadWeatherIcon(clone, icon, conditions);
  updateForecast(clone);
}

export async function renderFetchedTimeline(location, unit) {
  try {
    const weatherData = await fetchTimeline(location, unit);
    renderForecast(weatherData);
  } catch (error) {
    console.error(error.message);
  }
}
