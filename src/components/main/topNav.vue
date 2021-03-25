<template>
    <div class="topNav">
        <div class="left">
            <div class="router">
                <a href="#" class="l">
                    <i class="el-icon-arrow-left"></i>
                </a>
                <a href="#" class="r">
                    <i class="el-icon-arrow-right"></i>
                </a>
            </div>
            <input placeholder="搜素音乐" v-model="input"/>
        </div>
        <div class="right">
            <router-link to="" v-if="hasId">
                <img src="" alt="">
                <span class="name"></span>
            </router-link>
            <router-link to="/login" v-else><span class="login">登录</span></router-link>
            <router-link to=""><i class="el-icon-arrow-down"></i></router-link>
            <router-link to=""><i class="el-icon-setting"></i></router-link>
            <router-link to=""><i class="el-icon-s-operation"></i></router-link>
            <router-link to=""><i class="el-icon-minus"></i></router-link>
            <router-link to=""><i class="el-icon-news"></i></router-link>
            <router-link to=""><i class="el-icon-close"></i></router-link>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .topNav{
        position: fixed;
        top: 0;
        display: flex;
        padding-top: 25px;
        width: 920px;
        height: 70px;
        justify-content: space-between;
        .left{
            display: flex;
            justify-content: space-around;
            .router{
                display: flex;
                justify-content: space-between;
                margin-top: 5px;
                .l{
                   margin-right: 10px; 
                }
                .r{
                   margin-left: 10px; 
                }
            }
            input{
                margin-left: 20px;
                outline: none;
                border: none;
                width: 150px;
                padding: 0 20px;
                height: 35px;
                font-size: 12px;
                background-color: black;
                opacity: 0.3;
                border-radius: 18px;
            }
        }
        .right{
            display: flex;
            width: 260px;
            a{
                text-decoration: none;
            }
            justify-content: space-between;
            img{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #fff;
            }
            i{
                font-size: 20px;
            }
        }
    }
</style>
<script>
export default {
    name:'topNav',
    data(){
        return {
            input:'',
            hasId:false
        }
    }
}
</script>