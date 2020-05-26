const server = require('./server');
test('test demo',async()=>{
    const res = await server.get('/json');
    expect(res.body).toEqual({
        title: 'koa2 json'
    })
})
/*function isTrueOrFasle(bool) {
    return bool
}
describe('true or false', () => {
    
    it('should return true when input true', () => {
        let result = isTrueOrFasle(true);
        expect(result).toBeFalsy();  // toBeTruthy 匹配器
    })


    test('should return false when input fasle', () => {
        let result = isTrueOrFasle(false);
        expect(result).toBeFalsy();  // toBeFalsy 匹配器
    })
})*/