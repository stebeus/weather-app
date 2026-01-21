import { convertToFahrenheit, convertToCelsius } from "../utils/converters";
import { formatTemperature } from "../utils/formatters";

function handleToggleSwitch(event, truthyStatement, falsyStatement) {
  const toggleSwitch = event.target.closest("[type='checkbox'");
  toggleSwitch.checked ? truthyStatement : falsyStatement;
}

function switchUnit(element, converter, unit) {
  element.dataset.value = converter(element.dataset.value);
  element.textContent = formatTemperature(element.dataset.value, unit);
}

export function handleUnitSwitcher(event) {
  const ids = ["temperature", "feels-like"];

  for (const id of ids) {
    let element = document.getElementById(id);

    handleToggleSwitch(
      event,
      switchUnit(element, convertToCelsius, "C"),
      switchUnit(element, convertToFahrenheit),
    );
  }
}
