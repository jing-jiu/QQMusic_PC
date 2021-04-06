<template>
    <div class="create">
        <div class="info_container">
            <img :src="data_.logo" alt="" class="img">
            <div class="infobox">
                <div class="info">
                    <h1 class="title">{{ data_.dissname }}</h1>
                    <div class="user">
                        <img :src="data_.headurl" alt="">
                        <span class="name"> {{data_.nickname}} </span>
                    </div>
                    <p class="des">请完善歌单信息，让更多人看到</p>
                </div>
                <div class="nav">
                    <el-button type="warning" round>播放全部</el-button>
                    <el-button round>下载</el-button>
                    <el-button round>批量操作</el-button>
                    <el-button round>分享</el-button>
                </div>
            </div>
        </div>
        <div class="songList">
            <ul class="list">
                <li v-for="item in data_.songlist" :key="item.songmid">
                    <div @click="audio(item.songmid)"> {{ item.songname }} </div>
                    <span> {{ item.singer[0].name }} </span>
                    <span> {{ item.albumname }} </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="less" scoped>
    .create{
        .info_container{
            display: flex;
            justify-content: space-between;
            width: 575px;
            .img{
                width: 160px;
                height: 160px;
                border-radius: 15px;
                background-color: red;
            }
            .infobox{
                height: 160px;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                .info{
                    display: flex;
                    height: 110px;
                    flex-flow: column;
                    justify-content: space-between;
                    .user{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 80px;
                        img{
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                        }
                    }
                }
                .nav{
                    .el-button{
                        background-color:transparent;
                    }
                }
            }
        }
        .songList{
            .list{
                list-style: none;
                li{
                    display: flex;
                    justify-content: space-between;
                    margin: 10px;
                }
            }
        }
    }
</style>

<script>
export default {
    data() {
        return {
            data_:null
        }
    },
    created() {
        this.getCreateList()
    },
    watch: {
        '$route': 'change'
    },
    methods: {
        async getCreateList(){
            const { data:result } = await this.$http.get('/songlist',{ params : { 'id' : this.$route.query.createlist } })
            this.data_ = result.data
            console.log(this.data_);
        },
        change(){
            this.getCreateList()
        },
        async audio(id){
            const { data:result } = await this.$http.get('/song/urls',{ params : { id } })
            this.$store.state.audioUrl = result.data[id]
            console.log(this.$store.state.audioUrl);
        }
    },
}
</script>