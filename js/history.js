// History Movies
function renderHistoryMovies() {

    const movieContainer =
        document.getElementById("history-movies");

    movieContainer.innerHTML = "";

    Object.keys(userData).forEach(id => {

        const item = media[id];
        const user = userData[id];

        if (!item || item.type !== "movie") return;
        if (!user.watched) return;

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

                <div class="watch-meta">
                    <i class="fa-solid fa-clapperboard"></i>
                    <span>${item.year}</span>
                    <span>|</span>
                    <i class="fa-brands fa-imdb"></i>
                    <span>${item.rating}</span>
                </div>

                <div class="history-date">
                    Watched: ${user.watchedDate}
                </div>

            </div>
        `;

        movieContainer.appendChild(card);
    });
}

renderHistoryMovies();

// History Shows
function renderHistoryShows() {

    const historyContainer =
        document.getElementById("history-shows");

    historyContainer.innerHTML = "";

    Object.keys(userData).forEach(id => {

        const item = media[id];
        const user = userData[id];

        if (!item || item.type !== "tv") return;

        if (!user.inHistory) return;

        const percentage =
            Math.round(
                (user.watchedEpisodes / item.totalEpisodes) * 100
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