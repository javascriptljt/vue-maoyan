<template>
    <div class="headerBox">
        <h1 class="titleH1">猫眼电影</h1>
        <span class="iconfont icon-mulu-lujing"></span>
    </div>
</template>


<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
    .headerBox{
        width:100%;
        height:0.5rem;
        background-color:#e54847;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        color: white;
        
        .titleH1{
            flex: 9;
            text-align: center;
            font-size: .18rem;
            font-weight: 200;
        }
        .icon-mulu-lujing{
            font-size: .25rem;
            flex: 1;
        }
    }
</style>