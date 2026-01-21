const capitalize = (string) =>
  string[0].toUpperCase(0) + string.slice(1).toLowerCase();

const formatLocation = (location) =>
  location.split(" ").map(capitalize).join(" ");

const roundTemperature = (temperature) => Math.round(temperature);

const formatTemperature = (temperature, unit) =>
  roundTemperature(temperature) + `°${unit}`;

const formatHumidity = (humidity) => roundTemperature(humidity) + "%";

export { formatLocation, formatTemperature, formatHumidity };
