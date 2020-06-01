const Blog = require("../db/model/Blog");
const User = require("../db/model/User");
const {pageLength} = require("../conf/const")
async function selectBlog(pageIndex){
    const limit = pageLength;
    const offset = pageLength*pageIndex
    const data = await Blog.findAndCountAll({
        attributes:[
            'content',
            'createdAt',
            'id'
        ],
        limit:limit,
        offset:offset,
        order:[
            ['id','desc']
        ],
        include:[{
            model:User,
            attributes:[
                'userName',
                'picture'
            ]
        }]
    })
    const dataLength = data.count
    let blogList = data.rows.map(item=>item.dataValues);
    blogList = blogList.map(item=>{
        const {picture,userName} = item.user.dataValues;
        item.picture=picture;
        item.userName=userName;
        delete item.user
        return item;
    })
    return {blogList:blogList,count:dataLength};
}
module.exports=selectBlog