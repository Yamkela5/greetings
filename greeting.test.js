describe('The greet function', function(){

    it('should greet Athi correctly', function(){
        assert.equal('Molo, Yash', greet('Yash'));
    });
    it('should greet Yash correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Yash', myName('Yash'));
    });
});

// describe('The greet function', function(){
//
//     it('should greet Andrew correctly', function(){
//         assert.equal('Hello, Andre', greet('Andre'));
//     });
//     it('should greet Karen correctly', function(){
//         // this test will fail - can you fix it?
//         assert.equal('Hello, Karen', greet('Karen'));
//     });
// });
