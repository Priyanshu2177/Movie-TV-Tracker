const media = {

    1: {
        id: 1,
        type: "tv",

        title: "Invincible",
        year: 2021,

        rating: 8.7,
        genres: [
            "Animation",
            "Action",
            "Drama"
        ],

        status: "Returning Series",
        seasons: 2,
        totalEpisodes: 32,
        episodes: {
            "2-3": {
                season: 2,
                episode: 3,
                title: "This Missive, This Machination!",
                releaseDate: "17 Nov 2023",
                nextEpisodeId: "2-4"
            },

            "2-4": {
                season: 2,
                episode: 4,
                title: "It's Been a While",
                releaseDate: "24 Nov 2023",
                nextEpisodeId: "2-5"
            },

            "2-5": {
                season: 2,
                episode: 5,
                title: "This Must Comes as a Shock",
                releaseDate: "14 Mar 2024",
                nextEpisodeId: null
            }
        },

        runtime: null,

        overview: "An ordinary teenager discovers that his father is the world's most powerful superhero, forcing him to balance high school life with the responsibilities of becoming Earth's next protector.",

        poster: "Assets/progress-image.jpg",
        backdrop: "Assets/invincible-backdrop.jpg",

        cast: [
            {
                name: "Steven Yeun",
                image: "Assets/profile.jpeg"
            },

            {
                name: "J.K. Simmons",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Sandra Oh",
                image: "Assets/profile.jpeg"
            }
        ],

        similar: [2, 6]
    },

    2: {
        id: 2,
        type: "tv",

        title: "The Boys",
        year: 2019,

        rating: 8.7,
        genres: [
            "Action",
            "Comedy",
            "Crime"
        ],

        status: "Ended",
        seasons: 4,
        totalEpisodes: 40,
        episodes: {
            "4-1": {
                season: 4,
                episode: 1,
                title: "Department of Dirty Tricks",
                releaseDate: "13 Jun 2024",
                nextEpisodeId: "4-2"
            },

            "4-2": {
                season: 4,
                episode: 2,
                title: "Life Among the Septics",
                releaseDate: "13 Jun 2024",
                nextEpisodeId: "4-3"
            },

            "4-3": {
                season: 4,
                episode: 3,
                title: "We'll Keep the Red Flag Flying Here",
                releaseDate: "13 Jun 2024",
                nextEpisodeId: "4-4"
            },

            "4-4": {
                season: 4,
                episode: 4,
                title: "Wisdom of the Ages",
                releaseDate: "20 Jun 2024",
                nextEpisodeId: null
            }
        },

        runtime: null,

        overview: "A group of vigilantes sets out to expose corrupt superheroes who abuse their powers while hiding behind their public image.",

        poster: "Assets/progress-image.jpg",
        backdrop: "Assets/theboys-backdrop.jpg",

        cast: [
            {
                name: "Karl Urban",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Jack Quaid",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Antony Starr",
                image: "Assets/profile.jpeg"
            }
        ],

        similar: [1, 6]
    },

    3: {
        id: 3,
        type: "tv",

        title: "X-Men '97",
        year: 2024,

        rating: 8.8,
        genres: [
            "Animation",
            "Action",
            "Adventure"
        ],

        status: "Returning Series",
        seasons: 2,
        totalEpisodes: 19,
        episodes: {
            "2-6": {
                season: 2,
                episode: 6,
                title: "Danger.exe",
                releaseDate: "22 Jul 2026",
                nextEpisodeId: "2-7"
            },

            "2-7": {
                season: 2,
                episode: 7,
                title: "Strange Land, Savage Heart",
                releaseDate: "29 Jul 2026",
                nextEpisodeId: "2-8"
            },

            "2-8": {
                season: 2,
                episode: 8,
                title: "The Dead Man's Hand",
                releaseDate: "05 Aug 2026",
                nextEpisodeId: null
            }
        },

        runtime: null,

        overview: "The legendary X-Men continue their fight to protect a world that fears and hates them while facing new enemies and unexpected challenges.",

        poster: "Assets/progress-image.jpg",
        backdrop: "Assets/xmen97-backdrop.jpg",

        cast: [
            {
                name: "Ray Chase",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Jennifer Hale",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Matthew Waterson",
                image: "Assets/profile.jpeg"
            }
        ],

        similar: [1, 6]
    },

    4: {
        id: 4,
        type: "movie",

        title: "Inception",
        year: 2010,

        rating: 8.8,
        genres: [
            "Action",
            "Science Fiction",
            "Thriller"
        ],

        nextEpisode: null,
        runtime: "2h 28m",

        overview: "A skilled thief who steals secrets through dream-sharing technology is offered a chance to erase his criminal past by planting an idea into a target's subconscious.",

        poster: "Assets/progress-image.jpg",
        backdrop: "Assets/inception-backdrop.jpg",

        cast: [
            {
                name: "Leonardo DiCaprio",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Joseph Gordon-Levitt",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Elliot Page",
                image: "Assets/profile.jpeg"
            }
        ],

        similar: [5, 7, 8]
    },

    5: {
        id: 5,
        type: "movie",

        title: "The Dark Knight",
        year: 2008,

        rating: 9.1,
        genres: [
            "Action",
            "Crime",
            "Drama"
        ],

        nextEpisode: null,
        runtime: "2h 32m",

        overview: "Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos while forcing the Dark Knight to confront impossible moral choices.",

        poster: "Assets/progress-image.jpg",
        backdrop: "Assets/darkknight-backdrop.jpg",

        cast: [
            {
                name: "Christian Bale",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Heath Ledger",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Aaron Eckhart",
                image: "Assets/profile.jpeg"
            }
        ],

        similar: [4, 7]
    },

    6: {
        id: 6,
        type: "tv",

        title: "Breaking Bad",
        year: 2008,

        rating: 9.5,
        genres: [
            "Crime",
            "Drama",
            "Thriller"
        ],

        status: "Ended",
        seasons: 5,
        totalEpisodes: 62,
        episodes: {
            "1-1": {
                season: 1,
                episode: 1,
                title: "Pilot",
                releaseDate: "20 Jan 2008",
                nextEpisodeId: "1-2"
            },

            "1-2": {
                season: 1,
                episode: 2,
                title: "Cat's in the Bag...",
                releaseDate: "27 Jan 2008",
                nextEpisodeId: "1-3"
            },

            "1-3": {
                season: 1,
                episode: 3,
                title: "...And the Bag's in the River",
                releaseDate: "10 Feb 2008",
                nextEpisodeId: null
            }
        },

        runtime: null,

        overview: "A high school chemistry teacher diagnosed with cancer partners with a former student to manufacture methamphetamine, transforming into one of television's greatest antiheroes.",

        poster: "Assets/progress-image.jpg",
        backdrop: "Assets/breakingbad-backdrop.jpg",

        cast: [
            {
                name: "Bryan Cranston",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Aaron Paul",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Anna Gunn",
                image: "Assets/profile.jpeg"
            }
        ],

        similar: [2, 1]
    },

    7: {
        id: 7,
        type: "tv",

        title: "Stranger Things",
        year: 2016,

        rating: 8.6,
        genres: [
            "Mystery",
            "Adventure",
            "Sci-Fi"
        ],

        status: "Ended",
        seasons: 5,
        totalEpisodes: 42,
        episodes: {
            "1-1": {
                season: 1,
                episode: 1,
                title: "The Vanishing of Will Byers",
                releaseDate: "15 Jul 2016",
                nextEpisodeId: "1-2"
            },

            "1-2": {
                season: 1,
                episode: 2,
                title: "The Weirdo on Maple Street",
                releaseDate: "15 Jul 2016",
                nextEpisodeId: "1-3"
            },

            "1-3": {
                season: 1,
                episode: 3,
                title: "Holly, Jolly",
                releaseDate: "15 Jul 2016",
                nextEpisodeId: null
            }
        },

        runtime: null,

        overview: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",

        poster: "Assets/progress-image.jpg",
        backdrop: "Assets/strangerthings-backdrop.jpg",

        cast: [
            {
                name: "Millie Bobby Brown",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Finn Wolfhard",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Winona Ryder",
                image: "Assets/profile.jpeg"
            }
        ],

        similar: [2, 1]
    },

    8: {
        id: 8,
        type: "movie",

        title: "Shutter Island",
        year: 2010,

        rating: 8.2,
        genres: [
            "Mystery",
            "Thriller"
        ],

        nextEpisode: null,
        runtime: "2h 18m",

        overview: "Two U.S. Marshals investigate the disappearance of a patient from a psychiatric hospital on a remote island, uncovering disturbing truths along the way.",

        poster: "Assets/progress-image.jpg",
        backdrop: "Assets/shutterisland-backdrop.jpg",

        cast: [
            {
                name: "Leonardo DiCaprio",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Mark Ruffalo",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Ben Kingsley",
                image: "Assets/profile.jpeg"
            }
        ],

        similar: [4, 9]
    },

    9: {
        id: 9,
        type: "movie",

        title: "Fight Club",
        year: 1999,

        rating: 8.8,
        genres: [
            "Drama",
            "Thriller"
        ],

        nextEpisode: null,
        runtime: "2h 19m",

        overview: "An office worker suffering from insomnia forms an underground fight club with a charismatic soap salesman, leading to unexpected consequences.",

        poster: "Assets/progress-image.jpg",
        backdrop: "Assets/fightclub-backdrop.jpg",

        cast: [
            {
                name: "Brad Pitt",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Edward Norton",
                image: "Assets/profile.jpeg"
            },

            {
                name: "Helena Bonham Carter",
                image: "Assets/profile.jpeg"
            }
        ],

        similar: [8, 4]
    }

};

const userData = {
    1: {
        inWatchlist: false,
        inHistory: true,
        watchedEpisodes: 11,
        nextEpisode: {
            season: 2,
            episode: 4,
            title: "It's Been a While",
            releaseDate: "24 Nov 2023"
        }
    },

    2: {
        inWatchlist: false,
        inHistory: true,
        watchedEpisodes: 26,
        nextEpisode: {
            season: 4,
            episode: 3,
            title: "We'll Keep the Red Flag Flying Here",
            releaseDate: "13 Jun 2024"
        }
    },

    3: {
        inWatchlist: false,
        inHistory: true,
        watchedEpisodes: 16,
        nextEpisode: {
            season: 2,
            episode: 7,
            title: "Strange Land, Savage Heart",
            releaseDate: "29 Jul 2026"
        }
    },

    4: {
        inWatchlist: true,
        watched: false
    },

    5: {
        inWatchlist: true,
        watched: false
    },

    6: {
        inWatchlist: true,
        inHistory: false,
        watchedEpisodes: 0
    },

    7: {
        inWatchlist: true,
        inHistory: false,
        watchedEpisodes: 0
    },

    8: {
        inWatchlist: false,
        watched: true,
        watchedDate: "18 Jul 2026"
    },

    9: {
        inWatchlist: false,
        watched: true,
        watchedDate: "14 Jul 2026"
    }
};

const recentActivity = [
    {
        mediaId: 1,
        episodeId: "2-3",
        watchedDate: "22 Jul 2026"
    },

    {
        mediaId: 2,
        episodeId: "4-2",
        watchedDate: "20 Jul 2026"
    },

    {
        mediaId: 3,
        episodeId: "2-6",
        watchedDate: "18 Jul 2026"
    },

    {
        mediaId: 2,
        episodeId: "4-1",
        watchedDate: "17 Jul 2026"
    }
];