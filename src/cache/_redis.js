const redis=require('redis');
const REDIS_CONF = require('../conf/db.js');

const redisClient=redis.createClient(REDIS_CONF.port,REDIS_CONF.host);
redisClient.on('error',err=>{
    console.log(err)
})

/**
 * redis set
 * {string} key
 * {string} val
 * {number} timeout
 */
function set(key,val,timeout=60*60){
    if(typeof val==='object'){
        val = JSON.stringify(val);
    }
    redisClient.set(key,value);
    redisClient.expire(key,timeout)
}
/**
 * redis get
 * @param {string} key 
 */
function get(key){
    return new Promise((rev,rej)=>{
        redisClient.get(key,(err,val)=>{
            if(err){
                rej(err);
                return;
            }
            if(val==null){
                rev(null);
                return;
            }
            try{
                rev(val)
            }catch (e){
                rev(val)
            }
        })
    })
}
