// Navigation tabs switching
const tabs = document.querySelectorAll(".navigation");
const pages = document.querySelectorAll(".page");

function showPage(pageId) {

    pages.forEach(page => {
        page.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
    
    const header = document.querySelector("header");
    if (pageId === "details-page") {
        header.style.display = "none";
    } else {
        header.style.display = "flex";
    }

    if (pageId !== "details-page") {
        setActiveNav(pageId)
    }
}


document.querySelector("#progress-tab .nav-content")
    .addEventListener("click", function () {
        showPage("progress-page");
    });

document.querySelector("#watchlist-tab .nav-content")
    .addEventListener("click", function () {
        showPage("watchlist-page");
    });

document.querySelector("#history-tab .nav-content")
    .addEventListener("click", function () {
        showPage("watched-page");
    });

// separating details page
function setActiveNav(pageId) {

    document.querySelectorAll(".navigation")
        .forEach(nav => nav.classList.remove("active"));

    if (pageId === "progress-page")
        document.getElementById("progress-tab").classList.add("active");

    if (pageId === "watchlist-page")
        document.getElementById("watchlist-tab").classList.add("active");

    if (pageId === "watched-page")
        document.getElementById("history-tab").classList.add("active");

}

// open previous page
let previousPage = "progress-page";

function goBack() {
    showPage(previousPage);
}
document.querySelector(".back-btn").addEventListener("click", goBack);