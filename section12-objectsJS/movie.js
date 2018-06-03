var movies = [
    {
        title: "Pan's Labyrinth",
        rating: 5.0,
        seen: true
    },
    {
        title: "Les Miserables",
        rating: 4.5,
        seen: true
    },
    {
        title: "Amelie",
        rating: 4.5,
        seen: false
    },
    {
        title: "Before Sunrise",
        rating: 4.0,
        seen: false
    },
]

console.log("Run database(movies) to see your movie database!")

// This is Colt's code. DRY, but looks more complicated.
//A second function is created to clean it up.

function database(list) {
    list.forEach(function(movie) {
        console.log(buildString(movie));
    });
}

function buildString(movie) {
    var result = "You have "
    if(movie.seen) {
        result += "seen "
    } else {
        result += "not seen ";
    }
        result += "\"" + movie.title + "\" - ";
        result += movie.rating + " stars.";
    return result;
}


// This is my code. Not DRY, but easier to write and understand for a beginner.

// function database(list) {
// list.forEach(function(i) {
//     if(i.seen) {
//         console.log("You have seen \"" + i.title + "\" - " + i.rating + " stars.");
//     } else {
//         console.log("You have not seen \"" + i.title + "\" - " + i.rating + " stars.")
//     }
// });
// }
