// Theme Toggle
const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

// Progress Bar
let watched = 11;
let total = 32;

let percentage = (watched / total) * 100;

document.querySelector(".progress-value-1").style.width = percentage + "%";

document.getElementById("status").textContent =
    `(${watched}/${total})`;

let watched2 = 26;
let total2 = 40;

let percentage2 = (watched2 / total2) * 100;

document.querySelector(".progress-value-2").style.width = percentage2 + "%";

document.getElementById("status2").textContent =
    `(${watched2}/${total2})`;

let watched3 = 16;
let total3 = 19;

let percentage3 = (watched3 / total3) * 100;

document.querySelector(".progress-value-3").style.width = percentage3 + "%";

document.getElementById("status3").textContent =
    `(${watched3}/${total3})`;

// Navigation tabs switching
const tabs = document.querySelectorAll(".navigation");
const pages = document.querySelectorAll(".page");

function showPage(pageId, activeTab) {

    pages.forEach(page => {
        page.classList.remove("active");
    });

    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
    activeTab.classList.add("active");
}


document.getElementById("progress-tab")
    .addEventListener("click", function () {
        showPage("progress-page", this);
    });

document.getElementById("watchlist-tab")
    .addEventListener("click", function () {
        showPage("watchlist-page", this);
    });

document.getElementById("history-tab")
    .addEventListener("click", function () {
        showPage("watched-page", this);
    });

// Media Tabs switching
function setupMediaTabs(tabContainerId, movieListId, showListId) {

    const tabContainer = document.getElementById(tabContainerId);
    const buttons = tabContainer.querySelectorAll("button");

    const movieList = document.getElementById(movieListId);
    const showList = document.getElementById(showListId);

    buttons[0].addEventListener("click", function () {

        buttons[0].classList.add("active");
        buttons[1].classList.remove("active");

        movieList.classList.add("active");
        showList.classList.remove("active");

    });

    buttons[1].addEventListener("click", function () {

        buttons[1].classList.add("active");
        buttons[0].classList.remove("active");

        showList.classList.add("active");
        movieList.classList.remove("active");

    });

}

setupMediaTabs(
    "watchlist-tabs",
    "watchlist-movies",
    "watchlist-shows"
);

setupMediaTabs(
    "history-tabs",
    "history-movies",
    "history-shows"
);

// Click card and check button
const cards = document.querySelectorAll(".media-card");

cards.forEach(card => {
    card.addEventListener("click", function (e) {

        // Was the check icon clicked?
        if (e.target.closest(".watch, .watch-action")) {
            markAsWatched(card);
            return;
        }

        // Otherwise, the card itself was clicked
        openDetails(card);

    });
});

function openDetails(card) {
    console.log("Open details page");
}

function markAsWatched(card) {
    console.log("Marked as watched");
}