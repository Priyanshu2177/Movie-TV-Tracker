// Watchlist Movies
function renderWatchlistMovies() {

    const movieContainer =
        document.getElementById("watchlist-movies");

    movieContainer.innerHTML = "";

    Object.keys(userData).forEach(id => {

        const item = media[id];
        const user = userData[id];

        if (!item || item.type !== "movie") return;
        if (!user.inWatchlist) return;

        const card = document.createElement("div");

        card.className = "media-card watchlist-card movie-card";
        card.dataset.id = item.id;
        card.dataset.type = item.type;

        card.innerHTML = `
            <img
                src="${item.poster}"
                alt="${item.title}"
                class="watch-poster"
            >

            <div class="watch-info">

                <h3>${item.title}</h3>

                <div class="watch-meta">
                    <i class="fa-solid fa-clapperboard"></i>
                    <span>${item.year}</span>
                    <span>|</span>
                    <i class="fa-brands fa-imdb"></i>
                    <span>${item.rating}</span>
                </div>

            </div>

            <i class="fa-regular fa-circle-check watch-action"></i>
        `;

        movieContainer.appendChild(card);
    });
}

renderWatchlistMovies();

// Watchlist Shows
function renderWatchlistShows() {

    const showContainer =
        document.getElementById("watchlist-shows");

    showContainer.innerHTML = "";

    Object.keys(userData).forEach(id => {

        const item = media[id];
        const user = userData[id];

        if (!item || item.type !== "tv") return;
        if (!user.inWatchlist) return;

        const card = document.createElement("div");

        card.className = "media-card watchlist-card show-card";
        card.dataset.id = item.id;
        card.dataset.type = item.type;

        card.innerHTML = `
            <img
                src="${item.poster}"
                alt="${item.title}"
                class="watch-poster"
            >

            <div class="watch-info">

                <h3>${item.title}</h3>

                <div class="watch-meta">
                    <i class="fa-solid fa-tv"></i>
                    <span>${item.year}</span>
                    <span>|</span>
                    <i class="fa-brands fa-imdb"></i>
                    <span>${item.rating}</span>
                </div>

            </div>

            <i class="fa-regular fa-circle-check watch-action"></i>
        `;

        showContainer.appendChild(card);
    });
}

renderWatchlistShows();