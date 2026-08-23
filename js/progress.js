// Progress Tab
function renderWatching() {
    const watchingContainer =
        document.getElementById("progress-watching");

    watchingContainer.innerHTML = ""

    Object.keys(userData).forEach(id => {

        const item = media[id];
        const user = userData[id]

        if (!item || item.type !== "tv") return;
        if (!user.watchedEpisodes || user.watchedEpisodes <= 0) return;

        const nextEpisode = user.nextEpisode;
        const percentage =
            (user.watchedEpisodes / item.totalEpisodes) * 100;

        const card = document.createElement("div");

        card.className = "media-card progress-card";
        card.dataset.id = item.id;
        card.dataset.type = item.type;

        card.innerHTML = `
            <img
                src="${item.poster}"
                alt="${item.title}"
                class="prog-poster"
            >

            <div class="ep-info" >

                <div class="title" >
                    ${item.title}
                </div>

                <div class="ep-details">

                    <div class="episode">
                        <span class="ep-number">
                            ${nextEpisode
                ? `S.${String(nextEpisode.season).padStart(2, "0")} E.${String(nextEpisode.episode).padStart(2, "0")}`
                : ""}
                        </span>

                        <span class="ep-name">
                            ${nextEpisode
                ? nextEpisode.title
                : ""}
                        </span>
                    </div>

                    <div class="date ${nextEpisode ? "" : "upcoming"}">
                        ${nextEpisode
                ? `Released: ${nextEpisode.releaseDate}`
                : ""}
                    </div>

                    <div class="progress">
                        <span>
                            (${user.watchedEpisodes}/${item.totalEpisodes})
                        </span>

                        <div class="progress-bar">
                            <div
                                class="progress-value"
                                style="width: ${percentage}%"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <i class="fa-regular fa-circle-check watch"></i>
        `;

        watchingContainer.appendChild(card);

    });
}

renderWatching();

// Recent Tab
function renderRecent() {
    const recentContainer = document.getElementById("progress-recent");

    recentContainer.innerHTML = "";

    recentActivity.slice(0, 50).forEach(activity => {
        const item = media[activity.mediaId];
        if (!item || item.type !== "tv") return;

        const episode = item.episodes?.[activity.episodeId];
        if (!episode) return;

        const card = document.createElement("div")

        card.className = "media-card recent-card";
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

                <div class="episode">
                    <span>
                        S.${String(episode.season).padStart(2, "0")}
                        E.${String(episode.episode).padStart(2, "0")}
                    </span>
                </div>

                <div class="episode-name">
                    ${episode.title}
                </div>

                <div class="history-date">
                    Watched: ${activity.watchedDate}
                </div>
            </div>
        `;

        recentContainer.appendChild(card);
    });
}

renderRecent();

