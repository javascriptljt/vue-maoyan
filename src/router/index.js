import Vue from 'vue';
import VueRouter from 'vue-router';
// import { component } from 'vue/types/umd';


Vue.use(VueRouter)


const routes = [
    {
        name:'default',
        path:'',
        redirect:'/wrap'
    },
    {
        name:'IndexMine',
        path:'/mine',
        component:()=>import('../views/IndexMine.vue')
    },
    {
        name:'IndexShow',
        path:'/show',
        component:()=>import('../views/IndexShow.vue')
    },
    {
        name:'IndexVideo',
        path:'/video',
        component:()=>import('../views/IndexVideo.vue')
    },
    {
        name:'IndexVideos',
        path:'/videos',
        component:()=>import('../views/IndexVideos.vue')
    },
    {
        name:'IndexWrap',
        path:'/wrap',
        component:()=>import('../views/IndexWrap.vue'),
        children:[
            {
                name:'children-default',
                path:'/wrap/',
                redirect:'/wrap/hot'
            },
            {
                path:'hot',
                component:()=>import('../components/IndexHot.vue')
            },
            {
                path:'cinema',
                component:()=>import('../components/IndexCinema.vue')
            },
            {
                path:'wait',
                component:()=>import('../components/IndexWait.vue')
            },
            {
                path:'classic',
                component:()=>import('../components/IndexClassic.vue')  
            }
            ],
    }
];

const router = new VueRouter({
    routes
})

export default router;