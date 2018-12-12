const phrases = ["hola", "hola adri", "quiero una banana", "lorem ipsum dolor sit amet"];
let count_words = [];
let words = [];

for(let i = 0 ; i<phrases.length; i++){
    words.push(phrases[i].split(" ").length);   
}
// array.map
count_words = phrases.map((function(element, index , array){// element (pasa el valor de la cada posicion de la array) index (es el número que representa la posición de element) array(el objeto entero)
    let  wordss= []; // array que contendrá el numero de palabras de cada posición
    wordss =  array[index].split(" ").length;
    return wordss;
}
));

console.log(count_words);
