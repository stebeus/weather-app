export function renderLoader() {
  const template = document.querySelector("#loader-template");
  const clone = template.content.cloneNode(true);
  return clone;
}
