<template>
    <div>
        <h1>collect</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items:null
        }
    },
    created() {
        this.getSongList()
    },
    methods: {
        async getSongList(){
            const { data:result } = await this.$http.get('/songlist',{ params : { 'id' : this.$route.query.songlist } })
            console.log(result);
        }
    },
}
</script>