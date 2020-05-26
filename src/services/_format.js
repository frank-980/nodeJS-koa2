const {DEFAULT_PICTURE} = require('../conf/const')
function _formatPic(obj){
    if(obj.picture==null){
        obj.picture=DEFAULT_PICTURE;
    }
    return obj;
}
function formatUser(list){
    if( list == null){
        return list
    }
    if(list instanceof Array){
        return list.map(_formatPic)
    }
    return _formatPic(list);
}
module.exports={
    formatUser
}