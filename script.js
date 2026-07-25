const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

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