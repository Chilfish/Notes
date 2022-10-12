---
title: 线性表（Linear List） —— 数组、栈、队列
date: 2022-07-30
---

<br><p style="font-size: 32px; font-weight: bold;">目录</p>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->

<!-- code_chunk_output -->

- [动态数组（Array）](#动态数组array)
  - [定义](#定义)
  - [主要实现](#主要实现)
- [栈（Stack）](#栈stack)
  - [定义](#定义-1)
  - [主要实现](#主要实现-1)
  - [应用](#应用)
- [队列（Queue）](#队列queue)
  - [定义](#定义-2)
  - [主要实现](#主要实现-2)

<!-- /code_chunk_output -->

<br>

## 动态数组（Array）

### 定义

**复杂度：** 支持随机访问，为 $O(1)$。但在插入和删除时，要整体移动部分数组，最坏的情况为 $O(n)$

**优点：** 无须为表中元素之间的逻辑关系而增加额外的存储空间；可以快速的存取表中任一位置的元素

**缺点：** 插入和删除操作需要移动大量元素；当线性表长度较大时，难以确定存储空间的容量；造成存储空间的“碎片”

**构造函数：**

- `Vector()`：创建一个空 `Vector`
- `Vector(int len)`：创建一个 `Vector`，元素个数为 `len`，值默认为 0
- `Vector(int len, const T& data)`：创建一个 `Vector`，元素个数为 `len`，且值均为 `data`
- `Vector(const Vector& a)`：左值引用的拷贝构造函数
- `Vector(Vector&& a)`：右值引用的移动构造函数

**属性：**

- `a.at(pos)`：返回下标位置的元素，并检查下标的合法性
- `a.begin()`：返回数组 _第一个元素_ 的迭代器
- `a.end()`：返回数组的 _最后一个元素 + 1_ 的迭代器
- `a.front()`：返回数组的第一个元素
- `a.back()`：返回数组的最后一个元素
- `a.capacity()`：返回当前数组分配的大小
- `a.size()`：返回数组的长度
- `a.empty()`：判断数组是否为空

**方法：**

- `a.insert(index, x)`：在 下标 `index` 之前插入 $x$
- `a.push_back(x)`：在数组的最后添加一个数据
- `a.pop_back()`：去掉数组的最后一个数据
- `a.resize(newSize, value = 0)`：改变数组的长度，如果大于当前长度，则填充默认值 0 或 `value`；否则将数组缩减至新长度
- `a.reserve(newCapacity)`：改变当前数组所分配容量的大小，如果小于等于当前容量，则将当前容量改为当前长度
- `a.erase(begin [, end])`：删除下标范围的元素
- `a.clear()`：清空当前的数组

<br>

### 主要实现

详见：[Vecotr.hpp](https://github.com/Organic-Fish/FishCode/blob/master/CPP/DataStruct/Vector/Vector.hpp)

借助 `new T[]` 的动态数组，及 $2^n$ 大小的容量来存取数据

如果不使用容量的话，每次增删数据都要进行重新**分配内存**(容量)这样耗时的操作。因此：

- 当目前数组的长度未达到数组容量时，增加数据只要 `arr[len++] = value`、当目前的数组长度达到数组容量时，将重新分配容量，再增加数据
- 重新分配容量要创建临时数组来存放当前的数据，再转移过去：

  ```cpp {.line-numbers}
  void reserve(int newCapacity) {
    if (newCapacity < curLength)
        return;
    T* temp = new T[newCapacity];
    for (int i = 0; i < curLength; ++i) {
      temp[i] = arr[i];
    }
    curCapacity = newCapacity;
    swap(arr, temp);
    delete[] temp;
  }
  ```

<br>

## 栈（Stack）

### 定义

**属性方法：**

- `s.top()`：返回栈顶元素
- `s.pop()`：删除栈顶元素
- `s.push(data)`：往栈顶压入元素
- `s.size()`：返回栈中的元素个数
- `s.empty()`：判断栈是否为空

### 主要实现

借助 Vector 或 Deque 什么的就好，就连标准库的 `std::stack` 主要实现才不到两百行…… 详见： [Stack.hpp](https://github.com/Organic-Fish/FishCode/blob/master/CPP/DataStruct/Stack/Stack.hpp)

```cpp {.line-numbers}
template<class T> class Stack {
private:
  Vector<T> s;
public:
  // 以及一堆的构造函数和重载
  T top() { return s.back(); }
  void pop() { s.pop_back(); }
  void push(const T& data) { s.push_back(data); }
  int size() { return s.size(); }
  bool empty() { return s.empty(); }
};
```

### 应用

<br>

## 队列（Queue）

### 定义

**属性方法：**

- `q.empty()`：判断队列是否为空
- `q.size()`：返回队列中的元素个数
- `q.pop()`：删除队列中的顶部元素
- `q.push(data)`：往队列尾部压入元素
- `q.front()`：返回队首元素的值
- `q.back()`：返回队尾元素的值

### 主要实现

只是单向队列的话，借助 Vector 就好。详见：[Queue.hpp](https://github.com/Organic-Fish/FishCode/blob/master/CPP/DataStruct/Queue/Queue.hpp)

```cpp {.line-numbers}
template<class T> class Queue {
private:
  vector<T> q;
public:
  // 以及一堆构造函数和重载……
  bool empty() { return q.empty(); }
  int size() { return q.size(); }
  T back() { return q.back(); }
  T front() { return q.front(); }
  void push(const T& data) { q.push_back(data); }
  void pop() { q.pop_back(); }
};
```
