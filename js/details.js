// Click card and check button
let detailsHistory = [];

document.addEventListener("click", function (e) {
    const card = e.target.closest(".media-card");

    if (!card) return;

    // Was the check icon clicked?
    if (e.target.closest(".watch, .watch-action")) {
        markAsWatched(card);
        return;
    }

    // Otherwise, the card itself was clicked
    openDetails(card);
});

function openDetails(card) {
    const page = card.closest(".page").id;
    previousPage = page;
    detailsHistory = [];

    renderDetails(card.dataset.id);
    showPage("details-page");
}

// Check Button
function markAsWatched(card) {

    const id = Number(card.dataset.id);
    const type = card.dataset.type;

    const user = userData[id];
    if (!user) return;

    // Watchlist
    if (card.classList.contains("watchlist-card")) {

        // Movie
        if (type === "movie") {
            user.inWatchlist = false;
            user.watched = true;

            user.watchedDate = new Date().toLocaleDateString(
                "en-GB",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            );

            saveUserData();

            renderWatchlistMovies();
            renderHistoryMovies();

            return;
        }

        // TV Show
        if (type === "tv") {
            user.inWatchlist = false;
            user.inHistory = true;

            if (!user.watchedEpisodes) {
                user.watchedEpisodes = 0;
            }

            if (!user.nextEpisode) {

                const firstEpisodeId =
                    Object.keys(media[id].episodes || {})[0];

                const firstEpisode =
                    firstEpisodeId
                        ? media[id].episodes[firstEpisodeId]
                        : null;

                if (firstEpisode) {
                    user.nextEpisode = {
                        season: firstEpisode.season,
                        episode: firstEpisode.episode,
                        title: firstEpisode.title,
                        releaseDate: firstEpisode.releaseDate
                    };
                }
            }

            saveUserData();

            renderWatchlistShows();
            renderHistoryShows();
            renderWatching();

            return;
        }
    }

    // Progress
    if (card.classList.contains("progress-card")) {

        const currentEpisode = user.nextEpisode;

        if (!currentEpisode) return;

        const episodeId =
            `${currentEpisode.season}-${currentEpisode.episode}`;

        // Progress --> Recent
        recentActivity.unshift({
            mediaId: id,
            episodeId: episodeId,
            watchedDate: new Date().toLocaleDateString(
                "en-GB",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            )
        });

        user.watchedEpisodes++;

        // Next episode
        const currentEpisodeId =
            `${currentEpisode.season}-${currentEpisode.episode}`;

        const currentEpisodeData =
            media[id].episodes?.[currentEpisodeId];

        const nextEpisodeId =
            currentEpisodeData?.nextEpisodeId;

        const nextEpisode =
            nextEpisodeId
                ? media[id].episodes?.[nextEpisodeId]
                : null;

        if (nextEpisode) {

            user.nextEpisode = {
                season: nextEpisode.season,
                episode: nextEpisode.episode,
                title: nextEpisode.title,
                releaseDate: nextEpisode.releaseDate
            };

        } else {

            user.nextEpisode = null;

        }

        saveUserData();
        saveRecentActivity();

        renderWatching();
        renderRecent();

        return;
    }
}

// defining variables
const detailsPoster =
    document.getElementById("details-poster");

const detailsTitle =
    document.getElementById("details-title");

const detailsRating =
    document.getElementById("details-rating");

const detailsGenres =
    document.getElementById("details-genres");

const detailsMeta =
    document.getElementById("details-meta");

const detailsOverview =
    document.getElementById("details-overview");

const castList =
    document.getElementById("cast-list");

const similarList =
    document.getElementById("similar-list");

const similarHeading =
    document.getElementById("similar-heading")


let currentMediaId = null

// renderDetails function
function renderDetails(id) {
    currentMediaId = id;
    const item = media[id];

    if (!item) return;

    detailsPoster.src = item.poster;
    detailsTitle.textContent = item.title;
    detailsRating.textContent = item.rating.toFixed(1);
    detailsGenres.textContent = item.genres.join(" • ");
    detailsOverview.textContent = item.overview;
    if (item.type === "movie") {
        similarHeading.textContent = "Similar Movies";

        detailsMeta.innerHTML = `
        <span>${item.year}</span>
        <span>•</span>
        <span>${item.runtime}</span>
    `;
    } else {
        similarHeading.textContent = "Similar Shows";

        detailsMeta.innerHTML = `
        <span>${item.year}</span>
        <span>•</span>
        <span>${item.seasons} Season${item.seasons > 1 ? "s" : ""}</span>
        <span>•</span>
        <span>${item.status}</span>
    `;
    }

    renderCast(item);

    renderSimilar(item);

}

//renderCast function
function renderCast(item) {
    castList.innerHTML = "";

    item.cast.forEach(actor => {
        const castCard = document.createElement("div");
        castCard.className = "cast-card";

        castCard.innerHTML = `
            <img src="${actor.image}" alt="${actor.name}">
            <span>${actor.name}</span>
        `;
        castList.appendChild(castCard);
    });

}

// similar movies
function renderSimilar(item) {
    similarList.innerHTML = "";

    item.similar.forEach(similarId => {
        const similarMovie = media[similarId];
        const similarCard = document.createElement("div");
        similarCard.className = "similar-card";

        similarCard.innerHTML = `
            <img src="${similarMovie.poster}" alt="${similarMovie.title}">
            <p>${similarMovie.title}</p>
        `;
        similarList.appendChild(similarCard);

        similarCard.addEventListener("click", () => {
            detailsHistory.push(currentMediaId);
            currentMediaId = similarMovie.id;
            renderDetails(currentMediaId);

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });

}