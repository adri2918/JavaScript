const phrases = ["hola", "hola adri", "quiero una banana", "lorem ipsum dolor sit amet"];
let count_words = [];
let words = [];

for(let i = 0 ; i<phrases.length; i++){
    words.push(phrases[i].split(" ").length);   
}


// array.map
count_words = phrases.map
    (function(element, index , array){// element (pasa el valor de la cada posicion de la array) index (es el número que representa la posición de element) array(el objeto entero)
        let  wordss= []; // array que contendrá el numero de palabras de cada posición
        wordss =  array[index].split(" ").length;
        return wordss;
    } );

console.log(count_words);


// try vowels
let count_vowels =  [];
count_vowels = phrases.map(function (element,index,array)
{let inm = 0;
    let a = element.split("");
    a.forEach(element => {
       let i =  element.indexOf("aeiou");
       if(i !==-1){
           inm++;
       }
    });
    return inm;
});
console.log(count_vowels);
