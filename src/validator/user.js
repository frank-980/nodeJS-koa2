const validate = require('./validate')
const schema = {
    type:'object',
    properties:{
        userName:{
            type:'string',
            pattern:'^[a-zA-Z][a-zA-Z0-9_]+$',
            maxLength:255,
            minLenght:2
        }
    }
}
function userValidate(data={}){
    return validate(schema,data);
}
module.exports=userValidate;