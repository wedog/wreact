## javascript的 new 运算符

### new 是什么？

创建一个用户**自定义对象类型**的实例或**具有构造函数**的内置对象的实例。

### 适用对象

自定义对象也就是构造函数，说明new操作的对象必须具有构造函数。

### 准备工作

创建用户自定对象：

```
function Person(name){
    this.name = name
}
Person.prototype.showName = function(){
    return this.name
}
var ly = new Person('ly')
ly.showName()  //返回ly
```
### 模拟 new 运算符

```
function lnew(){
    var obj = new Object() 
    var base= Array.prototype.shift.call(arguments)
    obj.__proto__ = base.prototype 
    var ret = base.apply(obj, arguments) 
    return typeof ret==='object'?ret:obj
}
var per = lnew(Person,'ly')
per.name //输出ly
per.showName() //输出ly
```

### 解析 lnew
1. 创建一个空对象, obj的原型对象指向Object.prototype, 所以obj.__proto__ === Object.prototype。    
2. 取出第一个参数，即base函数。
3. 设置obj的__proto__的值为base的prototype。则obj和base的原型链构造完毕，obj可以访问base原型上的属性及方法。
4. 调用构造函数，并将this绑定到obj上。如果构造函数有返回对象，则lnew的返回值为该对象，否则为新创建的对象obj。




