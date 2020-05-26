/**
 * seq的配置信息
 */
const Sequelize = require('sequelize');
const {MYSQL_CONF} = require('../conf/db');
const  {isProd,isTest} = require('../utils/env');
const conf={
    host:MYSQL_CONF.host,
    dialect:"mysql"
}
if(isTest){
    conf.logging=()=>{}
}
if(isProd){
    conf.pool={
        max:5,
        min:0,
        idle:10000
    }
}
const seq = new Sequelize(MYSQL_CONF.database,MYSQL_CONF.user,MYSQL_CONF.password,conf)
module.exports=seq;