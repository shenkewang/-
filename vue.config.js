//创建的文件名是固定的
const dataApp = require('./data.json');
const seller=dataApp.seller;
const goods=dataApp.goods;
const ratings=dataApp.ratings; 
module.exports={
    lintOnSave:true,
    devServer:{
        before(app){
            app.get('/api/seller',(req,res)=>{
              res.json({
                  errnno:0,
                  data:seller
              })
            }),
            app.get('/api/goods',(req,res)=>{
                res.json({
                    errnno:0,
                    data:goods
                })
              }),
              app.get('/api/ratings',(req,res)=>{
                res.json({
                    errnno:0,
                    data:ratings
                })
              })
        }
    }
}