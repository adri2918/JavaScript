const request = require('xhr-request')
var moment = require('moment')
request('https://www.jsonstore.io/07b9374305cb9173a5747bcb2ee571abb20b5d306c4908195dbd5f0b5ab64f9c/testResults', {
  json: true
}, (err, data) => {
  let dates = [], nameLive = [], nameVod = [], resultLive = [], resultVod = [], mostrar = [];
  for(let i = 0 ; i<data.result.allResults.length;i++){
    dates[i] = moment(data.result.allResults[i].date).format('dddd D MMMM HH:mm ')
  }
  for(let i = 0 ; i < data.result.allResults.length ; i++){
    nameLive[i] = Object.keys(data.result.allResults[i].results.live)
    nameVod[i] = Object.keys(data.result.allResults[i].results.vod)
    resultLive[i] = Object.values(data.result.allResults[i].results.live)
    resultVod[i] = Object.values(data.result.allResults[i].results.vod)
  }
let contador = [], failProviders = [""], totalProviders;
  for(let i = 0 ; i < data.result.allResults.length ; i++){
    contador = 0
    totalProviders = nameLive[i].length+nameVod[i].length
    failProviders[i] = "Failing providers: \n"
    for(let u = 0 ; u <nameLive[i].length ; u++){
      if(resultLive[i][u] == "PASS"){
        contador++
      }else{
        failProviders[i] +=  "- live/"+nameLive[i][u]+"\n"
      }
    }
    for(let j = 0 ; j < nameVod[i].length ; j++){
      if(resultVod[i][j] == "PASS"){
        contador++
      }else{
        failProviders[i] += "- vod/"+nameVod[i][j]+"\n"
      }
    }
    mostrar[i] = dates[i]+"\n"+contador+"/"+totalProviders+" tests passed\n"+failProviders[i]
    
  }
  for(let i = 0 ; i < mostrar.length ; i++){
    console.log(mostrar[i])
  }
  
})

