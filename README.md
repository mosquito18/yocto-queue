# yocto-queue

1. 添加了`[Symbol.iterator]`方法，为可迭代对象，可通过`for...of`来遍历，并且可以用`扩展运算符`将其变为数组，但是尽量不要这样做，这样性能很差.

当进入for...of，他就会进入Symbol.iterator这个方法，（如果没找到，就会报错，像数组那些对象都是有内置该方法的）

## 学习
1. 数组 shift O(n), queue O(1)

数组是顺序存储的，当你`shift`的时候，会先取出队列首端的一个元素，整个队列往前移——整个操作的事件时间复杂度是**O(n)**

2. Class Getters/setters

就像对象字面量，类可能包括 getters/setters，计算属性（computed properties）等。
传送门：https://zh.javascript.info/class#getterssetters

3. * yield 生成器

- 生成器是 ES6 新增的一个极为灵活的结构，拥有在一个函数块内`暂停`和`恢复代码执行`的能力。
- 在函数前面加一个星号*，则表示它是一个生成器。
- 调用生成器函数会产生一个`生成器对象`，其一开始处于`暂停状态`，该对象也实现了Iterator接口，通过调next()使其转为开始或者恢复执行状态。
- 生成器函数在遇到`yield`关键字前会`正常执行`，遇到该关键字后，执行会`停止`，**函数作用域的状态被保留** —— 有点像函数的中间`返回语句`，它能让函数返回一个值出去，但是函数仍能继续执行。随后通过在生成器对象上调用next方法恢复执行。
- 实际上，很少在生成器对象上显式调用next()，而是将其作为可迭代对象

```
function* generatorFn(){
  yield 1;
  yield 2;
  yield 3;
}
for(let i of generatorFn()){
  console.log(i) 
}
//1
//2
//3
```

4. 垃圾回收机制
https://zh.javascript.info/garbage-collection#ke-da-xing-reachability