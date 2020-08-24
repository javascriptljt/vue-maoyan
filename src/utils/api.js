import http from './http';

const api ={
    getInfoList(){
        return http.get('/ajax/movieOnInfoList?token=&optimus_uuid=A7A5B720E34711EAA1F555DEF550D501085CE5AAD9AD41ADB95E171A6DAC79FA&optimus_risk_level=71&optimus_code=10')
        .then(res=>{return res.json()})
    }
}
export default api;