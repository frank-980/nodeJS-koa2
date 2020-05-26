/**
 *  存储配置
 */
const  {isProd} = require('../utils/env');
let REDIS_CONF={
    port:6379,
    host:'127.0.0.1'
}
const MYSQL_CONF={
    host:"localhost",
    user:"root",
    password:"",
    port:"3306",
    database:"koa2_weibo_db",
    dialect:"mysql"
}
//线上环境
if(isProd){
    REDIS_CONF={
        port:6379,
        host:'127.0.0.1'
    }
    MYSQL_CONF={
        host:"localhost",
        user:"root",
        password:"",
        port:"3306",
        database:"koa2_weibo_db",
        dialect:"mysql"
    }
}
module.exports={
    REDIS_CONF,
    MYSQL_CONF
}