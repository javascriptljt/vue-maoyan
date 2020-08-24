<template>
    <div class="ratedMovies">
        <h3>最受好评的电影</h3>
        <ul class="movieList">
            <li v-for="(item) in infoList" :key="item.id">
             <div>
             <img class="movieimg" :src="item.img.replace('/w.h', '')" alt="">
              <span v-if="item.sc!=0">
                观众评分：<em>{{ item.sc }}</em>            
              </span>
               <span v-else>
                <em>{{ item.wish }}人想看</em>            
              </span>
             </div>
             <p>{{ item.nm }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import api from '../utils/api';

export default {
    data(){
        return{
            infoList:[]
        }
    },
    methods:{
    },
    created(){
        api.getInfoList().then(result =>{this.infoList=result.movieList});
    }
}
</script>

<style lang="scss" scoped>
    .ratedMovies{
        width: 100%;
        height: 2.03rem;
        background-color: #fff;
        margin-bottom: .02rem;
        h3{
            height: .4rem;
            font-size: .14rem;
            line-height: .4rem;
            color: #333;
            margin-left: .1rem;
            font-weight: 400;
        }
        li{
            margin: 0 .1rem;
            width: .85rem;
            div{
                width: .85rem;
                height:1.15rem;
                position:relative;
            }
            span{
                position: absolute;
                bottom: 0;
                left: 0;
                color:#faaf00;
                font-size: .11rem;
                font-weight: 600;
            }
            .movieimg{
                width: 100%;
                height: 100%;
            }
            p{
                width: 100%;
                font-size: .13rem;
                color: #222;
                margin: .1rem 0;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
        .movieList{
            width: 100%;
            height: 1.63rem;
            display: flex;
            overflow: auto;    
        &::-webkit-scrollbar{
            display: none;
        } 
         }
    }
     
</style>