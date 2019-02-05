<template>
  <div id="app" :class="statusStyle">
    <select v-model="selectedResults">
      <option v-for="(date, index) in testDates" :key="`option-${index}`" :value="index">{{date}}</option>
    </select>
    <br/>
    <p v-for="providerResult in currentResults">{{providerResult}}</p>
  </div>
</template>

<script>
import request from 'xhr-request'
import moment from 'moment'
export default {
  name: 'app',
  data(){
    return {
      testDates: [],
      selectedResults: 0,
      resultVod: []
    }
  },
  mounted() {
    this.fetchInfo()
  },
  computed: {
    currentResults() {
      return this.resultVod[this.selectedResults]
    },
    statusStyle() {
      let currentResultVod = this.currentResults
      if (currentResultVod == 0) {
        return 'ok'
      } else {
        return 'error'
      }
    }
  },
  methods: {
    fetchInfo() {
      request('https://logs.tviso.com/extension/testResults?internal=true', {
        json: true}, (err, data) => {
        let VOD = ["amazonMovies","amazonSeries","hbo","movistar","netflixA","netflixB","youtube"]
        for (let resultsIndex = 0 ; resultsIndex < data.result.allResults.length; resultsIndex++) {
          this.testDates.push(moment(data.result.allResults[resultsIndex].date).format('dddd D MMMM HH:mm'))
          const resultSummary = []
          for (let providerIndex = 0; providerIndex < VOD.length; providerIndex++) {
            if (data.result.allResults[resultsIndex].results.vod[VOD[providerIndex]] === 'FAIL') {
              resultSummary.push(VOD[providerIndex]+" FAIL")
            } else if (!data.result.allResults[resultsIndex].results.vod[VOD[providerIndex]]){
              resultSummary.push(VOD[providerIndex]+" NOT PASSED")
            }
          }
          this.resultVod.push(resultSummary)
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin:auto;
  width:1000px;
  text-align: center;
  color: #2c3e50;
}

.ok {
  background-color: lightgreen;
}

.error {
  background-color: orange;
}
</style>

