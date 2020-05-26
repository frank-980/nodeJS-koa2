/**
 * 同步到数据库
 */
//seq的配置信息
const seq = require("./seq");
require('./model/index');
seq.authenticate().then((r)=>{
   console.log('ok')
}).catch(()=>{
   console.log('error')
})
seq.sync({force:true}).then(()=>{
    
   process.exit()
});