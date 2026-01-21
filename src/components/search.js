import { renderFetchedTimeline } from "./display";
import { currentUnitQuery } from "./unit-switcher";

const inputQuery = document.querySelector("#query");

export function handleSearch(event) {
  event.preventDefault();
  renderFetchedTimeline(inputQuery.value, currentUnitQuery);
}
