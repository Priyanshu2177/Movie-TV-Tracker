// Progress Tab
function renderWatching() {
    const watchingContainer = 
        document.getElementById("progress-watching");
    
    watchingContainer.innerHTML = ""

    Object.keys(userData).forEach(id => {

        const item = media[id];
        const user = userData[id]

        if(!item || item.type !== "tv") return;
        if(!user.watchedEpisodes || user.watchedEpisodes <= 0) return;

        const nextEpisode = user.nextEpisode;
        const percentage =
            (user.watchedEpisodes / user.totalEpisodes) * 100;

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
                                ? `S.${String(nextEpisode.season).padStart(2,"0")} E.${String(nextEpisode.episode).padStart(2,"0")}`
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
                            (${user.watchedEpisodes}/${user.totalEpisodes})
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

    })
}

renderWatching();

// Recent Tab
function renderRecent() {
    const recentContainer = document.getElementById("progress-recent");

    recentContainer.innerHTML = "";

    recentActivity.forEach(activity => {
        const item = media[activity.mediaId];

        if(!item || item.type !== "tv") return;

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
                        S.${String(activity.season).padStart(2, "0")}
                        E.${String(activity.episode).padStart(2, "0")}
                    </span>
                </div>

                <div class="episode-name">
                    ${item.episodeData?.[activity.season]?.[activity.episode]?.title || ""}
                </div>

                <div class="history-date">
                    Watched: ${activity.watchedDate}
                </div>
            </div>
        `;

        recentContainer.appendChild(card);
    })
}

renderRecent();

// History Shows
function renderHistoryShows() {

    const historyContainer =
        document.getElementById("history-shows");

    historyContainer.innerHTML = "";

    Object.keys(userData).forEach(id => {

        const item = media[id];
        const user = userData[id];

        if (!item || item.type !== "tv") return;

        if (!user.watchedEpisodes || user.watchedEpisodes <= 0) return;

        const percentage =
            Math.round(
                (user.watchedEpisodes / user.totalEpisodes) * 100
            );
        
        let progressClass = "progress-yellow";

        if(percentage === 100){
            if(item.status === "Ended"){
                progressClass = "progress-green";
            }
            else if(item.status === "Returning Series"){
                progressClass = "progress-purple";
            }
        }

        const card = document.createElement("div");

        card.className = "media-card history-card";
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

                <div class="history-progress">

                    <div class="history-progress-bar">

                        <div
                            class="history-progress-value ${progressClass}"
                            style="width: ${percentage}%"
                        ></div>

                    </div>

                    <span class="history-percentage">
                        ${percentage}%
                    </span>

                </div>

            </div>
        `;

        historyContainer.appendChild(card);
    });
}

renderHistoryShows()