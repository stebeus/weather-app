const roundTemperature = (temperature) => Math.round(temperature);

const convertToFahrenheit = (temperature) =>
  roundTemperature(temperature * (9 / 5) + 32);

const convertToCelsius = (temperature) =>
  roundTemperature((temperature - 32) / (9 / 5));

export { convertToFahrenheit, convertToCelsius };
