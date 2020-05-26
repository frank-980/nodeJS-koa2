class BaseModel{
    constructor (errCode,data,message){
        this.errCode=errCode;
        if(data){
            this.data = data;
        }
        if(message){
            this.message = message;
        }
    }
}
class SuccessModel extends BaseModel{
    constructor (data={}){
        super(0,data)
    }
}
class FailModel extends BaseModel{
    constructor (errCode,message){
        super(errCode,message)
    }
}
module.exports={
    SuccessModel,
    FailModel
}