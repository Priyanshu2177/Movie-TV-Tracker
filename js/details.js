// Click card and check button
const cards = document.querySelectorAll(".media-card");

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
    showPage("details-page");
}

function markAsWatched(card) {
    console.log("Marked as watched");
}