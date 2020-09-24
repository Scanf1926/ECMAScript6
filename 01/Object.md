[TOC]



## 对象

事实上，没有一门课能够带领大家完全精通一门语言。在我看来，学习一门面向对象的语言，应该分为三个阶段。

* 基础语法，包括数据类型、循环、注释等等
* 面向对象，包括函数重载、封装、继承、多态等等
* 数据结构和算法分析，包括堆、栈、数、图等等

而我在这里的作用，只是一个介绍人。能够带量大家入个门就很不错了。

下面我们来介绍JavaScript的对象类型。包括以下几个部分

1. 对象字面量，也可以说是对象的创建
2. 对象的检索，也可以说是对象的取值
3. 对象的更新，也可以说是对象的赋值
4. 对象的引用，也可以说对象的“复制”
5. 原型对象
6. 对象的反射
7. 对象的枚举
8. 对象的删除
9. 减少全局变量的污染



## 对象的字面量

```javascript
//创建空对象
const empty_object = {};
console.log(empty_object);  //运行结果为 {}

//创建一个普通对象
const person = {
  "first_name": "Harry",
  "last-name": "Potter"
};
console.log(person);  //运行结果为 { first_name: 'Harry', 'last-name': 'Potter' }

//对象中再嵌套对象
const institute = {
  "name": "BIT",
  "address": "BeiJing",
  building: {
    "library": "XuTeli",
    "dormitory": "JingYuan",
    "academic_building": "Science teaching building"
  }
}
console.log(institute); //自己尝试运行一下

//对象之中嵌套函数
const calculator = {
  "num1": 100,
  "num2": 50,
  add: function (a, b) {
    return a + b;
  }
}
console.log(calculator);    //输出结果为{ num1: 100, num2: 50, add: [Function: add] }
```

通过最后一个例子，大家知道对象中是可以嵌套函数的，其实我们能看到对象打印出来是这个样子，是因为你新创建的对象继承了原型对象，而原型对象中有一个toString()函数。

至于什么是原型对象呢？这里我们先暂且不提。



## 检索

要拿到对象中的值，可以使用 **[]** 或者 **.** 

这有点类似C语言中的结构体，考虑到可读性，更推荐大家使用 **.** 

```javascript
const people = {
  "first_name": "Harry",
  "last_name": "Potter"
};

console.log(people.first_name);   //打印Harry
console.log(people["last_name"]); //打印Potter
```



如果你检索了对象中没有的值，那么它会返回给你 **undefined**

```javascript
const people = {
  "first_name": "Harry",
  "last_name": "Potter"
};

console.log(people.parent);
```



## 更新

对象里的值可以通过赋值语句来更新，如果属性名已经存在于对象当中，那么这个属性的值就会被替换。

```javascript
const people = {
  "first_name": "Harry",
  "last_name": "Potter"
};
console.log(people.first_name);

//更新first_name
people.first_name = "Mary";
console.log(people.first_name);
```



通过更新还可以给对象增加属性：

```javascript
const people = {
  "first_name": "Harry",
  "last_name": "Potter"
};
console.log(people);

//更新之后，会多出一个Voldemort
people.enemy = "Voldemort";
console.log(people);
```



## 引用

对象通过引用来传递，它们永远不会被复制（这里我再查查）



## 原型

JavaScript的对象与其他语言不同，它们都连接到一个原型对象，并且可以从它那里继承属性。

这里讲得太简略了，之后我还要再补补。



## 反射



## 枚举

这里需要介绍一个 **for in** 语句，它可以遍历一个对象中的所有属性名。包括函数和原型对象中的属性。

举例如下：

```javascript
const fruit = {
  name: "apple",
  price: 20,
  discount: function () {
    return price * 0.9;
  }
}

for(let item in fruit) {
  console.log(item);
}
```



## 删除

**delete** 运算符可以用来删除对象的属性，如果对象包含属性，那么改属性就会被移除，它不会触及到原型链中的任何对象

```javascript
const fruit = {
  name: "apple",
  price: 20,
  discount: function () {
    return price * 0.9;
  }
}

delete fruit.price;
delete fruit.name;

for(let item in fruit) {
  console.log(item);
}
```

