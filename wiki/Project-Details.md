## Build System

我们的项目选择使用 [gulp](http://gulpjs.com/) 来进行快速开发，因为gulp具有以下几方面优点：

- 方便地把各个模块整合到一个文件里面
- 使用 [babel.js](http://babeljs.io/) 将ES6代码转化为ES5代码
- 最小化JS和CSS代码
- 使用liveboard实时查看代码效果

## Installation安装

```bash
# 全局安装 gulp（默认node和npm已经安装完成）
npm install -g gulp-cli

# 安装所有依赖文件
npm install

# 此命令启动服务器，访问 http://localhost:8080 查看
gulp
```
**NOTE**: 如果 Node.js 的版本小于 0.12, 你需要安装 an ES6-style Promise Polyfill (不然会报错 "Promise is undefined")。输入以下命令：

```bash
npm install es6-promise
```

然后在你的*gulpfile.babel.js*顶部加入下面这句话:

```javascript
var Promise = require ('es6-promise').Promise;
```
想看到更多细节，点这里 [stackoverflow](http://stackoverflow.com/questions/32490328/gulp-autoprefixer-throwing-referenceerror-promise-is-not-defined) 

检查 Node.js 版本:

```bash
node --version
```
##Global Scope整体结构
所有的CSS代码放在[/css]目录下，所有的js代码放在[/js]目录下。

gulp监听这两个目录，在server初始化或者监听到改变时，在[/public]目录生成以下文件：

- BlackBlank.min.css
- BlackBlank.min.js

在index.html中引入这两个文件则可正常运行。
liveboard的作用是自动刷新网页。

注意：在生产模式下可以直接使用以上两个文件，无需启动gulp

## Code Structure代码结构

*Note:* 本项目代码基本按照此风格构建 [Airbnb's ECMAScript 6 Javascript style guide](https://github.com/airbnb/javascript)

### [js/index.js](https://coding.net/u/cww97/p/blackBlank/git/blob/master/js/index.js)
此App的入口文件。在这里初始化应用程序设置 (当 jQuery 加载的时候加载, 加载服务器初始数据等等。)

### [js/app/*.js](https://github.com/Cardinal2376/BlackBlank/tree/master/js/app)

此文件包含了一些全局变量和全局方法。


### [js/dom/*.js](https://github.com/Cardinal2376/BlackBlank/tree/master/js/dom)

该目录下是所有涉及到 DOM的代码，
这些代码被分为：

- "static" 的方法可以在任意地方使用 (比如说将算法代码加入 DOM) 
- 安装在 `app/constructor` 里面调用的代码, 待DOM准备好后, 初始化所有要素和他们的内容和监听器。

### [js/editor/*.js](https://github.com/Cardinal2376/BlackBlank/tree/master/js/editor)
本项目使用[ACE代码编辑器](https://ace.c9.io/)，此目录包含了与代码编辑器相关的内容。

### [js/module/\*/\*.js](https://github.com/Cardinal2376/BlackBlank/tree/master/js/module)

此目录保存所有 tracer 和 random-data-creators。
所有的模块被打包捆绑在一起，然后在[`js/index.js`](https://coding.net/u/cww97/p/blackBlank/git/blob/master/js/index.js)
被“required”，同时将它们和全局的windows关联，使得在页面上编辑的算法逻辑代码可以使用它们（被eval解析）。

### [js/server/*.js](https://github.com/Cardinal2376/BlackBlank/tree/master/js/utils)
此目录保存所有从服务器加载数据和从[RSVP.js](https://github.com/tildeio/rsvp.js/)使用promises的代码。

### [js/tracer_manager/*.js](https://github.com/Cardinal2376/BlackBlank/tree/master/js/tracer_manager)

此目录包含_tracer_manager_ 的相关代码。_tracer_manager_ 的功能包括运行演示，暂停演示，返回上一步，前进下一步等。

### [js/utils/*.js](https://github.com/Cardinal2376/BlackBlank/tree/master/js/utils)

此目录包含一些辅助的方法，在很多地方都会用到，比如解析路由。