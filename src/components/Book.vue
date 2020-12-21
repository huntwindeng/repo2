<template>
    <div>
      <table>
        <tr>
          <td>编号</td>
          <td>姓名</td>
          <td>性别</td>
        </tr>
        <tr v-for="item in persons">
          <td>{{item.testUserNo}}</td>
          <td>{{item.testUserName}}</td>
          <td>{{item.testUserSex}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
        name: "Book",
        data(){
            return{
                persons: [
                    {
                        testUserNo:1,
                        testUserName:'xiaoli',
                        testUserSex:'female'
                    },
                    {
                        testUserNo:2,
                        testUserName:'xiaolili',
                        testUserSex:'male'
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
                _this.persons=res.data
            })
        }
    }
</script>

<style scoped>

</style>
