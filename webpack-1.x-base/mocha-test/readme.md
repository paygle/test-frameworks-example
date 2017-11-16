### mocha init 初始化浏览器中测试
默认情况下，mocha会去当前路径下的去找 ./test/*.js或者./test/*.coffee当做测试文件，所以测试文件应该放在test目录下

### 测试接口类型
 BDD测试接口提供:
  describe(),
  context(),
  it(),
  specify(),
  before(),
  after(),
  beforeEach(),
  afterEach()
 其中context函数只是describe函数的别名，specify函数也是if函数的别名。

 TDD接口提供:
  suite(),
  test(),
  suiteSetup(),
  suiteTeardown(),
  setup(),
  teardown()

#### QUNIT 像TDD接口一样支持suite和test函数，同时又像BDD一样支持before(), after(), beforeEach(), 和 afterEach()，等钩子函数。

### MOCHA.OPTS（mocha配置）

在服务端运行的时候，mocha会去加载test目录下的mocha.opts文件，来读取mocha配置项。这个配置文件中的每一行代表一项配置。如果运行mocha命令的时候，带上的配置参数与这个配置文件中的配置冲突的话，以命令中的为准。例如：
--require should
--reporter dot
--ui bdd