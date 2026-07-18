const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

let watched = 11;
let total = 32;

let percentage = (watched / total) * 100;

document.querySelector(".progress-value").style.width = percentage + "%";

document.getElementById("status").textContent =
    `(${watched}/${total})`;