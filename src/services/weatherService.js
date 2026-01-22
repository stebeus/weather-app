function getWeather({
  resolvedAddress,
  description,
  currentConditions: { temp, feelslike, humidity, icon, conditions },
}) {
  return {
    resolvedAddress,
    temp,
    feelslike,
    humidity,
    description,
    icon,
    conditions,
  };
}

export async function fetchTimeline(location, unit) {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=XT52FMHNWKEWVE7B5XQZR4MGY`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      alert(`Request failed with error ${response.status}`);
      throw new Error(`Response status: ${response.status}s`);
    }

    const data = await response.json();
    return getWeather(data);
  } catch (error) {
    console.error(error.message);
  }
}
