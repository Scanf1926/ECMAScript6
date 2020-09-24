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

