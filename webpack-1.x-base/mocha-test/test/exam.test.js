var assert = require('chai').assert;

function User(name) { this.name = name; this.save = () => {} }

// describe用例集定义函数，
// 第一个参数会被输出在控制台中，作为一个用例集的描述，而且这个描述是可以根据自己的需求来嵌套输出的。

// it用例函数，
// 第一个参数用来输出一个用例的描述，前边打个对勾代表测试通过，第二个参数是一个函数，用来编写用例内容，用断言模块来判断结果的正确性。

// 1. 同步代码测试
describe('ArrayTest', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});

// 2. 异步代码测试
// describe('User', function() {
//   describe('#save()', function() {
//     it('should save without error', function() {
//       var user = new User('Luna');
//       user.save(function(err) {
//         if (err) throw err;
//         done();
//       })
//     });
//   });
// });

// 3. promise代码测试
// ....

// 4. 不建议使用箭头函数
// 箭头函数语法中对this的绑定让会用例函数没办法访问Mocha框架上下文中定义的一些函数无法得到正确的结果

// 5. 钩子函数
// mocha提供4种钩子函数：
//   before()、after()、beforeEach()、afterEach()
// 这些钩子函数可以用来在用例集/用例函数开始执行之前/结束执行之后，进行一些环境准备或者环境清理的工作。
/*
describe('hooks', function() {
  
  before(function() {
    // runs before all tests in this block
  });

  after(function() {
    // runs after all tests in this block
  });

  beforeEach(function() {
    // runs before each test in this block
  });

  afterEach(function() {
    // runs after each test in this block
  });

  // test cases
});
*/

// 6. 全局钩子
// 若编写了多个用例集js文件，无论在哪一个用例集文件中，用例集函数之外定义钩子函数，都会对所有用例函数生效。

// 7. 仅执行一个用例集/用例，在用例集函数或者用例函数后边添加.only()
/*
describe('OnlyTest', function() {
  describe.only('#indexOf()', function() {
    it.only('only test one', function() {
      // ...
      assert.equal('one', 'one');
    });

    it('only test two', function() {
      // ...
      assert.equal('two', 'two');
    });
  });
});
*/

// 8. 跳过哪些用例集/用例
// 在用例集函数或者用例函数后边加.skip()，可以跳过此用例集或用例的执行。
// 跳过的用例会被标记为pending的用例，在报告中也会作为pending用例体现出来。

describe('ArraySkip', function() {
  describe.skip('Skip()', function() {
    it('This Skip test', function() {
      assert.equal('skip', 'skip');
    })
  });
});

// 9. 动态生成用例
// 使用Function.prototype.call和函数表达式来定义用例集和用例，它们可以用来直接动态生成一些测试用例，而不需要使用其他额外的语法。

function add() {
  return Array.prototype.slice.call(arguments).reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
}

describe('add()', function() {
  var tests = [
    {args: [1, 2],       expected: 3},
    {args: [1, 2, 3],    expected: 6},
    {args: [1, 2, 3, 4], expected: 10}
  ];

  this.slow(1000);                // 标记指定慢用例判定时间
  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      assert.equal(res, test.expected);
    });

  });
});

// 10. 用例集执行超时
// 在用例集下定义的timeout超时会对此用例集下定义的所有嵌套的用例集和用例生效，如果嵌套的用例集或者用例重写了timeout时间，则会覆盖上层的设置。通过this.timeout(0)，可以关掉用例或用例集的超时判断。

describe('a suite of tests', function() {
  this.timeout(500);

  it('should take less than 500ms', function(done){
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function(done){
    setTimeout(done, 250);
  });
});