const main = document.querySelector("main");

export function renderForecast(object) {
  const template = document.querySelector("#forecast-template");
  const clone = template.content.cloneNode(true);

  clone.querySelector("#title").textContent = object[0];
  clone.querySelector("#temperature").textContent = object[1];
  clone.querySelector("#feelslike").textContent = object[2];
  clone.querySelector("#humidity").textContent = object[3];
  clone.querySelector("#description").textContent = object[4];

  main.appendChild(clone);
}
