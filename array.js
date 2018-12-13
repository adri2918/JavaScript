const phrases = ["hola", "hola adri", "quiero una banana", "lorem ipsum dolor sit amet"];
// let count_words = [];



// function countWords(phrase){// element (pasa el valor de la cada posicion de la array) index (es el número que representa la posición de element) array(el objeto entero)
//     if (phrase === undefined || phrase === '') {
//         return 0
//     }
    
//     return phrase.split(" ").length;
// } 


// function countVowels(element)
// {
//     return element.split("").reduce((prev, char) => {
//         if ("aeiou".indexOf(char) !==-1){
//             return prev + 1
//         }

//         return prev
//     }, 0);
// }

// console.log(countVowels("hola"))


// // array.map
// count_words = phrases.map(countVowels);

// console.log(count_words);

console.log(phrases.map(phrase => phrase.replace(/[^aeiou]/g, '').length))
let count_vowels =  [];
count_vowels = phrases.map(function (element,index,array)
{let inm = 0;
    let a = element.split("");
    a.forEach(element => {
       let i =  "aeiou".indexOf(element);
       if(i !==-1){
           inm++;
       }
    });
    return inm;
});
console.log(count_vowels);