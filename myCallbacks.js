const countVowels = function (element)
{
    return element.split("").reduce((prev, char) => {
        if ("aeiou".indexOf(char) !==-1){
            return prev + 1
        }

        return prev
    }, 0);
}

const countWords = function (phrase){
    if (phrase === undefined || phrase === '') {
        return 0
    }
    
    return phrase.split(" ").length;
}


module.exports = {
    countWords,
    countVowels
}