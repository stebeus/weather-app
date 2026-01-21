import "./style.css";
import "/favicon.png";
import { handleSearch } from "./components/search";

const searchBox = document.querySelector(".search-box");
const unitToggleSwitch = document.querySelector("[data-action='switch-unit']");

searchBox.addEventListener("submit", handleSearch);
