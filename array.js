const phrases = ["hola", "hola adri", "quiero una banana", "lorem ipsum dolor sit amet"];
let count_words = [];
let words = [];

for(let i = 0 ; i<phrases.length; i++){
    words.push(phrases[i].split(" ").length);   
}
count_words = phrases.map((function(element, index , array){
    let  wordss= [];
    wordss =  array[index].split(" ").length;
    return wordss;
}
));

console.log(count_words);
// array.map