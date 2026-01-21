import { convertToFahrenheit, convertToCelsius } from "../utils/converters";
import { formatTemperature } from "../utils/formatters";

let currentUnitLabel = "F";
let currentUnitQuery = "us";
let isCelsiusToggled = false;

const switchCurrentUnitQuery = () =>
  (currentUnitQuery = currentUnitQuery === "us" ? "metric" : "us");

const toggleCelsius = () => (isCelsiusToggled = !isCelsiusToggled);

function switchUnit() {
  toggleCelsius();
  switchCurrentUnitQuery();
}

function renderConvertedUnit(element, converter, unit) {
  element.dataset.value = converter(element.dataset.value);
  element.textContent = formatTemperature(element.dataset.value, unit);
}

function switchConversionRender() {
  const ids = ["temperature", "feels-like"];

  for (const id of ids) {
    const element = document.getElementById(id);
    if (!element) return;

    isCelsiusToggled
      ? renderConvertedUnit(element, convertToCelsius, "C")
      : renderConvertedUnit(element, convertToFahrenheit);
  }
}

function handleUnitSwitchToggler() {
  switchUnit();
  switchConversionRender();
}

export { handleUnitSwitchToggler, currentUnitLabel, currentUnitQuery };
