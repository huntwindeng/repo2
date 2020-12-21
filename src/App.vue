<template>
  <div id="app">
    <router-link to="/Book">Book</router-link>
<!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
    //导入axios
    import axios from "axios"
    //将axios挂载到原型
    //Vue.prototype.axios = axios
    //axios.defaults.baseURL = '/api'  //关键代码
    //Vue.config.productionTip = false
export default {
  name: 'App',
    data(){
        return{
            persons: [
                {
                    userno:1,
                    username:'xiaoli',
                    usersex:'female'
                },
                {
                    userno:2,
                    username:'xiaowan',
                    usersex:'male'
                }
            ]

        }
    },
    // fetch实现跨域
    //实现跨域
    created() {
        // fetch方式实现跨域
        const _this=this
        this.axios.post("/api/showList").then(res=>{
            console.log(res)
            _this.books=res.data
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
