/**
 * 用户数据模型
 */
const seq = require('../seq');
const {TEXT,INTEGER}=require("../type")
const Blog = seq.define('blog',{
    userId:{
        type:INTEGER,
        allowNull:false,
        comment:""
    },
    content:{
        type:TEXT,
        allowNull:false,
        comment:""
    },
})
module.exports = Blog