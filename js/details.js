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
        if (!currentEpisode) return;
        markEpisodeWatched(
            id,
            currentEpisode.season + "-" + currentEpisode.episode
        );
        return;
    }
}

// defining variables
const detailsPoster =
    document.getElementById("details-poster");

const detailsHeader =
    document.querySelector(".details-header");

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

const episodesSection = 
    document.getElementById("episodes-section");

const episodesList = 
    document.getElementById("episodes-list");

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

    const backdrop = item.backdrop  || item.poster;

    detailsHeader.style.backgroundImage = `
        linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.92) 0%,
            rgba(0, 0, 0, 0.76) 45%,
            rgba(0, 0, 0, 0.25) 100%,
        ),
        url("${backdrop}")
    `;

    if (item.type === 'tv') {
        episodesSection.style.display = "block"
    } else {
        episodesSection.style.display = "none"
    }

    if (item.type === 'tv') {
        renderEpisodes(item);
    }

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

// renderEpisodes function
function renderEpisodes(item) {
    episodesList.innerHTML = ""

    const user = userData[item.id];
    const watchedIds = user?.watchedepiisodeIds || [];

    Object.entries(item.episodes || {}).forEach(([episodeId, episode]) => {
        const watched = watchedIds.includes(episodeId) ||
            recentActivity.some(activity => 
                Number(activity.mediaId) === item.id &&
                activity.episodeId === episodeId
            );

        const episodeCard = document.createElement("div");
        episodeCard.className = "episode-card";

        episodeCard.innerHTML = `
            <h3>Season ${episode.season}, Episode ${episode.episode} </h3>
            <p>${episode.title}</p>
            <p>${episode.releaseDate}</p>
            ${
                watched
                    ? `<button class="episode-watch-btn watched" disabled
                                aria-label = "Already Watched">
                            <i class="fa-solid fa-square-check" aria-hidden="true"></i>
                       </button>` 
                    : `<button class="episode-watch-btn unwatched"
                               data-id = "${item.id}"
                               data-episode = "${episodeId}"
                               aria-label = "Mark as Watched">
                            <i class="fa-regular fa-square-check" aria-hidden="true"></i> 
                       </button>`
            }
        `;

        episodesList.appendChild(episodeCard);
    });
}


function isEpisodeWatched(id, episodeId) {
    const user = userData[id];

    return (user?.watchedEpisodeIds || []).includes(episodeId) ||
        recentActivity.some(activity =>
            Number(activity.mediaId) === Number(id) &&
            activity.episodeId === episodeId
        );
}

function advanceNextEpisode(item, user, episodeId) {
    const currentEpisodeId = user.nextEpisode
        ? `${user.nextEpisode.season}-${user.nextEpisode.episode}`
        : null;

    // Only advance if the episode marked is the current next episode.
    if (episodeId !== currentEpisodeId) return false;

    let nextId = item.episodes[episodeId]?.nextEpisodeId;
    const visited = new Set([episodeId]);

    // Skip episodes that are already watched.
    while (
        nextId &&
        !visited.has(nextId) &&
        isEpisodeWatched(item.id, nextId)
    ) {
        visited.add(nextId);
        nextId = item.episodes[nextId]?.nextEpisodeId || null;
    }

    const nextEpisode = nextId ? item.episodes[nextId] : null;

    user.nextEpisode = nextEpisode
        ? {
            season: nextEpisode.season,
            episode: nextEpisode.episode,
            title: nextEpisode.title,
            releaseDate: nextEpisode.releaseDate
        }
        : null;

    return true;
}

function markEpisodeWatched(id, episodeId) {
    const item = media[id];
    const user = userData[id];

    if (
        !item ||
        item.type !== "tv" ||
        !user ||
        !item.episodes?.[episodeId]
    ) {
        return false;
    }

    if (!Array.isArray(user.watchedEpisodeIds)) {
        user.watchedEpisodeIds = [];
    }

    // Prevent duplicate entries and duplicate progress increments.
    if (isEpisodeWatched(id, episodeId)) {
        if (!user.watchedEpisodeIds.includes(episodeId)) {
            user.watchedEpisodeIds.push(episodeId);
        }

        advanceNextEpisode(item, user, episodeId);

        saveUserData();
        renderEpisodes(item);
        renderWatching();
        renderHistoryShows();
        renderRecent();

        return false;
    }

    user.watchedEpisodeIds.push(episodeId);

    recentActivity.unshift({
        mediaId: id,
        episodeId: episodeId,
        watchedDate: new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        })
    });

    user.watchedEpisodes = (user.watchedEpisodes || 0) + 1;
    user.inHistory = true;
    user.inWatchlist = false;

    advanceNextEpisode(item, user, episodeId);

    saveUserData();
    saveRecentActivity();

    renderEpisodes(item);
    renderWatching();
    renderHistoryShows();
    renderRecent();

    return true;
};

episodesList.addEventListener("click", function (e) {
    const button = e.target.closest(".episode-watch-btn");
    if (!button) return;

    markEpisodeWatched(Number(button.dataset.id), button.dataset.episode);
});


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