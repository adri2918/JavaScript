function title (a,b){
    if(a.info.title > b.info.title){
        return 1;
    }else if(a.info.title < b.info.title){
        return -1;
    }else {
        return 0;
    }
}
function rating(a,b){
    if(a.info.rating < b.info.rating){
        return 1;
    }else if(a.info.rating > b.info.rating){
        return -1;
    }else{
        return 0;
    }
}
function date(a,b){
    if(a.addedAt < b.addedAt){
        return 1;
    }else if(a.addedAt > b.addedAt){
        return -1;
    }else{
        return 0;
    }
}
module.exports = {
    title,
    date,
    rating
}