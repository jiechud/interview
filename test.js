

Function.prototype.myCall = function(context) {
    if (typeof this !== 'function') {
        throw new TypeError('error');
    }
    context = context || window;
    context.fn = this;
    const args = [...arguments].slice(1)
    const result = context.fn(args);
    delete context.fn;
    return result;
}


function demo() {
    console.log('demo')
}


const obj = {};


demo.myCall(obj);

function create() {
    // 声明一个对象
    const obj = {};
    // 绑定原型
    let Con = [].shift.call(arguments);
    obj.__proto__ = Con.prototype;

    // 绑定this
    let result = Con.apply(obj, arguments)

    return result instanceof Obj ? result : obj;
}

function a() {

}

create(a);