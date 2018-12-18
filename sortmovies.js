const myCallbacks = require('./moviesFunction')
const movies = [
    {
        info: {
            title: "Babel",
            rating: 8
        },
        addedAt: "2011-12-08"
    },
    {
        info: {
            title: "Her",
            rating: 9
        },
        addedAt: "2016-07-24"
    },
    {
        info: {
            title: "Trainspotting",
            rating: 7
        },
        addedAt: "2012-01-30"
    }
]
const stdin = process.openStdin()
stdin.addListener("data", function(input) {
    input = input.toString().trim().toLowerCase();
    console.log("you entered: [" + input + "]")
    if(myCallbacks[input] === undefined){
        console.log("Error - function doesnt exist")
    }else{
        console.log(movies.sort(myCallbacks[input]))
    }
})