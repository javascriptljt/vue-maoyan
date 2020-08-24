<template>
<div>
    <div class="headerWrap">
        <index-header></index-header>
        <index-nav></index-nav>
    </div>
  <router-view></router-view>
</div>
</template>


<script>
//首页头部组件
import IndexHeader from '../components/IndexHeader';
//导航栏
import IndexNav from '../components/IndexNav';


export default {
    data(){
        return{}
    },
    components:{
         IndexHeader,
         IndexNav,
    }
}
</script>


<style lang="scss">

</style>