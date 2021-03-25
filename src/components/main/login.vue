<template>
    <div class="login">
        <i class="el-icon-close" @click="close"></i>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="QQ登录" name="first">QQ登录</el-tab-pane>
            <el-tab-pane label="微信登录" name="second">微信登录</el-tab-pane>
        </el-tabs>
    </div>
</template>
<style lang="less" scoped>
    .login{
        position: absolute;
        width: 500px;
        height: 400px;
        background-color: white;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, .1);
        border-radius:25px;
        top: 50%;
        right: 50%;
        transform: translateX(50%) translateY(-50%);
        .el-icon-close{
          color: black;
          position: absolute;
          right: 5%;
          top:5%;
          font-size: 25px;
          &:hover{
            color: greenyellow;
          }
        }
        .el-tabs{
            position: absolute;
            transform: translateX(50%);
            right: 50%;
            top: 5%;
            .el-tab-pane{
                color: black;
            }
        }
    }
</style>
<script>
export default {
    name:'login',
    data() {
      return {
        activeName: 'first',
        data:null,
        id:1482877448
      };
    },
    created() {
      this.login()
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      close(){
        this.$router.push({path:'/recom'})
      },
      async login(){
        const {data:result} = await this.$http.get('/user/detail',{ params: { 'id': this.id } })
        this.data = result.data
        console.log(this.data);
      },
      async search(){
        const {data:result} = await this.$http.get('/user/cookie')
        console.log(result);
      }
    }
}
</script>