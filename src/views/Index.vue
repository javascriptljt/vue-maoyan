<template>
    <div class="wrapBox">
        <router-view></router-view>
        <index-footer></index-footer>
    </div>
</template>



<script>
//底部导航
import IndexFooter from '../components/IndexFooter'
export default {
    data() {
        return {  

        }
    },
    components:{   
        IndexFooter,
    }
}
</script>



<style lang="scss" scoped>
.wrapBox{
    background: #f1f1f1;
    width:100%;
    display:flex;
    flex-direction:column;
   .headerWrap{
       width: 100%;
       height: 1rem;
       position: fixed;
       z-index: 99;
       background-color: #f1f1f1;
   }
   .mainWrap{
       margin-top: 1rem;
   }
}
</style>