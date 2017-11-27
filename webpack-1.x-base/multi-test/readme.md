### 它的主要特点：
  不依赖于任何其它的 JavaScript 框架
  不需要 DOM
  结构简单
  可以运行在 Node.JS 或者 Html 中
  基于行为驱动开发 Jasmine

### 服务端步骤： jasmin init 初始化浏览器中测试

  1. 添加测试库： npm i -D jasmine 和 npm i -g jasmine

  2. 初始化测试： ./node_modules/.bin/jasmine init

  3. 添加命令： "scripts": { "test": "jasmine" }

  4. 运行测试： npm test


### 浏览器端测试步骤

  1. Standalone 的下载地址 https://github.com/jasmine/jasmine/releases

  2. 其中 lib 文件夹中包含 Jasmine 的源代码。SpecRunner.html 是 Jasmine 的一个完整示例，用浏览器打开 SpecRunner.html，即可看到执行的结果


### Jasmine 的基本概念

#### Suites & Specs
Suites 用来表示测试集的概念，它由很多的测试用例构成。Specs 就是组成它的具体的测试用例，每一个 Spec 就是一个测试用例，用于测试应用中的某个功能。
Jasmine 使用全局函数 describe 来描述测试集（ Suites ）。通常来说它有 2 个参数：字符串和方法。字符串就是特定测试集（ Suite ）的名字或者标题，而方法是实现 Suite 的具体代码。
Jasmine 使用全局函数it 来描述测试用例（Specs）。和 describe 类似，it 也有 2 个参数：字符串和方法。字符串是对特定测试用例（Spec）的描述，而方法是具体的测试代码。

#### Expectations
Jasmine 使用断言（Expectation）的方式来执行测试结果，每个 expectation 可以是 true 或者 false。如果 it 方法中的所有测试结果都是 true，则通过测试。反之，有任何一个断言是 false，则测试失败。
Expectations 由方法 expect 来定义，它的参数是一个具体的值，这个值被称为实际值。同时，在 expect 方法后需要跟某个匹配方法（Matcher），而匹配方法中的值称为期望值。

#### Matchers
每个 Matcher 的返回结果是一个布尔值，它的作用就是在实际值和期望值之间作比较。同时它负责通知 Jasmine，此次 expectation 的执行结果。Jasmine 会裁定相应的测试用例是通过还是失败。任何的 Matcher 在调用方法之前，都可以使用 not 来"装饰"，从而改变匹配结果。

#### Setup and Teardown
为了使每一个测试用例，都可以重复的执行 setup 与 teardown 代码，Jasmine 提供了全局的 beforeEach 和 afterEach 方法。beforeEach 方法会在每一个测试用例执行前运行，而 afterEach 方法在每个测试用例执行后被调用。
如果在测试用例中使用到多个相同的变量，我们可以在全局的 describe 代码块中定义这些变量，而将变量的初始化代码放在 beforeEach 方法里，并在 afterEach 方法中重置这些变量的值。

#### 嵌套的 describe
Jasmine 支持 describe 嵌套。很显然，这个时候的测试集呈现树状组织结构。而 Jasmine 执行时会遍历树状结构，按顺序执行每个 beforeEach 方法，it方法，以及对应的 afterEach 方法。

#### 跳过测试代码块
Suites 和 Specs 分别可以用 xdescribe 和 xit 方法来禁用。运行时，这些 Suites 和 Specs 会被跳过，也不会在结果中出现。