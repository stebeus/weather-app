import { fetchTimeline } from "../services/weatherService";

const inputQuery = document.querySelector("#query");

export function handleSearch(event) {
  event.preventDefault();
  fetchTimeline(inputQuery.value);
  console.log(1);
}
