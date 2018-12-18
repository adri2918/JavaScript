let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
if((hour+8) >= 24){
    hour = "0"+(hour + 8-24)
    if(minute <=9 && minute >=0){
        minute = "0"+minute;
    }
}



console.log("Time in Japan is "+(hour)+":"+(minute))