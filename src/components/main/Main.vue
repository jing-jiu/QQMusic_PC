<template>
    <div class="Main">
        <router-view>
        </router-view>
        <Top-nav/>
        <Audio/>
    </div>
</template>
<style lang="less" scoped>
    .Main{
        overflow: auto;
        position: relative;
        width: 920px;
        height: 545px;
        padding: 95px 35px 70px 35px;
        background-color: #064C46;
        &::-webkit-scrollbar{
            display:none;
        }
    }
</style>
<script>
import Audio from './Audio'
import TopNav from './topNav.vue'
export default {
    name:'Main',
    components:{ Audio, TopNav }
}
</script>