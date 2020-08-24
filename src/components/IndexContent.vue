<template>
    <div class="wrapBox">
        <index-content-li :list="infoList"></index-content-li>
    </div>
</template>


<script>
import api from '../utils/api';
import IndexContentLi from './IndexContent_li'
export default {
     data(){
        return {
            infoList:[]
        }
    },
    created(){
        api.getInfoList().then(result =>{this.infoList=result.movieList;});
    },
    components:{
        IndexContentLi,
    }
}
</script>

<style lang="scss" scoped>
    .wrapBox{
        width: 100%;
        overflow: auto;
        margin: .05rem 0;
    }
</style>