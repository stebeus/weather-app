const main = document.querySelector("main");

function renderForecast({
  resolvedAddress,
  temp,
  feelslike,
  humidity,
  description,
}) {
  const template = document.querySelector("#forecast-template");
  const clone = template.content.cloneNode(true);

  clone.querySelector("#title").textContent = resolvedAddress;
  clone.querySelector("#temperature").textContent = temp;
  clone.querySelector("#feelslike").textContent = feelslike;
  clone.querySelector("#humidity").textContent = humidity;
  clone.querySelector("#description").textContent = description;

  main.appendChild(clone);
}
