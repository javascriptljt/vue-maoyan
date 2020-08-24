<template>
    <div class="footer_nav">
        <div 
        class="footernav_item" 
        v-for="(item,index) in footernavlist" 
        :key="index" 
        @click="footerActive($event,index)"
        :class="{footernav_item_active:actived==index}"
        >
            <span class="iconfont" :class="`icon-${item.icon}`"></span>
            <p>{{ item.name }}</p>
        </div>
      
    </div>
</template>

<script>
export default {
    data(){
        return{
            footernavlist:[
                {
                    name:'电影',
                    icon:'dianying'
                },
                {
                    name:'视频',
                    icon:'shipin'
                },
                {
                    name:'小视频',
                    icon:'shipin'
                },
                {
                    name:'演出',
                    icon:'menpiao'
                },
                {
                    name:'我的',
                    icon:'wodexianxing'
                }
            ],
            actived:0
        }
    },
    methods:{
        footerActive(e,index){
            this.actived=index
        }
    }
}
</script>

<style lang="scss">
    .footer_nav{
        width: 100%;
        height:.5rem;
        display: flex;
        position:fixed;
        bottom:0;
        left: 0;
        background-color: #fff;
        z-index: 99;
        .footernav_item{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: .14rem;
            color: #777;
            span{
                font-size: .25rem;
            }
        }
        .footernav_item_active{
            color: #f03d37;
        }
    }
</style>