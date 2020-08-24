<template>
    <div class="wrapBox">
        <div class="headerWrap">
        <index-header></index-header>
        <index-nav></index-nav>
        </div>
        <div class="mainWrap">
        <index-main></index-main>
        <index-content></index-content>
        </div>
        <index-footer></index-footer>
    </div>
</template>



<script>
//首页头部组件
import IndexHeader from '../components/IndexHeader';
//导航栏
import IndexNav from '../components/IndexNav';
//头部宣传栏
import IndexMain from '../components/IndexMain';
//主题内容
import IndexContent from '../components/IndexContent'
//底部导航
import IndexFooter from '../components/IndexFooter'
export default {
    data() {
        return {  

        }
    },
    components:{
        IndexHeader,
        IndexNav,
        IndexMain,
        IndexContent,
        IndexFooter
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