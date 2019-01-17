let VOD = ["amazonMovies","amazonSeries","hbo","movistar","netflixA","netflixB","youtube"]
let fail = [[[]],[[]]]
let notPassed = [[],[]]
notPassed.push([0,0])
const request = require('xhr-request')
var moment = require('moment')
request('https://www.jsonstore.io/07b9374305cb9173a5747bcb2ee571abb20b5d306c4908195dbd5f0b5ab64f9c/testResults', {
  json: true
}, (err, data) => {
    let dates = [], nameVod = [[],[]] , resultVod =  [[],[]];
    let a =0;
    for(let j = 0 ; j<data.result.allResults.length;j++){
        dates[j] = moment(data.result.allResults[j].date).format('dddd D MMMM HH:mm ')
        nameVod[j] = Object.keys(data.result.allResults[j].results.vod)
        resultVod[j] = Object.values(data.result.allResults[j].results.vod)
        for(let i = 0; i<VOD.length;i++){
            let contador = 0
            let contador2 = 0
            for(let u = 0;u<nameVod[j].length;u++){
                if(VOD[i] === nameVod[j][u]){
                    if(resultVod[j][u] === "FAIL"){
                        if (typeof fail[j] === "undefined") {
                            fail[j] = [];
                        }
                        fail[j][contador] = nameVod[j][u]
                        u=100
                        contador++
                    }else{
                        u=100
                        contador++
                    }   
                }else if(VOD[i] != nameVod[a][u] && u == (VOD.length-1)){
                    if (typeof notPassed[a] === "undefined") {
                        notPassed[a] = [];
                    }
                    notPassed[a][contador2] = VOD[i]
                    contador2++
                }
            }
        }
        a++
    }
    document.getElementById("selectView").innerHTML = selectView(data,dates)
    document.getElementById('select').addEventListener('change', filterTestResults(fail,notPassed))

})
function selectView(data,dates){
    let select = "<select id=\"select\">"
    for(let i = (data.result.allResults.length-1); i>=0;i--){
        select += "<option value= \""+i+"\" name=\""+i+"\">"+dates[i]+"</option>"
    }
    select += "</select>"
    return select
}
function filterTestResults(fail, notPassed){
    let option = document.getElementById("select").value
    let array = []
    option =+ option
    for(let u=0;u<fail[option].length;u++){
        array[u] = fail[option][u]+" || FAIL"
        max = u+1
    }

    for(let u=0;u<notPassed[option];u++){
        array[max] = notPassed[option][u]+" || NOT PASSED"
    }

    vodNotFunction(array)
    
}
function vodNotFunction(a){
    if(a.length === 0){
        document.getElementById("mainDiv").style.backgroundColor = "green";
    }else{
        document.getElementById("mainDiv").style.backgroundColor = "red";
        document.getElementById("resultView").innerHTML = a;
    }
}