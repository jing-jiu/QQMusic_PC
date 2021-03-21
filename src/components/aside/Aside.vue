<template>
    <div class="Aside">
        <div class="logo">
            <img src="../../assets/img/qqLogo.png" alt="logo">
        </div>
        <div class="nav">
            <Online/>
            <My-music/>
            <Create-list/>
            <Collection/>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .Aside{
        width: 210px;
        height: 710px;
        background-color: rgb(22, 201, 177);
        overflow: auto;
        &::-webkit-scrollbar{
            display:none;
        }
        .logo{
            position: fixed;
            top: 0;
            width: 120px;
            height: 15px;
            padding: 30px 40px 50px 50px;
            z-index: 100;
            background-color: rgb(22, 201, 177);
            img{
                width: 100px;
            }
        }
        .nav{
            margin-top: 95px;
            width: 80%;
            height: 800px;
            padding: 0 10%;
        }
    }
</style>
<script>
import Collection from './collection.vue'
import CreateList from './createList.vue'
import MyMusic from './myMusic.vue'
import Online from './online.vue'
export default {
    components: { Online, MyMusic, CreateList, Collection },
    name:'Aside'
}
</script>