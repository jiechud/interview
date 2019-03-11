### js 进阶

* call, apply, bind实现

    * call 实现
    ```
    Function.prototype = function(context) {
        if (typeof this !== 'function') {
            throw new TypeError('Error');
        }
        
        context = context || window;

        context.fn = this;

        // 获取第二个参数
        const args = [...arguments].slice(1);

        const result = context.fn(...args);

        delete context.fn;
        return result;
    }
    ```


    * apply 实现

    ```
    Function.prototype = function(context) {

        if (typeof this !== 'function') {
            throw new TypeError('Error');
        }
        
        context = context || window;

        context.fn = this;
        let result;
        if (arguments[1]) {
            result = context.fn(...arguments[1]);
        } else {
            result = context.fn();
        }
        delete context.fn;
        return result;
        
    }
    ```

    * bind 实现
    ```
    Function.prototype.myBind = function(context) {
        if (typeof this !== 'function') {
            throw new Error('Error');
        }

        const _this = this;
        const args= [...arguments].slice(1);

        return function F() {
            if (this instanceof F) {
                return new _this(...args, ...arguments);
            }
            return _this.apply(context, args.concat(...arguments))
        }

    }
    ```


    * new (new 的原理是什么？通过 new 的方式创建对象和通过字面量创建有什么区别？)

    ```
    function create() {
        var obj = {};

        var Con = [].shift.call(arguments)

        obj.__proto___ = Con.prototype;

        let result = Con.apply(Obj, arguments);

        return result instanceof Object ? result : Obj;
    }
    ```
    * 创建一个空对象
    * 获取构造函数
    * 绑定对象的原型
    * 绑定this并执行构造函数
    * 返回对象

    
    