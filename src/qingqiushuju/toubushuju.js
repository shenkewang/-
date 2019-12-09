export default function geuData(url){
    return function(params){
        this.axios({
            url:url,
            methods:get,
        }).then(data=>{
            if(data.errno===0){
                return data;
            }
        }).catch(err=>{
            console.log(err)
        })
    }
}
