<template>
  <div id="app">
    <br>
    <div>{{mensaje}}</div>
    <div>{{calcularPalabras}}</div>
    <div>{{calcularLetras}}</div>
    <div>{{calcularVocales}}</div>
    <br>
    <input v-model="mensaje">
  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
    calcularPalabras () {
      return (this.mensaje).length
    },
    calcularLetras () {
      return (this.mensaje).split(" ").length
    },
    calcularVocales () {
      let vowels = ["a","e","i","o","u"]
      let splitted = (this.mensaje).split(""), count=0
           for(let i = 0 ; i < (this.mensaje).length ;i++){
              for(let u = 0 ; u < 5 ; u++){
                if(splitted[i] === vowels[u]){
                  count++
                }
              }
           }
      return count
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
