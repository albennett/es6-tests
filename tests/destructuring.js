var expect = require('chai').expect;
//var {assert, should, expect} = require('chai');

describe('destructuring', function(){
  'use strict';
  it('assigning variable to number with destructuring', function(){
    var [foo, [[bar], baz]] = [1, [[2], 3]];
    expect(foo).to.equal(1);
  });
  it('bind variables to different properties',function(){
    var harryPotterSays = { name: "Voldemort" };
    var everyoneElseSays = { name: "He-Who-Must-Not-Be-Named" };

    var { name: nameA } = harryPotterSays;
    var { name: nameB } = everyoneElseSays;
    expect(nameA).to.equal('Voldemort');
  });
  //it('capture all trailing items in an array', function(){
    //var [head, ...tail] = [1, 2, 3, 4];
    //expect(tail).to.equal([2, 3, 4]);
  //});
 
  //const x = 'y'
  //x = 'z'
});
