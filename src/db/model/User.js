/**
 * 用户数据模型
 */
const seq = require('../seq');
const {STRING,DECIMAL}=require("../type")
const User = seq.define('user',{
    userName:{
        type:STRING,
        allowNull:false,
        unique:true,
        comment:""
    },
    password:{
        type:STRING,
        allowNull:false,
        comment:""
    },
    nickName:{
        type:STRING,
        comment:""
    },
    gender:{
        type:DECIMAL,
        allowNull:false,
        defalutValue:3,
        comment:"1:man,2:woman,3:secret"
    },
    picture:{
        type:STRING,
        comment:"head image address"
    },
    city:{
        type:STRING,
        
    }
})
module.exports = User