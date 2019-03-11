### 浏览器基础知识

* 事件机制
    * 事件的三个阶段
        window往事件触发处传播，遇到注册的捕获事件会触发
        传播到事件触发时触发注册事件
        从事件触发往window传播，遇到注册的冒泡事件会触发

    * 注册事件

        addEventListener

    * 事件代理

        * 节省内存
        * 不需要给子节点注销事件

* 跨域

    * JSONP
    * CORS
    * document.domain
    * postMessage
    * proxy


* 浏览器缓存

    * 强缓存
        * Expires
        * Cache-Control
    * 协商缓存
        * Last-Modified
        * ETag


* 浏览器渲染原理

    