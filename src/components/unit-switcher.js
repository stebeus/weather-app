import { convertToFahrenheit, convertToCelsius } from "../utils/converters";
import { formatTemperature } from "../utils/formatters";

let isCelsiusToggled = true;
let currentUnit = "us";

const toggleCelsius = () => (isCelsiusToggled = !isCelsiusToggled);
const switchCurrentUnit = () =>
  (currentUnit = currentUnit === "us" ? "metric" : "us");
