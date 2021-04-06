<template>
    <div class="Audio">
        <audio :src="$store.state.audioUrl" controls autoplay></audio>
    </div>
</template>
<style lang="less" scoped>
    .Audio{
        position: fixed;
        bottom: 0;
        left: 210px;
        height: 70px;
        width: 990px;
        background-color: yellow;
    }
</style>
<script>
export default {
    name:'Audio'
}
</script>