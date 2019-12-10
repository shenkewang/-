
import axios from 'axios';

export default function(url){
    return axios.get(url).then(data=>{
        if(data.errno===0){
            return data;
        }
    }).catch(err=>{
        console.log(err);
    })
}
 


