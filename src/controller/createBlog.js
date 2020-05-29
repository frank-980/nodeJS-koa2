const {SuccessModel,FailModel} = require("../model/ResModel");
const {createBlogFail} = require("../model/Errorinfo");
const {createBlog} = require("../services/Blog");
async function createBlog_Ctrl(userId,content){
    try{
        const data = await createBlog(userId,content)
        return new SuccessModel(data);
    }catch(ex){
        console.error(ex.stack)
        return new FailModel(createBlogFail)
    }
}
module.exports = {
    createBlog_Ctrl
}