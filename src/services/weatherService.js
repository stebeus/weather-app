function getWeather({
  resolvedAddress,
  description,
  currentConditions: { temp, feelslike, humidity, icon },
}) {
  return {
    resolvedAddress,
    temp,
    feelslike,
    humidity,
    description,
    icon,
  };
}

export async function fetchTimeline(location, unit) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=XT52FMHNWKEWVE7B5XQZR4MGY`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return getWeather(data);
  } catch (error) {
    console.error(error);
  }
}
