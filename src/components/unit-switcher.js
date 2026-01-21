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

export function switchUnit(event) {
  const ids = ["temperature", "feels-like"];

  for (const id of ids) {
    let element = document.getElementById(id);
    let value = element.dataset.value;

    handleToggleSwitch(
      event,
      toggleCelsius(value, element),
      toggleFahrenheit(value, element),
    );
  }
}
