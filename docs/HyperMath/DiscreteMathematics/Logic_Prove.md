---
title: 第一章 逻辑与证明
date: 2022-09-26
---

# {{ $frontmatter.title }}

<p style="font-size: 32px; font-weight: bold;">目录</p>

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=5 orderedList=false} -->

<!-- code_chunk_output -->

- [](#)
  - [本章概述](#本章概述)
  - [命题逻辑（Propositional Logic）](#命题逻辑propositional-logic)
    - [命题及其表示法](#命题及其表示法)
    - [联结词（Connectives、Logical Operator）](#联结词connectives-logical-operator)
      - [真值表](#真值表)
      - [优先级](#优先级)
    - [真值表与等价命题](#真值表与等价命题)
    - [逻辑等价式](#逻辑等价式)
    - [公式定律](#公式定律)
  - [谓词逻辑（Predicate）](#谓词逻辑predicate)
    - [谓词的概念与表示](#谓词的概念与表示)
    - [命题函数（Propositional Function）与量词（Quantifiers）](#命题函数propositional-function与量词quantifiers)

<!-- /code_chunk_output -->

<br> 
&emsp;

## 本章概述

命题、连接词、等价命题、逻辑等价式、命题逻辑、谓词、量词、谓词逻辑、逻辑证明

## 命题逻辑（Propositional Logic）

### 命题及其表示法

具有确定真值的陈述句叫做**命题（Proposition）**。命题有两种类型：

- 不能分解为更简单的陈述语句的称为**原子命题（Atomic Proposition）**
- 由联结词，标点符号和原子命题复合构成的命题称为**复合命题（Compound Proposition）**

命题常用大写字母或带下标的大写字母或数字表示，如 $A$，$B_i$​，$[12]$ 等,这些符号称为命题标识符

<br>
&emsp;

### 联结词（Connectives、Logical Operator）

- $\neg$：否定、非（Negation）
- $\wedge$：合取、且（Conjunction）
- $\vee$：析取、或（Disjunction、Inclusive Or）
- $\oplus$：异或（Exclusive Or）
- $\rightarrow$：条件语句、蕴含（Implication）
- $\leftrightarrow$：双向条件语句、双向蕴含（Bi-implication）

#### 真值表

<div style="text-align: center;margin: 1rem;">

<span></span>
| $P$ | $Q$ | $\lnot P$ | $\wedge Q$ | $\vee Q$ | $P\oplus Q$ | $P\rightarrow Q$ | $P\leftrightarrow Q$ |
| :-: | :-: | :-------: | :--------: | :------: | :---------: | :--------------: | :------------------: |
| 1 | 1 | 0 | 1 | 1 | 0 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 | 1 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 |

</div>

#### 优先级

$$\lnot \;>\; \wedge \;>\; \vee \;>\; \to \;>\; \Leftrightarrow$$

<br>
&emsp;

### 真值表与等价命题

**定义 1**

&emsp;&emsp; 在命题公式中，对于分量指派真值的各种可能组合，就确定了这个命题公式的各种真值情况，把它汇列成表，就是命题公式的真值表

&emsp;&emsp; n 个原子命题，真值表有 $2^n$ 行，每个原子命题都有 $T$ or $F$ 两种指派

**定义 2**

&emsp;&emsp; 给定两个命题公式 $A$ 和 $B$ ，设 $P_1,P_2,\cdots,P_n$​ 为所有出现于 $A$ 和 $B$ 中的原子变元，若给 $P_1,P_2,\cdots,P_n$​ 任一组真值指派， $A$ 和 $B$ 的真值都相同，则称 $A$ 和 $B$ 是等价的或逻辑相等的。记作 $A\equiv B$

&emsp;&emsp; 注意： $\equiv$ 不是逻辑连接词，所以 $A\equiv B $ 不是一个命题，而一个 statement，它表明 A、B 逻辑等价

### 逻辑等价式

**永真式（Tautologies）**

- **定义 1 - 5.1** <br> &emsp;&emsp; 给定一命题公式，若无论对分量作怎样的指派，其对应的真值永为 $\pmb{T}$ ，则称该命题公式为重言式或永真公式 <br> &emsp;&emsp; 也就是： $p\equiv q$ 的含义就是 $p\leftrightarrow q$ 是个永真式

**永假式（Contradictions）**

- **定义 1 - 5.2** <br> &emsp;&emsp; 给定一命题公式，若无论对分量作怎样的指派，其对应的真值永为 $\pmb{F}$ ，则称该命题公式为矛盾式或永假公式

- **定义 1 - 5.3** <br> &emsp;&emsp; 设 $A$ 和 $B$ 为两个命题公式， $A \equiv B$ 当且仅当 $A \leftrightarrow B$为一个重言式

- **定义 1 - 5.4** <br> &emsp;&emsp; 当且仅当 $P \rightarrow Q$ 是一个重言式时，我们称“ $P$ 蕴含 $Q$”，并记作 $P \Rightarrow Q$

- **定理 1 - 5.1** <br> &emsp;&emsp; 任何两个重言式的合取或析取，仍然是一个重言式

- **定理 1 - 5.2** <br> &emsp;&emsp; 设 $P$和 $Q$为任意两个命题公式， $P \Leftrightarrow Q$ 的充分必要条件是 $P \Rightarrow Q$ 且 $Q \Rightarrow P$

### 公式定律

**初级公式**

<div style="text-align: center;margin: 1rem;">

<span></span>
命题定律 | 表达式
| :-: | :-: |
对合律 | $\neg\neg P \equiv P$
幂等律 | $P \vee P \equiv P ,\; P \wedge P \equiv P$
结合律 | $(P∨Q)∨R≡P∨(Q∨R)\\(P∧Q)∧R≡P∧(Q∧R)​$
交换律 | $P∨Q≡Q∨P\\P∧Q≡Q∧P​$
分配律 | $P∨(Q∧R)≡(P∨Q)∧(P∨R)\\P∧(Q∨R)≡(P∧Q)∨(P∧R)$
吸收律 | $P∨(P∧Q)≡P\\P∧(P∨Q)≡P$
德·摩根律 | $¬(P∨Q) ≡¬P∧¬Q¬ \\ (P∧Q) ≡¬P∨¬Q$
同一律 | $P\vee\pmb{F}\equiv P ,\; P\wedge\pmb{T}\equiv P$
零律| $P\vee\pmb{T}\equiv\pmb{T} ,\;P \wedge\pmb{F}\equiv\pmb{F}$  
否定律| $P\vee\neg P\equiv\pmb{T} ,\; P\wedge\neg P\equiv\pmb{F}$

</div>

**二级公式**

- $P \rightarrow Q \equiv \neg P \vee Q$
- $P \leftrightarrow Q \equiv(P \rightarrow Q) \wedge(Q \rightarrow P)$
- $P \leftrightarrow Q \equiv(P \wedge Q) \vee(\neg P \wedge \neg Q)$

<br>
&emsp;

## 谓词逻辑（Predicate）

### 谓词的概念与表示

&emsp;&emsp; 我们用大写字母表示谓词，用小写字母表示客体名称，如 $A(b)、$B(a,b)$、$L(a,b,c)$ 等，表示客体是否具有谓词所表述的那个性质。

&emsp;&emsp; 单独一个谓词不是完整的命题（谓词没有真假值），我们把谓词字母后填以客体所得的式子称为谓词填式，如果 $A$ 为 $n$ 元谓词，$a_1,a_2,\cdots,a_n$​ 是客体的名称，则 $A(a_1,a_2,\cdots,a_n)$ 就可成为命题。

### 命题函数（Propositional Function）与量词（Quantifiers）

引入两种**量词（Quantifiers）**

- **全称量词** <br> &emsp;&emsp; 一个用符号 $(\forall x)$ 表示，代表“对所有的 $x$”，称为**全称量词（Universal Quantifiers）**
- **存在量词** <br> &emsp;&emsp; 另一个用符号 $(\exist x)$表示，表示“存在一些 $x$”，称为**存在量词（Existential Quantifiers）**。全称量词和存在量词通称为量词。
- **唯一性量词** <br> &emsp;&emsp; 唯一性量词表示论域有且仅有一个元素满足谓词的性质。**符号为：** ! $\exists !$ <br> &emsp;&emsp; 但是，可以用全称量词和存在量词去代替唯一性量词。 例如： $\exists!x(P(x)) \equiv \exists x (P(x) \wedge \forall y((y!=x)\rightarrow \neg P(y) )$

**量词的优先级：** 量词的优先级最高。比如： $\forall xP(x)\wedge Q(x)\equiv (\forall xP(x)\wedge Q(x)$
