// Click card and check button
const cards = document.querySelectorAll(".media-card");
let detailsHistory = [];

cards.forEach(card => {
    card.addEventListener("click", function (e) {

        // Was the check icon clicked?
        if (e.target.closest(".watch, .watch-action")) {
            markAsWatched(card);
            return;
        }

        // Otherwise, the card itself was clicked
        openDetails(card);

    });
});

function openDetails(card) {
    const page = card.closest(".page").id;
    previousPage = page;
    detailsHistory = [];

    renderDetails(card.dataset.id);
    showPage("details-page");
}

function markAsWatched(card) {
    console.log("Marked as watched");
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

    if(!item) return;

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