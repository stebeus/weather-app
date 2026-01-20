import { renderFetchedTimeline } from "./display";

const inputQuery = document.querySelector("#query");

export function handleSearch(event) {
  event.preventDefault();
  renderFetchedTimeline(inputQuery.value);
}
