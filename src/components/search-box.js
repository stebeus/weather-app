import { fetchTimeline } from "../services/weatherService";

const inputQuery = document.querySelector("#query");

export function handleSearch() {
  fetchTimeline(inputQuery.value);
  console.log(1);
}
