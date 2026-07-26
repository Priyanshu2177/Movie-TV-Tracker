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