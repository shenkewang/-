
import axios from 'axios';
export default async function(url){
    let res =await axios.get(url);
    const{errnno,data}=res.data;
    if(errnno===0){
        return data;
    }else{
        console.log('有错');
    }
}
 


