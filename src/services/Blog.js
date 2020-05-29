const Blog = require("../db/model/Blog");
async function createBlog(userId,content){
    const result =await Blog.create({
        userId,
        content
    })
    return result.dataValues;
}
async function deleteBlog(id){
    const result =await Blog.destroy({
        where:{
            id:id
        }
    })
    return result.dataValues;
}
module.exports={
    createBlog,
    deleteBlog
}