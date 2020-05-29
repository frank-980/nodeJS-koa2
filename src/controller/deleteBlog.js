const {SuccessModel,FailModel} = require("../model/ResModel");
const {deleteBlogFail} = require("../model/Errorinfo");
const {deleteBlog} = require("../services/Blog");
async function deleteBlog_Ctrl(id){
    try{
        const data = await deleteBlog(id)
        return new SuccessModel(data);
    }catch(ex){
        console.error(ex.stack)
        return new FailModel(deleteBlogFail)
    }
}
module.exports = {
    deleteBlog_Ctrl
}