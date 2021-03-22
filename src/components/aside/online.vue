<template>
    <div class="online">
        <ul>
            <span>在线音乐</span>
            <li v-for="(item,index) in items" :key="index" @click="Link(index,item.path)" :class="{ link:isLink[`isLink${index}`] }">
                <i :class="item.icon"></i> {{ item.name }}
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
    .online{
        width: 100%;
        height: 210px;
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
    name:'online',
    data(){
        return {
            items:[
                {
                    name:"推荐",
                    path:'/recom',
                    icon:'el-icon-star-off'
                },
                {
                    name:"音乐馆",
                    path:'/musicHall',
                    icon:'el-icon-headset'
                },
                {
                    name:"视频",
                    path:'/video',
                    icon:'el-icon-video-camera-solid'
                },
                {
                    name:"电台",
                    path:'/station',
                    icon:'el-icon-c-scale-to-original'
                }
            ],
            isLink:{
                isLink0:true,
                isLink1:false,
                isLink2:false,
                isLink3:false,
            }
        }
    },
    methods:{
        Link(key,ip){
            for (let item in this.isLink) {
                this.isLink[item] = false
            }
            this.isLink[`isLink${key}`] = true
            this.$router.push({path:ip})
        }
    }
}
</script>