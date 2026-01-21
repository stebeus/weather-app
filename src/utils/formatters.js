const capitalize = (string) =>
  string[0].toUpperCase(0) + string.slice(1).toLowerCase();

const formatLocation = (location) =>
  location.split(" ").map(capitalize).join(" ");

const round = (number) => Math.round(number);

const formatTemperature = (temperature, unit) =>
  round(temperature) + `°${unit}`;

const formatHumidity = (humidity) => round(humidity) + "%";

export { formatLocation, formatTemperature, formatHumidity };
