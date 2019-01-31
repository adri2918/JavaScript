<template>
  <div id="app">
    <br>
    <div>{{mensaje}}</div>
    <div>Calcular Palabras: {{calcularPalabras}}</div>
    <div>Calcular Letras: {{calcularLetras}}</div>
    <div>Calcular Vocales: {{calcularVocales}}</div>
    <br>
    <input v-model="mensaje">
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      mensaje: ''
    }
  },
  created() {
    console.log("creado!")
    this.mensaje = new Date().toISOString()
  },
  computed:{
    calcularLetras () {
      return (this.mensaje).length
    },
    calcularPalabras () {
      if ((this.mensaje).length === 0) {
        return 0
      } else {
        return ((this.mensaje).trim().split(" ").length)
      }
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
