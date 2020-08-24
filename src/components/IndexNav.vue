<template>
    <div class="navBox">
        <div class="navBox_left">
            {{ city }}
        </div>
        <div class="navBox_mid">
            <router-link v-for="(item,index) in optionList"    
            :key="index" 
            :to="item.path"
            tag="li"
            >
                {{ item.name }}
            </router-link>
            <span class="redBorder" :style="{left : borderMove +'rem'}"></span>
        </div>
        <div class="navBox_right">
            <span class="iconfont icon-Magnifier"></span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            city:'杭州▼',
            optionList:[
                {
                    name:'热映',
                    path:'/wrap/hot'
                },
                {
                    name:'影院',
                    path:'/wrap/cinema'    
                },
                {
                    name:'待映',
                    path:'/wrap/wait'
                },
                {
                    name:'经典电影',
                    path:'/wrap/classic'    
                }
                ],
            actived:0,
            borderList:[.1,.5,0.95,1.45],
            borderMove:.1
        }
    },
    methods:{
        navActive(e,index){
            this.actived=index;
            this.borderMove = this.borderList[index]
        }
    }
}
</script>

<style lang="scss" scoped>
    .navBox{
        width: 100%;
        padding: 0 .2rem;
        height: .44rem;
        background-color: #fff;
        margin: .03rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .navBox_mid{
            height: 100%;
            display: flex;
            align-items: center;
            flex: 3;
            display: flex;
            justify-content: space-between;
            color: #666;
            font-size: .15rem;
            font-weight: 500;
            position: relative;
            li{
                height: 100%;
                line-height: .4rem;
            }
            .redBorder{
                width: .2rem;
                border: .02rem solid #e54847;
                position: absolute;
                bottom: 0;
                left: .05rem;
                transition: left .1s linear;
            }
            .navBox_active{
            font-size: .2rem;
            color: #333;
            }
        }
        .navBox_left{
            flex: 1;
            font-size: .15rem;
            color: #666;
        }
        .navBox_right{
            flex: 1;
            display: flex;
            justify-content: flex-end;
            color: #e54847;
            span{
                font-size: .25rem;
            }
        }
       
    }
</style>