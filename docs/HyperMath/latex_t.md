# 临时的 $\LaTeX$ 码

<br>
&emsp;

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [临时的 $\LaTeX$ 码](#临时的-latex-码)
  - [三角函数](#三角函数)
  - [第一次离散数学作业](#第一次离散数学作业)

<!-- /code_chunk_output -->

## 三角函数

<br>
&emsp;

$$
% 三角函数_定义
\begin{align*}
\text{正三角函数：}\\
&\sin\theta =y ,\ \cos\theta =x ,\ \tan\theta = \frac{y}{x} \\
&\sec\theta = \frac{1}{x}, \ \csc\theta = \frac{1}{y}, \ \cot\theta= \frac{x}{y} \\
\text{反三角函数：}\\
&\arcsin y = \theta \\
&f(x)=\arcsin(x),\ (x\in\left[-1,1 \right],\ f(x)\in \left [ -\frac{\pi}{2} ,\frac{\pi}{2}  \right ] )
\end{align*}
$$

$$
\begin{align*}
     & \cos 2x = 2\cos^2 x - 1 \quad \cos x + 1 = 2\cos^2 \frac{x}{2} \\
     & \sin^2 x +\cos^2 x = 1 \quad \cot^2 x+1 = \csc^2 x                                  \\
     & \tan^2 x+1 = \sec^2 x \quad \tan x = \frac{\sin x}{\cos x} = \frac{\sec x}{ \csc x} \\
     & u = \arcsin x \to x=\sin u \quad 1-x^2 = \cos^2 x                                   \\
     & \sin\arcsin x = x \quad \cos\arcsin = \sqrt{1-x^2}                                  \\
\end{align*}
$$

<br>
&emsp;

## 第一次离散数学作业

<br>
&emsp;

$\textbf{1.\; 证明：} \mathbf{p \to (q \to r) \Leftrightarrow p \wedge q \to r}$

$$
\begin{align*}
  \text{证：令 \;} &A = p \to (q \to r) \\
    &\Leftrightarrow p \to (\lnot q \vee r) \\
    &\Leftrightarrow \lnot p \vee (\lnot q \vee r) \\
    &\Leftrightarrow r \vee (\lnot q \vee \lnot p) \\
    &\Leftrightarrow r \vee \lnot (p \wedge q) \\
    &\Leftrightarrow p \wedge q \to r \\
  \therefore p \to &(q \to r) \Leftrightarrow p \wedge q \to r
\end{align*}
$$

<br>

$\textbf{2.\; 证明：} \mathbf{A\oplus 1 \Leftrightarrow \lnot A}$

$$
\begin{align*}
  \text{证：令 \;} B &= A \oplus 1 \\
    &\Leftrightarrow (\lnot A \wedge 1) \vee (A \wedge 0) \\
    &\Leftrightarrow \lnot A \vee 0 \\
    &\Leftrightarrow \lnot A \\
    \\
  \therefore A \oplus &1 \Leftrightarrow \lnot A
\end{align*}
$$

<br>

$\textbf{3. 证明：} \mathbf{A \oplus B \Leftrightarrow (A \vee B)\wedge\lnot(A\wedge B)}$

$$
\begin{align*}
  \text{证：令\;} X&=(A\vee B)\wedge \lnot(A\wedge B) \\
    &\Leftrightarrow \lnot(A\wedge B) \wedge A \vee \lnot(A\wedge B)\wedge B \\
    &\Leftrightarrow (\lnot A\vee\lnot B)\wedge A \vee(\lnot A\vee\lnot B)\wedge B \\
    &\Leftrightarrow (\lnot B \wedge A)\vee 0 \vee(\lnot A\wedge B) \vee 0 \\
    &\Leftrightarrow (\lnot B\wedge A)\vee(\lnot A\wedge B) \\
    &\Leftrightarrow A \oplus B
\end{align*}
$$

<br>

$\textbf{4. 证明：} \mathbf{(p\vee q)\wedge(\lnot p\vee r)\wedge(q\vee r)\Leftrightarrow (p\vee q)\wedge(\lnot p\vee r)}$

$$
\begin{align*}
  \text{证：令\;} A&=(p\vee q)\wedge((\lnot p\vee r)\wedge(q\vee r)) \\
  &\Leftrightarrow (p\vee q)\wedge(\lnot p\wedge q \vee r) \\
  &\Leftrightarrow ((p\vee q)\wedge(\lnot p\wedge q))\vee ((p\vee q)\wedge r) \\
  &\Leftrightarrow (\lnot p\wedge q)\vee(p\wedge r)\vee(q\wedge r) \\
  \\
  \text{令\;} B&=(p\vee q)\wedge(\lnot p\vee r) \\
  &\Leftrightarrow \lnot p\wedge(p\vee q)\vee r\wedge(p\vee q) \\
  &\Leftrightarrow (\lnot p\wedge q)\vee(p\wedge r)\vee(q\wedge r) \\
  \therefore A \Leftrightarrow B &\text{原命题得证}
\end{align*}
$$

<br>
&emsp;
