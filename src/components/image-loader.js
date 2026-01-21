export function loadWeatherIcon(node, source, alternative) {
  const image = node.querySelector(".icon--weather");

  image.src = new URL(`../images/${source}.png`, import.meta.url).href;
  image.alt = alternative;
}
