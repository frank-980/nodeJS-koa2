/**
 * controller
 */
 
const {getUserInfo,createUser}= require('../services/user');
const {SuccessModel,FailModel}=require('../model/ResModel');
const {nameRepeat,registerFail, passwordIncorrect}=require('../model/Errorinfo');
const crypto  = require("../utils/crypto")
async function isExist_Ctrl(userName){
    const userInfo=await getUserInfo(userName);
    if(userInfo){
        //已有该用户名的用户数据,停止注册,返回失败
        return new FailModel(nameRepeat.errorCode,nameRepeat.message)
    }else{
        //未找到该用户名数据,继续注册,返回成功
        return new SuccessModel(userInfo)
    }
}
async function register_Ctrl({userName,password,gender}){
    try{
        await createUser({
            userName,
            password:crypto(password),
            gender,
        })
        return new SuccessModel()
    } catch(e){
        console.log(e)
        return new FailModel(registerFail.errorCode,registerFail.message)
    }
}
async function login_Ctrl(ctx,userName,password){
    const userInfo=await getUserInfo(userName,crypto(password));
    if(userInfo){
        ctx.session.userInfo=userInfo
        return new SuccessModel(userInfo)
    }else{
        return new FailModel(passwordIncorrect.errorCode, passwordIncorrect.message)
    }
}
async function logout_Ctrl(ctx){
    delete ctx.session.userInfo;
    return new SuccessModel()
}
module.exports={
    isExist_Ctrl,
    register_Ctrl,
    login_Ctrl,
    logout_Ctrl
};