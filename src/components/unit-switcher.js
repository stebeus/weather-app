import { convertToFahrenheit, convertToCelsius } from "../utils/converters";
import { formatTemperature } from "../utils/formatters";

let isCelsiusToggled = true;
let currentUnit = "us";

const toggleCelsius = () => (isCelsiusToggled = !isCelsiusToggled);
const switchCurrentUnit = () =>
  (currentUnit = currentUnit === "us" ? "metric" : "us");

export function handleUnitSwitchToggler() {
  const ids = ["temperature", "feels-like"];

  toggleCelsius();
  switchCurrentUnit();

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
