---
title: 动态规划 DP
---

<br>
<p style="font-size: 32px; font-weight: bold;">目录</p>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=5 orderedList=false} -->

<!-- code_chunk_output -->

- [普通 DP](#普通-dp)
  - [斐波那契数列](#斐波那契数列)
  - [MIS 最大子段和](#mis-最大子段和)
  - [LIS 最长上升子序列](#lis-最长上升子序列)
    - [DP 方法](#dp-方法)
    - [贪心 二分](#贪心-二分)
  - [使用硬币的个数](#使用硬币的个数)
- [背包](#背包)
  - [01 背包](#01-背包)

<!-- /code_chunk_output -->

<br>

## 普通 DP

### 斐波那契数列

- 其中，**滚动数组** 是指：用取模的方式，只记录与转移方程相关的数据，不记录所有的数据
  ```cpp {.line-numbers}
  int Fib() {
    int FB[3] = {0, 1, 1}, n = 10;
    for (int i = 2; i <= n; i++)    //递推法
      FB[i % 3] = FB[(i - 1) % 3] + FB[(i - 2) % 3]; // 滚动数组
    return FB[n % 3];
  }
  ```

<br>

### MIS 最大子段和

- [洛谷 P1115](https://www.luogu.com.cn/problem/P1115)： 给出一个长度为 $n$ 的序列 $a$，选出其中连续且非空的一段使得这段和最大。
- 数据范围： $1 \leq n \leq 2 \times 10^5$ ， $-10^4 \leq a_i \leq 10^4$
- 样例：
  ```txt
  input:
    7
    2 -4 3 -1 2 -4 3
  output: 4
  ```
- **码：**
  ```cpp {.line-numbers}
  void solve() {
    int n, x; cin >> n;
    ll ans = INT_MIN, dp0 = 0, dp1;
    for (int i = 1; i <= n; ++i) {
      cin >> x;
      dp0 = dp1 = max(dp0, (ll)0) + x;
      ans = max(ans, dp1);
    }
    cout << ans << endl;
  }
  ```

<br>

### LIS 最长上升子序列

#### DP 方法

- 状态设计：$dp[i]$ 代表 从 $A[0]$ 到 $A[i]$ 的 LIS 的长度
- 状态转移：$F[i] = max (F[j]+1,\; F[i]) ,\; \{1 \leq j < i, \; A[j] < A[i] \}$
- 边界处理：$dp[i] = 1 ,\; (1 \leq i \leq n)$
- 复杂度为 $O(n^2)$
- **码：**

  ```cpp {.line-numbers}
  void solve() {
    vector<int> arr{9, 8, 7, 4, 5, 1, 2, 6, 3, 0};
    int n = arr.size(), ans = 0;
    vector<int> dp(n, 1); // 初始长度为 1

    for (int i = 0; i < n; ++i) {
      for (int j = 0; j < i; ++j)
        if (arr[i] > arr[j])
          dp[i] = max(dp[i], dp[j] + 1);
      ans = max(ans, dp[i]);
    }
    for (int i : dp) cout << i << " "; cout << endl;
    cout << ans;
  }
  ```

<br>

#### 贪心 二分

- 对于一个上升子序列，显然其结尾元素越小，越有利于在后面接其他的元素，也就越可能变得更长

- 复杂度为 $O(n \times \log_2n)$

  ```cpp {.line-numbers}
  void solve() {
    vector<int>a{9, 8, 7, 4, 5, 1, 2, 6, 3, 0};
    int n = a.size(), ans = 1;
    vector<int> b(n, *max_element(all(a))); // B 数组并不一定是 LIS
    b[0] = a[0];

    for (int i = 1; i < n; ++i) {
      int j = lower_bound(all(b), a[i]) - b.begin();
      b[j] = a[i];
      ans = max(ans, j + 1);
    }
    cout << ans;
  }
  ```

<br>

> 参考：[最长上升子序列 (LIS) 详解+例题模板 (全)](https://blog.csdn.net/lxt_Lucia/article/details/81206439)

<br>

### 使用硬币的个数

```cpp {.line-numbers}
const int MAXM = 1000;
const int type = 6;
int money[MAXM] = {0};
int coin[type] = {1, 5, 10, 20, 50, 100};
void solve()
{
    int i, j;
    for (i = 1; i < MAXM; i++)
        money[i] = INT_MAX - 1;

    for (i = 0; i < type; i++)
        for (j = coin[i]; j < MAXM; j++)
            money[j] = min(money[j], money[j - coin[i]] + 1);
}
```

<br>

## 背包

### 01 背包

```cpp {.line-numbers}
void solve()
{
    for (i = 1; i <= num; i++)
        for (j = 1; j <= w; j++)
            if (j < weight[i])
                dp[i][j] = dp[i - 1][j];
            else
                dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
}

//一维数组优化（覆盖过程，防爆空间）
void solvee()
{
    for (i = 1; i <= num; i++)
        for (j = w; j >= 0; j--)
            if (j >= weight[i])
                DP[j] = max(DP[j], DP[j - weight[i]] + value[i]);
}
cout << DP[w];
```
