<template>
    <div class="footer_nav">
        <router-link 
        class="footernav_item" 
        v-for="(item,index) in footernavlist" 
        :key="index" 
        tag="div"
        :to="item.path"
        active-class="footernav_item_active"
        >
            <span class="iconfont" :class="`icon-${item.icon}`"></span>
            <p>{{ item.name }}</p>
        </router-link>
      
    </div>
</template>

<script>
export default {
    data(){
        return{
            footernavlist:[
                {
                    name:'电影',
                    icon:'dianying',
                    path:'/wrap'
                },
                {
                    name:'视频',
                    icon:'shipin',
                    path:'/video'
                },
                {
                    name:'小视频',
                    icon:'shipin',
                    path:'/videos'
                },
                {
                    name:'演出',
                    icon:'menpiao',
                    path:'/show'
                },
                {
                    name:'我的',
                    icon:'wodexianxing',
                    path:'/mine'
                }
            ],
        }
    },
    methods:{    
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