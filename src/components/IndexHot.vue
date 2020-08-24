<template>
     <div class="mainWrap">
        <index-main></index-main>
        <index-content></index-content>
    </div>
</template>


<script>

//头部宣传栏
import IndexMain from '../components/IndexMain';
//主题内容
import IndexContent from '../components/IndexContent'
export default {
    components:{
        IndexMain,
        IndexContent
    }
}
</script>

<style lang="scss">

</style>