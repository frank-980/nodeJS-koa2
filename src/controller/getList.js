const selectBlog = require("../services/getlist");
const {SuccessModel,FailModel} = require("../model/ResModel");
const {selectBlogFail} = require("../model/Errorinfo");
async function getlist_Ctrl(pageIndex){
    const result = await selectBlog(pageIndex);
    if(result.length!=0){
        return new SuccessModel(result)
    }else{
        return new FailModel(selectBlogFail)
    }
}
module.exports=getlist_Ctrl;