var expect = require('chai').expect;

describe('using let', function(){
  "use strict";
  it('define variable in block', function(){
      let string= 'It worked!';

    expect(string).to.equal('It worked!');
  });
  it('call variable in function', function(){
    let bar = 'hi';
    function foo () {
      let bar = 'baz';
    }
    expect(bar).to.equal('hi');
  });
  it('assign let to another value', function(){
    let x;
    x = 'hello world';
    expect(x).to.equal('hello world');
  }); 
});


