const stdin = process.openStdin()

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

stdin.addListener("data", function(input) { 
    console.log("you entered: [" + input.toString().trim() + "]")
    let aa = input.toString();
    aa = aa.trim()
    let minus = aa.toLowerCase();
    console.log(`[${aa}]`);
    if(aa === "title"){
        let title = movies.sort(function comparar (a,b){
            if(a.info.title > b.info.title){
                return 1;
            }else if(a.info.title < b.info.title){
                return -1;
            }else {
                return 0;
            }
        });
        console.log("Ordenado por title ", title);
    }else if(aa === "rating"){
        let rating = movies.sort(function (a,b){
            if(a.info.rating < b.info.rating){
                return 1;
            }else if(a.info.rating > b.info.rating){
                return -1;
            }else{
                return 0;
            }
        }
        )
        console.log("Ordenador por rating ",rating); 
    }else{
        let a = movies.sort(function (a,b){
            if(a.addedAt < b.addedAt){
                return 1;
            }else if(a.addedAt > b.addedAt){
                return -1;
            }else{
                return 0;
            }
        })
        console.log(a); 
    }
   
})