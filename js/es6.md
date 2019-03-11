* var,let,const

    * `var`存在提升，我们能在声明之前使用。`let`, `const`有暂时性死去（块级作用域），不能在声明前使用
    * `var`在全局作用域下声明会导致变量挂载到`window`上，其它不会
    * `let`和`const`作用基本一致，后者声明的变量不能再次赋值

* 原型继承（原型如何实现继承？Class 如何实现继承？Class 本质是什么？）

    * 组合继承
        ```
        function Parent(value) {
            this.value = value;
        }

        function Child(value) {
            Parent.call(this, value);
        }

        Child.prototype = new Parent();
        ```
        在子类的构造函数中通过`Parent.call(this)`继承父类的属性，然后就是子类的原型父类的实例`child.prototype = new Parent()`
        
        优点: 构造函数可以传参，不会与父类引用属性共享，可以复用父类的函数

        缺点：在继承的时候调用了父类的函数，所以子类的原型上多了父类的属性，会有内存上的浪费
    
    * 寄生组合继承
        ```
        function Parent(value) {
            this.value = value;
        }

        function Child(value) {
            Parent.call(this, value);
        }

        Child.prototype = Object.create(Parent.prototype, {
            constructor: {
                value: Child,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        ```
        核心是将父类的原型设置成子类，然后将原型的构造函数设置成子类。这样就解决了无用的父类属性，还能正确的找到子类的构造函数

    * class 继承
        
        class实现继承主要是通过`extends`关键字实现的，在子类的构造函数中必须要调用`super()`相当于`Parent.call(this)`方法。 `class`的本质也是函数


    
* 模块化（为什么要使用模块化？都有哪几种方式可以实现模块化，各有什么特点？）

    * 使用模块化的好处
        * 解决变量冲突
        * 提供复用性
        * 提高代码的可维护性

    * 立即执行函数
        ```
        (function(window) {

        })(window)
        ```
        在早期，是通过立即执行函数实现的，通过函数作用域解决了命名冲突，污染全局作用域的问题

    * AMD, CMD

        AMD 同步加载， CMD 异步加载

    * CommonJS

        CommonJS 最早是 Node 在使用，目前也仍然广泛使用。
        
    * ES Module 
        
        是原生实现的模块化方案，与 CommonJS 有以下几个区别：

        * CommonJS 支持动态导入，后者不支持
        * CommonJS 是同步导入，后者是异步导入，采用同步导入会导致浏览器渲染问题
        * CommonJS 导出是值拷贝，就算导出的值变了，导入的值也不会变。 ES6采用实时绑定，导入导出指向的是同一个内存地址。

* Proxy （可以实现什么功能？）

     Proxy 是 ES6 中新增的功能，它可以用来自定义对象中的操作。


* map, filter, reducer

    * reducer 接收两个参数，第一个参数是回调函数，第二个参数是初始值
    * 回调函数接收四个参数，分别是累加值，当前值，索引，原数组
    * 用reducer实现 map

    ```
    var arr = [1, 2, 3];
    
    arr.reducer((acc, current) => {
        acc.push(current * 2);
        return acc;
    }, [])
    ```

    





