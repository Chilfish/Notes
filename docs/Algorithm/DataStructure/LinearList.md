---
title: 线性表——数组、栈、队列
date: 2022-07-30
---

<br><p style="font-size: 32px; font-weight: bold;">目录</p>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->

<!-- code_chunk_output -->

- [线性表（Linear List）](#线性表linear-list)
- [动态数组（Array）](#动态数组array)
  - [定义](#定义)
  - [主要实现](#主要实现)
- [栈（Stack）](#栈stack)
- [队列（Queue）](#队列queue)

<!-- /code_chunk_output -->

<br>

## 线性表（Linear List）

**定义：** 由同类型数据元素构成有序序列的线性结构

- 表中元素个数称为线性表的长度
- 线性表没有元素时，称为空表
- 表起始位置称为表头，表结束位置称表尾

**线性表的储存方式：**

- **线性表的顺序存储（顺序表）：** 用一段连续的存储单元依次存储线性表的数据元素。（通常使用一维数组实现顺序存储结构）
- **线性表的链式存储（链表）：** 除了存储本身的信息之外，还需存储一个指示后继的信息 $\rightarrow$ [链表](LinkedList.md)

<br>

## 动态数组（Array）

### 定义

**复杂度：** 支持随机访问，为 $O(1)$。但在插入和删除时，要整体移动部分数组，最坏的情况为 $O(n)$

**优点：** 无须为表中元素之间的逻辑关系而增加额外的存储空间；可以快速的存取表中任一位置的元素

**缺点：** 插入和删除操作需要移动大量元素；当线性表长度较大时，难以确定存储空间的容量；造成存储空间的“碎片”

**主要属性、方法：** 详见： [Vecotr.hpp](https://github.com/Organic-Fish/FishCode/blob/master/CPP/DataStruct/Vector/Vector.hpp)

```cpp {.line-numbers}
template <class T> class Vector {
private:
  T *arr;
  int curLength, curCapacity;
public:
  Vecotr(int initLen = 0) {
    curLength = curCapacity = initLen;
    arr = new T[curCapacity];
  }
};
```

### 主要实现

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

<br>

## 队列（Queue）
