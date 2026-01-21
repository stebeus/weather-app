import { convertToFahrenheit, convertToCelsius } from "../utils/converters";
import { formatTemperature } from "../utils/formatters";

function handleToggleSwitch(event, truthyStatement, falsyStatement) {
  const toggleSwitch = event.target.closest("[type='checkbox");
  toggleSwitch.checked ? truthyStatement : falsyStatement;
}
