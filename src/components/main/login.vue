<template>
    <div class="login">
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
        .el-tabs{
            position: absolute;
            transform: translateX(50%);
            right: 50%;
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
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>