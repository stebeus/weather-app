import { convertToFahrenheit, convertToCelsius } from "../utils/converters";
import { formatTemperature } from "../utils/formatters";

function handleToggleSwitch(event, truthyStatement, falsyStatement) {
  const toggleSwitch = event.target.closest("[type='checkbox");
  toggleSwitch.checked ? truthyStatement : falsyStatement;
}

function toggleCelsius(value, element) {
  value = convertToCelsius(value);
  element.textContent = formatTemperature(value, "C");
}

function toggleFahrenheit(value, element) {
  value = convertToFahrenheit(value);
  element.textContent = formatTemperature(value);
}
