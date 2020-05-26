const {SuccessModel,FailModel}=require('../model/ResModel');
const {jsonFail}=require('../model/Errorinfo');
function Validator(validateFn){
    async function middleWare(ctx,next){
        const data = ctx.request.body
        const error = validateFn(data);
        if(error){
            ctx.body = new FailModel(jsonFail.errorCode,jsonFail.message);
            return ;
        }
        await next()
    }
    return middleWare;
}
module.exports={Validator}