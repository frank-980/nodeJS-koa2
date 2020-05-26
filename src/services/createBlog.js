const Blog = require("../db/model/Blog");
async function createBlog(userId,content){
    const result =await Blog.create({
        userId,
        content
    })
    return result.dataValues;
}
module.exports={
    createBlog
}