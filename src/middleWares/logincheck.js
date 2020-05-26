const {SuccessModel,FailModel}=require('../model/ResModel');
const {loginCheckFail}=require('../model/Errorinfo');
async function loginMiddleWare_api(ctx,next){
    const session = ctx.session.userInfo;
    if(session){
        await next();
        return ;
    }
    ctx.body = new FailModel(loginCheckFail.errorCode,loginCheckFail.message)
}
async function loginMiddleWare_page(ctx,next){
    const session = ctx.session.userInfo;
    if(session){
        await next();
        return ;
    }
    const currentUrl = ctx.url;
    ctx.redirect('/login?url='+encodeURIComponent(currentUrl))
}
module.exports={
    loginMiddleWare_api,
    loginMiddleWare_page
}
