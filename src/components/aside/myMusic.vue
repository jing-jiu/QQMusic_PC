<template>
    <div class="mymusic">
        <ul>
            <span>我的音乐</span>
            <li v-for="(item,index) in items" :key="index" @click="Link(index,item.path)" :class="{ link:isLink[`isLink${index}`] }">
                <i :class="item.icon"></i> {{ item.name }}
            </li>
        </ul>
    </div>
</template>
<style lang="less" scoped>
    .mymusic{
        width: 100%;
        height: 260px;
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
    name:'myMusic',
    data(){
        return {
            items:[
                {
                    name:"我喜欢",
                    path:'/like',
                    icon:'el-icon-magic-stick'
                },
                {
                    name:"本地和下载",
                    path:'/local',
                    icon:'el-icon-s-platform'
                },
                {
                    name:"播放历史",
                    path:'/history',
                    icon:'el-icon-time'
                },
                {
                    name:"试听列表",
                    path:'/audition',
                    icon:'el-icon-s-unfold'
                },
                {
                    name:"已购音乐",
                    path:'/purchased',
                    icon:'el-icon-success'
                }
            ],
            isLink:{
                isLink0:false,
                isLink1:false,
                isLink2:false,
                isLink3:false,
                isLink4:false,
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