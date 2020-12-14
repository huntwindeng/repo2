<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
    import VueAxios from 'vue-axios'
    import axios from 'axios'
export default {
  name: 'App',
    data(){
        return{

        }
    },
    // fetch实现跨域
    //实现跨域
    created() {
        // fetch方式实现跨域
        this.axios.post("/api/showList").then(res=>{
            console.log(res)
        })
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
