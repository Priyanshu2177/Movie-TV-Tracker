const STORAGE_KEY = "cineTimeUserData";
const RECENT_KEY = "cineTimeRecentActivity";


function saveUserData() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(userData)
    );
}


function saveRecentActivity() {
    localStorage.setItem(
        RECENT_KEY,
        JSON.stringify(recentActivity)
    );
}


function loadUserData() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (!savedData) return;

    const parsedData = JSON.parse(savedData);

    Object.keys(parsedData).forEach(id => {
        if (userData[id]) {
            userData[id] = parsedData[id];
        }
    });
}


function loadRecentActivity() {
    const savedActivity = localStorage.getItem(RECENT_KEY);

    if (!savedActivity) return;

    const parsedActivity = JSON.parse(savedActivity);

    recentActivity.length = 0;
    recentActivity.push(...parsedActivity);
}


loadUserData();
loadRecentActivity();