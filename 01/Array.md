## 数组

准确来说，JavaScript中并没有类似C语言这样的内存线性分配的数组。它提供的是一种类似数组的对象。真正运行时，它比对象要慢，但是使用起来很方便。



## 数组字面量

```javascript
const empty = [];   //空数组
const numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];

console.log(empty);
console.log(numbers);
```



在大多数语言当中，一个数组的所有元素要求是同一种类型，JavaScript则可以在一个数组中定义多种类型的值。**但一般情况最好所有元素都是同一种类型比较好**

```javascript
const Array = [
    "你好啊",
    123456,
    true,
    false,
    null,
    undefined,
    NaN,
    ["我是另外一个数组"],
    {
        name: "我是一个对象"
    }
];

for(let i  = 0; i < Array.length; i++) {
    console.log(Array[i]);
}
```



## 长度

每个数组都有一个**length**属性

和其他语言不同，**JavaScript数组是没有上界的**，什么意思呢？看下面这个例子：

```javascript
const myArray = [];
console.log(myArray.length);	//输出结果为0

myArray[1000] = 'ABCDEF';
console.log(myArray.length);	//输出结果为1001
```



## 删除

由于JavaScript的数组其实就是一种特殊的对象，因此我们也可以用**delete**运算符来从数组中移除元素。

请看下面的这个例子：

```javascript
const numbers = ['zero', 'one', 'two'];
delete  numbers[0];

for(let item in numbers) {
    console.log(numbers[item]);
}
```

我记得这个删除元素的方法效率不是特别高，先写下来，之后再查查其他方法。



## 枚举

相信大家看到之前我写的代码，已经知道JavaScript的枚举方法可以和对象一样，当然，也可以采用传统的循环写法。



