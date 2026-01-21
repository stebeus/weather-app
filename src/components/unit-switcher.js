import { convertToFahrenheit, convertToCelsius } from "../utils/converters";
import { formatTemperature } from "../utils/formatters";

let isCelsiusToggled = true;
let currentUnitQuery = "us";

const toggleCelsius = () => (isCelsiusToggled = !isCelsiusToggled);
const switchCurrentUnitQuery = () =>
  (currentUnitQuery = currentUnitQuery === "us" ? "metric" : "us");

function switchUnit() {
  toggleCelsius();
  switchCurrentUnitQuery();
}

export function handleUnitSwitchToggler() {
  const ids = ["temperature", "feels-like"];
  switchUnit();

  for (const id of ids) {
    const element = document.getElementById(id);

    if (isCelsiusToggled) {
      element.dataset.value = convertToCelsius(element.dataset.value);
      element.textContent = formatTemperature(element.dataset.value, "C");
    } else {
      element.dataset.value = convertToFahrenheit(element.dataset.value);
      element.textContent = formatTemperature(element.dataset.value);
    }
  }
}
