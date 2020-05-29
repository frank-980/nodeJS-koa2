/**
 * controller/user
 */
const {User} = require('../db/model/index');
const {DEFAULT_PICTURE} = require("../conf/const")
const {formatUser}=require('./_format')
async function getUserInfo(userName,password){
    const whereOpt={
            userName
        }
    if(password){
        Object.assign(whereOpt,{password})
    }
    const result = await User.findOne({
        attributes:['id','userName','nickName','picture','city'],
        where:whereOpt
    })
    if(result==null){
        return result;
    }
    return formatUser(result.dataValues)
}
async function createUser({userName,password,gender=3,nickName}){
    const result = await User.create({
        userName,
        password,
        nickName:nickName?nickName:userName,
        picture:DEFAULT_PICTURE,
        gender
    })
    return result.dataValues
}
module.exports={
    getUserInfo,
    createUser
}
