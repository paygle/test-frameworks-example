### Karma中文配置API

* Webpack 处理功能： require.context(directory, useSubdirectories = false, regExp = /^\.\//);

#### Karma Configuration Options


|    参数	 |                     作用                         |
|---------|--------------------------------------------------|
| autoWatch	| Type：Boolean。默认为true。启用或禁用监视文件，当这些文件被改变时，执行测试。|
| autoWatchBatchDelay	| Type：Number。默认为250。当karma监视这些文件的变动时，它会尝试将多个更改分批处理到一个单独的运行中，以便测试运行器不会尝试启动并重新启动正在运行的测试。配置设置将告诉karma在发生更改之后，在再次发生更改之前，应该等待多久（毫秒）。|
|basePath	|Type: String。默认为""。将用于解析files和exclude中定义的所有相对路径的根路径位置。如果basePath的配置是一个相对路径，那么它将被解析到__dirname的配置文件中。|
|browserDisconnectTimeout	|Type: Number。默认为2000。规定karma等待浏览重连的时间（毫秒）。|
|browserConsoleLogOptions|	Type: Objecr。默认为{level: "debug", format: "%b %T: %m", terminal: true}。使用以下属性配置浏览器控制台的记录方式，所有这些属性都是可选的：<p><code>{level: string, format: string, path: string, terminal: boolean}</code></p><p>这里的level是所需的日志级别（log-level），其中log级别总会被记录。format的取值是%b, %t, %T, 和 %m的其中一个字符串，该字符串会替换成浏览器字符串，分别记录小写、大写日志类型和日志信息。 format 的取值仅仅会影响输出文件。path是输出文件的输出路径，terminal指示日志是否应该被输出在终端。</p>|
|browserDisconnectTolerance	|Type: Number。默认为0。允许的断开连接数。该值代表着浏览器在断开连接时尝试的最大尝试次数。通常情况下，任何断开连接都被认为是失败，但是当karma服务器和浏览器之间有片状的网络连接时，这个选项允许你定义一个容错级别。|
|browserNoActivityTimeout	|Type: Number。默认为10000。karma在断开浏览器连接之前，等待的浏览器消息的时间（毫秒）。如果在测试执行期间，karma在规定时间（该值）内没有收到来自浏览器的任何消息，则它将从浏览器断开连接。|
|browsers	|Type: Array。默认为[]。可能的值：<p>Chrome (需要 karma-chrome-launcher 插件)</p><p> ChromeCanary (需要karma-chrome-launcher 插件)</p><p> PhantomJS (需要 karma-phantomjs-launcher 插件)</p><p> Firefox (需要 karma-firefox-launcher 插件)</p><p>Opera (需要 karma-opera-launcher 插件) </p><p>IE (需要 karma-ie-launcher 插件)</p><p>Safari (需要 karma-safari-launcher 插件)</p><p>说明：该值是要启动和捕获的浏览器列表。当Karma启动时，它也会启动放置在这个设置中的每个浏览器。一旦Karma关闭，它也会关闭这些浏览器。您可以通过打开浏览器并访问Karma Web服务器正在侦听的URL来手动捕获任何浏览器（默认情况下为http://localhost:9876/）。|</p>
|captureTimeout	|Type: Number。默认为"60000"。捕获浏览器的超时时长（ms）。该值代表着浏览器启动并连接到karma的最大启动时长。如果浏览器不能在规定时长内被捕获到，karma将会结束该任务，并尝试重新启动它，如此三次之后，karma将会放弃捕获。|
|client.args	|Type: Array。默认为undefined。当karma run 在命令行中传递附加参数时，它们将作为karma.config.args(字符串数组)传递给测试适配器。clinet.args选项允许你设置除了run之外的操作值。|
|client.useIframe	|Type: Boolean。默认为"true"。在内嵌框架（iframe）或者新窗口运行测试。如果该值为true，karma会在内嵌框架中运行测试。如果为false，karma会在新窗口运行测试。有些测试可能无法在内嵌框架运行，而是需要在新窗口中运行。|
|client.runInParent	|Type: Boolean。默认为"false"。不使用内嵌框架或新窗口，在与客户端相同窗口运行测试。如果该值为true，karma不会使用内嵌框架，而是会在最初的窗口运行测试。它将会动态加载测试脚本。|
|client.captureConsole|	Type: Boolean。默认为true。捕获所有控制台输出并传送（pipe）到终端|
|client.clearContext	|Type: Boolean。默认为true。清除上下文窗口。如果该值为true，karma会在完成运行测试的基础之上清除上下文窗口。如果为false，karma在完成运行测试之后并不会清除上下文环境。当嵌入一个Jasmine Spec Runner Template时，设置该值为false会非常有用。|
|colors	|Type: Boolean。默认为true。启用或禁用输出（报告和日志）的颜色|
|concurrency	|Type: Number。默认为"Infinity"。karma并行启动多少个浏览器。特别是像 SauceLabs 和Browserstack 服务，只有一次启动数量有限的浏览器才有意义，同时只有当那些服务完成之后才能启动更多浏览器。使用该配置，你可以指定在同一时间点上，一次运行多少个浏览器。|
|crossOriginAttribute	|Type: Boolean。默认为true。当该值为true时，它会在生成的脚本标签中添加跨域属性（crossorigin attribute），从而为不同域的JavaScript文件提供更好的错误报告。当你需要加载无需Access-Control-Allow-Origin数据头服务的外部脚本时，你可以禁用它。|
|customContextFile|	Type: String。默认为null。如果该值为默认值null，那么karma会使用自己的context.html文件。|
|customDebugFile	|Type: String。默认为null。如果该值为默认值null，那么karma会使用自己的debug.html文件|
|customClientContextFile	|Type: String。默认为null。如果该值为默认值null，那么karma会使用自己的client_with_context.html文件（当client.runInParent设置为true式才会启用该文件）。|
|customHeaders	|Type: Array。默认为undefined。常规的HTTP数据头（header）将依赖与karma的web服务文件。常规数据头非常有用，特别即将到来的Service Workers浏览器产品。<p>该值的参数允许你为正则表达式文件设置HTTP数据头。customHeaders是一个数组对象，并具有以下属性：</p><p>· match : 匹配文件的正则表达式 · name : HTTP数据头名称</p><p>Example:</p><p>customHeaders: [{</p><p>match:.'*foo.html',</p><p>name: 'Service-Worker-Allowed'</p><p>value: '/' }]</p>|
|detached	|Type: Boolean。默认为false。当该值为true，它将会在其他进程中启动karma服务，同时不向控制台写入输出。该服务可以使用karma stop命令终止。|
|exclude	|Type: Array。默认为[]。从加载文件中排除的文件/模式的列表|
|failOnEmptyTestSuite	|Type: Boolean。默认为true。启用或禁用运行空测试套件 （empty test-suites）时的失败。如果禁用，程序将返回退出代码0并显示警告。|
|files|	Type: Array。默认为[]。在浏览器中加载的文件/模式列表。查看更多关于[config/files](https://karma-runner.github.io/latest/config/files.html)的信息|
|forceJSONP|	Type: Boolean。默认为false。强制socket.io使用JSONP轮询而不是XHR轮询。|
|frameworks	|Type: Array。默认为[]。你要使用的测试框架列表。通常情况下，你会设置该值为['jasmine'], ['mocha'] 或 ['qunit']…<p>请注意: karma中的所有框架都需要安装额外的插件/框架库（通过NPM）。更多插件信息，[请点击这里](https://karma-runner.github.io/latest/config/plugins.html)。</p>|
|listenAddress	|Type: String。默认为'0.0.0.0'或LISTEN_ADDR。服务器的地址将会被监听。更改为localhost仅仅会监听环路，或者更改为::，监听所有的IPv6接口。|
|hostname	|Type: String。默认为localhost。捕获浏览器时使用的主机名。|
|httpsServerOptions	|Type: Object。默认为{}。参数对象会被node的http类使用。对象的描述可以在 [NodeJS.org API docs](http://nodejs.cn/api/tls.html#tls_tls_createserver_options_secureconnectionlistener) 中被找到。<p>Example:</p><p>httpsServerOptions: {</p><p>key: fs.readFileSync('server.key', 'utf8'),</p><p>cert: fs.readFileSync('server.crt', 'utf8')</p><p>}]</p>|
|logLevel	|Type: Constant。默认为config.LOG_INFO。<p>可能的值：</p><p>· config.LOG_DISABLE</p><p> · config.LOG_ERROR </p><p>· config.LOG_WARN</p><p> · config.LOG_INFO</p><p> · config.LOG_DEBUG</p><p>说明：该值控制日志的级别。</p>|
|loggers	|Type: Array。默认为[{type: 'console'}]。使用的输出端的日志列表。更多文档信息，请访问[log4js](https://github.com/log4js-node/log4js-node)。|
|middleware	|Type: Array。默认为[]。你想要karma服务器使用的额外的中介软件（middleware）列表。中介软件将会按顺序被使用。</p><p>你必须通过插件/框架（内联或通过NPM）安装这些中介软件。更多的信息你可以在[插件中](https://karma-runner.github.io/latest/config/plugins.html)找到。</p><p>插件必须提供一个表达/连接（express/connect） 中介软件的函数（更多细节，你可以[访问the Express docs](http://www.expressjs.com.cn/guide/using-middleware.html) ）。使用例子：</p><p><code>var CustomMiddlewareFactory = function (config) {</p><p>return function (request, response, /* next */) {</p><p>response.writeHead(200)</p><p>return response.end("content!")</p><p>}}</p><p>middleware: ['custom']</p><p>plugins: [</p><p>{'middleware:custom': ['factory',CustomMiddlewareFactory]}</p><p>...]</code></p>|
|mime	|Type: Object。默认为{}。重定义从文件扩展名到MIME类型的默认映射。设置属性名需要MIME,提供扩展数组（无点）作为值。<p>例子:</p><p>mine{</p><p>'text/x-typescript':['ts','tsx']</p><p>'text/plain>':['mytxt']</p><p>}</p><p>|
|beforeMiddleware	|Type: Array。默认值为[]。排出那些将会在karma自己的中介软件之前运行的中介软件。|
|plugins	|Type: Array。默认值为['karma-*']。加载插件的列表。一个插件可以是一个字符串（这种情况下，它将会被karma引用）或者一个内联插件对象。默认情况下，karma会加载以karma-*开头命名的所有兄弟NPM 模块。<p>注意：几乎所有的karma插件都需要(通过NPM)一个额外的库来安装。[查看插件](https://karma-runner.github.io/latest/config/plugins.html)获取更多信息。</p>|
|port	|Type: Number。默认值为9876。设置将被web服务器监听的端口。|
|processKillTimeout	|Type: Number。默认值为2000。在发送SIGKILL指令之前，karma等待结束浏览器进程的时间。<p>如果在测试完成之后，或在karma尝试关闭浏览器之后，浏览器没有在processKillTimeout（ms）时间被关闭，karma将会发送一个SIGKILL指令去尝试强制关闭浏览器。</p>|
|preprocessors	|Type: Object。默认为{'**/*.coffee': 'coffee'}。要是用的预处理器的映射。</p><p>预处理器可以[通过插件](https://karma-runner.github.io/latest/config/plugins.html)加载。</p><p>注意：几乎所有的karma的预处理器（除了CoffeeScript和一些其他默认的预处理器）都需要（通过NPM）额外的库去安装。|
|protocol	|Type: String。默认为'http:'。可能的值： http: 或 https:<p>说明 : 运行karma webserver使用的协议。确定要是使用Node的http还是https类。</p><p>注意：使用'https:'你需要指定httpsServerOptions。</p>|
|httpModule	|Type: String。默认为：undefined。Karma webserver要使用的模块。<p>使用提供的模块代替Node构建的http或https模块。这里加载的模块必须正确地匹配Node http模块的接口。这对加载像允许支持 http2的node-http2模块非常的有用。</p><p>注意：如果你使用了该属性来启用https，那么你必须设置protocol为https:，同时把http2zuo为指定证书才可以运行https。</p><p>|
|proxies	|Type: Object。默认为：{}。代理路径的映射配对。代理可以迅速地被指定目标url或路径，或者使用一个对象去配置更多的选项。可能的选项包括：<p>· target 目标url或者路径（必填）</p><p>· changeOrigin 无论如何，代理都应该使用目标（默认为false）的主机来覆盖 主机数据头（Host header）。</p><p>例子：</p><p>proxies:{</p><p>'/static': 'http://gstatic.com',</p><p>'/web': 'http://localhost:9000',</p><p>'/img/': '/base/test/images/',</p><p>'/proxyfied':{ </p><p>'target': 'http://myserver.localhost',</p><p>'changeOrigin': true</p><p>}</p>|
|proxyValidateSSL	|Type: Boolean。默认为true。当发现无效的SSL证书时，无论Karma还是任何浏览器都应该报错。|
|reportSlowerThan	|Type: Number。默认为 0。 Karma将报告比给定时间限制（毫秒）慢的所有测试。这是默认禁用的（因为默认值是0）。|
|reporters	|Type: Array。默认为 ['progress']。<p>可能的值：dots 或 progress。</p><p>使用的报告者（reporter）列表。</p><p>额外的报告者，例如growl, junit, teamcity 或者 coverage 可以[通过插件](https://karma-runner.github.io/latest/config/plugins.html)被加载。</p><p>注意：几乎所有的karma报告者都需要（通过NPM）额外的库去安装。</p>|
|formatError	|Type: Function。默认为undefined。<p>参数： msg - 一个单行的断言错误和堆栈跟踪（为每一行调用）。返回值：一个新的错误信息行。</p><p>说明：规定断言错误和堆栈跟踪的格式。用于删除供应商和编译源。返回一个空行''来删除它。</p>|
|restartOnFileChange	|Type: Boolean。默认为false。当karma监视文件变动，它将延迟新的运行，直到当前运行结束。禁用这个设置将会取消当前运行，并在检测到变动时立即启动一个新的运行。|
|retryLimit	|Type: Number。默认为2。当浏览器崩溃，karma将会尝试重启。该属性定义了karma在放弃之前，重启浏览器的次数。|
|singleRun	|Type: Boolean。默认为false。持续集成模式。<p>如果该值为true，karma将会启动和捕获配置的浏览器，运行测试然后退出，退出使用的代码0或1取决于测试是成功还是失败。</p>|
|transports	|Type: Array。默认为['polling', 'websocket']。浏览器和测试服务器之间允许的传输方法的数组。此配置设置交给了[socket.io](https://socket.io/)（管理浏览器和测试服务器之间的通信）。|
|proxyReq	|Type: Function。默认为undefined。当请求代理时调用。有关详细信息可以在[node-http-proxy](https://github.com/nodejitsu/node-http-proxy)中找到。<p>下面显示了覆盖HTTP标头的示例。</p><p>proxyReq: function(proxyReq, req, res, options) {</p><p>proxyReq.setHeader('Referer','https://www.example.com/');</p><p>}</p>|
|proxyRes	|Type: Object。默认为undefined。调用代理时调用。有关详细信息可以在[node-http-proxy](https://github.com/nodejitsu/node-http-proxy)中找到。|
|upstreamProxy	|Type: Object。默认为undefined。<p></p><p>说明：用在当karma服务器需要改变基础url的代理后运行时。如果设置以下字段，该属性将被定义并（可以）被覆盖：</p><p>path [ Type: String ]默认为/。</p><p>说明：当启动浏览器时，将被添加到基本网址，并被浏览器加载到内部网址</p><p>port [ Type: Number ] 默认为9875。</p><p>说明：当浏览器启动时将会使用的端口。</p><p>hostname [Type: String] 默认为localhost。</p><p>说明：当浏览器启动时将会使用的主机名。</p><p>protocol [Type: String ] 默认为'http:'。</p><p>说明：当浏览器启动时将会使用的协议。</p>|
|urlRoot	|Type: String。默认为'/'。karma运行的基础url。<p>karma所有的url都要使用urlRoot 作为前缀。当使用代理时这就很有用了，因为有时候你可能要代理一个已经被karma占用的url。</p>|
|jsVersion	|Type: Number。默认为0。<p>在Firefox浏览器中使用的JavaScript版本。如果该值大于零（>0），Karma会将JavaScript版本标签添加到包含的JavaScript文件中。注意：这将只适用于Firefox浏览器。它是目前唯一支持版本标签的浏览器。</p>|