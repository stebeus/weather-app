const capitalize = (string) =>
  string[0].toUpperCase(0) + string.slice(1).toLowerCase();

const formatLocation = (location) =>
  location.split(" ").map(capitalize).join(" ");

const formatTemperature = (temperature, unit = "F") => `${temperature}°${unit}`;

const formatHumidity = (humidity) => `${humidity}%`;

export { formatLocation, formatTemperature, formatHumidity };
