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

function renderWatching() {
    const watchingContainer = 
        document.getElementById("progress-watching");
    
    watchingContainer.innerHTML = ""

    Object.keys(userData).forEach(id => {

        const item = media[id];
        const user = userData[id]

        if(!item || item.type !== "tv") return;
        if(!user.watchedEpisodes || user.watchedEpisodes <= 0) return;

        const card = document.createElement("div");

        card.className = "media-card progress-card";
        card.dataset.id = item.id;
        card.dataset.type = item.type;

        card.innerHTML = `
            <img
                src="${item.poster}";
                alt="${item.title}";
                class="prog-poster"
            >

            <div class="ep-info" >

                <div class="title" >
                    ${item.title}
                </div>

                <div class="ep-details">

                    <div class="episode">
                        <span class="ep-number">
                            S.${String(user.lastWatchedEpisode.season).padStart(2,"0")}
                            E.${String(user.lastWatchedEpisode.episode).padStart(2,"0")}
                        </span>

                        <span class="ep-name">
                            ${item.nextEpisode
                                ? `Releases: ${item.nextEpisode.title}`
                                : ""}
                        </span>
                    </div>

                    <div class="date">
                        ${item.nextEpisode
                            ? `Releases: ${item.nextEpisode.releaseDate}`
                            : ""}
                    </div>

                    <div class="progress">
                        <span></span>

                        <div class="progress-bar">
                            <div
                                class="progress-value"
                                style="width: ${(user.watchedEpisodes / user.totalEpisodes)*100}%"
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