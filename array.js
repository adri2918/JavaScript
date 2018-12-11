const phrases = ["hola", "hola adri", "quiero una banana", "lorem ipsum dolor sit amet"];

let words = [];

for(let i = 0 ; i<phrases.length; i++){
    words.push(phrases[i].split(" ").length);   
}
let rels;

 rels = phrases.map(function(element){
    
     return element.length;
 }
);

console.log(rels);
// array.map