const http ={
    get:function(url){
       return fetch(url,{
            method:'GET',
        })
    }
}
export default http