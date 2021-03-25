<template>
    <div class="mymusic">
        <ul>
            <span>收藏的歌单</span>
            <li v-for="(item,index) in items" :key="index" @click="Link(index,item.dissid)" :class="{ link:isLink[`isLink${index}`] }">
                {{ item.dissname }}
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
    .mymusic{
        width: 100%;
        height: 150px;
        display: flex;
        justify-content: space-around;
        a{
            text-decoration: none;
            margin-left: 20px;
            font-size: 14px;
        }
        ul{
           list-style: none;
           width: 100%;
           span{
               font-size: 13px;
               margin-left: 22px;
           }
           .link{
                background-color: rgb(24, 23, 23);
                opacity: 0.5;
            }
           li{
               width: 100%;
               height: 20px;
               margin: 10px auto;
               padding: 5px 0;
               border-radius: 5px;
               &:hover{
                   background-color: rgb(24, 23, 23);
                   opacity: 0.5;
               }
           } 
        }
    }
</style>
<script>
export default {
    name:'createList',
    data(){
        return {
            items:null,
            isLink:{
                isLink0:false,
                isLink1:false,
                isLink2:false,
                isLink3:false,
                isLink4:false,
            },
        }
    },
    created() {
        this.getCollectionList()
    },
    methods:{
        Link(key,ip){
            for (let item in this.isLink) {
                this.isLink[item] = false
            }
            this.isLink[`isLink${key}`] = true
            this.$router.push({path:'/collect',query: { songlist: ip }})
        },
        async getCollectionList(){
            const {data:result} = await this.$http.get('/user/collect/songlist',{ params: { 'id': this.$store.state.id } })
            this.items = result.data.list
        }
    }
}
</script>