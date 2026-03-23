#! https://zhuanlan.zhihu.com/p/691653888
# 普通天文学-恒星模型
[TOC]
## 多方球模型 Polytropic Models

对于恒星表面温度以及化学组成的信息，我们可以从其光谱型中得到。Payne关于恒星中氢与氦异常高的丰度的讨论，使得我们不由得设想恒星是一个炽热的气体球。为便于分析，对恒星模型进行一个初步的讨论，不妨假设恒星是一个稳定的气体球。
首先给出质量的**连续性方程**
$$
\begin{align}
    \frac{\mathrm{d}M_r}{\mathrm{d}r} = -4\pi r^2\rho
\end{align}
$$

作为一个气体球，不免要对其进行**流体静力学平衡**的分析。首先是对其压强与引力的抗衡。
设想半径为$r$、厚度$\mathrm{d}r$球壳上面积为$\mathrm{d}A$的气体元
$$
\begin{align*}
    0 = \mathrm{d}F_g + \mathrm{d}F_P = -G\frac{M_r\rho\mathrm{d}A\mathrm{d}r}{r^2} - \mathrm{d}P\mathrm{d}A
\end{align*}
$$

即
$$
\begin{align}
    \frac{\mathrm{d}P}{\mathrm{d}r} = -G\frac{M_r\rho}{r^2}
\end{align}
$$

此即恒星模型的流体静力学平衡条件。
为了解上述方程，我们需要进一步假设，即假设恒星内部符合理想气体状态方程，其内部的热量传输符合**多方过程**，即满足
$$
\begin{align}
    P = K\rho^{1+1/n} = K\rho^{\gamma}
\end{align}
$$

现在我们对$(1)$进行进一步变形
$$
\begin{align}
    \frac{1}{r^2}\frac{\mathrm{d}}{\mathrm{d}r}\left(\frac{r^2}{\rho}\frac{\mathrm{d}P}{\mathrm{d}r}\right) = -4\pi G\rho\\[3ex]
    \left(\frac{n+1}{n}\right)\frac{K}{r^2}\frac{\mathrm{d}}{\mathrm{d}r}\left(r^2\rho^{1/n-1}\frac{\mathrm{d}\rho}{\mathrm{d}r}\right) = -4\pi G\rho\notag
\end{align}
$$

做代换$\rho(r) \equiv \rho_c\theta^n(r), r \equiv\alpha\xi(r), \alpha \equiv \left[\frac{(n+1)K}{4\pi G}\rho_c^{1/n-1}\right]^\frac{1}{2}$，方程便化作更直观的**Lane-Emden方程**的形式
$$
\begin{align}
    \frac{1}{\xi^2}\frac{\mathrm{d}}{\mathrm{d}\xi}\left(\xi^2\frac{\mathrm{d}\theta}{\mathrm{d}\xi}\right) = -\theta^n
\end{align}
$$

对于多方指数$n = 0,1,5$时，方程有解析解。

![lane-emden equation](lane-emden.png)

Lane-Emden方程的解给我们关于恒星的**半径**与**密度**之间的单调性联系，即从恒星的表面到中心，其密度与压强是**单调上升**的。

## 状态与压强

恒星内部压强主要由两部分组成，一部分为粒子热运动产生的压强，另一部分为光子的辐射压，即
$$
\begin{align}
    P = P_g + P_{rad}
\end{align}
$$

### 理想气体 Ideal Gas

在上面关于多方球模型的讨论之中，我们假设恒星内部服从理想气体状态方程，在此我们进行进一步讨论，构建恒星的状态方程。对于恒星模型内部物质，将化学组成$\mu$，密度$\rho$在理想气体状态方程中进行替换
$$
\begin{align}
    P_g = \frac{\rho k T}{\mu m_H}
\end{align}
$$

其中$\mu$为相对分子质量，$m_H$为氢原子的质量。这一部分反映了气体在某一温度下的热运动产生的压强。
对于**电中性**气体而言，我们讨论相对分子质量的倒数
$$
\begin{align*}
    \frac{1}{\mu_n} &= \frac{\sum_j N_j}{\sum_j N_j m_j}\\[3ex]
    &=\sum_j \frac{1}{A_j}X_j\\[3ex]
    &\simeq X + \frac{1}{4}Y + \left \langle \frac{1}{A}\right\rangle_nZ
\end{align*}
$$

其中$X_j$为元素$j$的质量分数，$\left \langle \frac{1}{A}\right\rangle_n\sim\frac{1}{15.5}$。那么
$$
\begin{align}
    P_g = \frac{\rho k T}{m_H}\left(X + \frac{1}{4}Y\right)
\end{align}
$$

对于**完全电离**的气体而言
$$
\begin{align*}
    \frac{1}{\mu_i} &= \frac{\sum_j N_j(1+z_j)}{\sum_j N_j m_j}\\[3ex]
    &=\sum_j \frac{1+z_j}{A_j}X_j\\[3ex]
    &2\simeq X + \frac{3}{4}Y + \left \langle \frac{1+z}{A}\right \rangle_i Z
\end{align*}
$$

其中$z_j$为元素$j$电离的电子数，$\left \langle \frac{1+z}{A}\right\rangle_i\simeq\frac{1}{2}$。
$$
\begin{align}
    P_g = \frac{\rho k T}{m_H}\left(X + \frac{3}{4}Y + \frac{1}{2}Z\right)
\end{align}
$$

### 简并气体 Degenerate Gas

在**低温、高密度**的情况之下，电子（**费米子**）之间由于泡利不相容原理，无法占据相同的量子态，因此产生了一种抵抗压缩的力，称之为电子简并压。
对于非相对论性电子而言
$$
\begin{align*}
    P_e \propto \rho ^ {5/3} \qquad v \ll c
\end{align*}
$$

对于相对论性电子而言
$$
\begin{align*}
    P_e \propto \rho ^ {4/3} \qquad v \leq c
\end{align*}
$$

对于简并态的气体，应当考虑电子简并压。

### 辐射压

辐射压源自于光子的辐射压强
$$
\begin{align}
    P_{rad} = \frac{1}{3}aT^4
\end{align}
$$

## 能量守恒

讨论单位时间内通过恒星内部半径为$r$球面的能量$L_r$
$$
\begin{align*}
    \mathrm{d}L_r = \epsilon\mathrm{d}M_r
\end{align*}
$$

其中$\epsilon$为核反应与引力势能转化的产能率（单位时间单位质量），那么
$$
\begin{align*}
    \frac{\mathrm{d}L_{r}}{\mathrm{d}r} = 4\pi r^2\rho\epsilon = 4\pi r^2\rho(\epsilon_{nu} + \epsilon_{g})
\end{align*}
$$

## 能量传输方式

能量传输的三种形式：辐射，传导和对流，在恒星内部主要发生的是辐射和对流过程。能量的传输可以通过温度梯度去描述
$$
\begin{align}
    \frac{\mathrm{d}T}{\mathrm{d}r}=\left.\frac{\mathrm{d}T}{\mathrm{d}r}\right|_{rad} +\left.\frac{\mathrm{d}T}{\mathrm{d}r}\right|_{conv}
\end{align}
$$

### 辐射 Radiation

辐射过程主要通过光子进行能量的传递。构造恒星内部的辐射平衡
$$
\begin{align*}
    \frac{\mathrm{d}P_{rad}}{\mathrm{d}r} = -\frac{\bar\kappa\rho}{c}F_{rad}
\end{align*}
$$

$\bar\kappa$为不透明度。
依据辐射压与温度的关系
$$
\begin{align*}
    \frac{\mathrm{d}P_{rad}}{\mathrm{d}r} = \frac{4}{3}aT^4\frac{\mathrm{d}T}{\mathrm{d}r}
\end{align*}
$$

联立上式
$$
\begin{align}
    \frac{\mathrm{d}T}{\mathrm{d}r} &= -\frac{3}{4ac}\frac{\bar\kappa\rho}{T^3}F_{rad}\notag\\[2ex]
    &= -\frac{3}{4ac}\frac{\bar\kappa\rho}{T^3}\frac{L_r}{4\pi r^2}
\end{align}
$$

此即辐射平衡下的温度梯度。

### 对流 Convection

首先对对流建立一个直观的感受。随着恒星内部的**不透明度**或者**产能率**增大，辐射**温度梯度**增大，使得辐射不再是能量传递的有效方式（不足以供应能量的传输），或者说辐射平衡是不稳定的，此时将在恒星内部发生对流。在对流过程中，热气体膨胀上升，冷却后下降，形成**物质流动**和**热量的传递**。
上面构造的多方球模型假定恒星内部气体元发生绝热过程，考察其在上升过程中的**绝热膨胀**过程，结合$(3)$
$$
\begin{align*}
    \frac{\mathrm{d}P}{\mathrm{d}r} = \gamma\frac{P}{\rho}\frac{\mathrm{d}\rho}{\mathrm{d}r}
\end{align*}
$$

实际有
$$
\begin{align*}
    \frac{\mathrm{d}P}{\mathrm{d}r} = -\frac{P}{\mu}\frac{\mathrm{d}\mu}{\mathrm{d}r}+\frac{P}{\rho}\frac{\mathrm{d}\rho}{\mathrm{d}r}+\frac{P}{T}\frac{\mathrm{d}T}{\mathrm{d}r}
\end{align*}
$$

假设在绝热膨胀过程中化学组成$\mu$不发生变化，那么
$$
\begin{align}
    \left.\frac{\mathrm{d}T}{\mathrm{d}r}\right|_{ad}&= \left(1-\frac{1}{\gamma}\right)\frac{T}{P}\frac{\mathrm{d}P}{\mathrm{d}r}\\[3ex]
    &= -\left(1-\frac{1}{\gamma}\right)\frac{\mu m_H}{k}\frac{GM_r}{r^2}
\end{align}
$$

由$(12)$
$$
\begin{align}
    \nabla = \frac{\mathrm{d}\ln T}{\mathrm{d}\ln P}\\[2ex]
    \nabla_{ad} = 1-\frac{1}{\gamma}
\end{align}
$$

绝热膨胀的假设给我们提供了一个大致范围，当温度梯度过大，即$\nabla>\nabla_{ad}$时，能量传输的主要方式为对流，即**对流区**；当温度梯度，即$\nabla<\nabla_{ad}$时，能量传输的主要方式为辐射，即**辐射区**。

## 恒星模型 Stellar Model

有关恒星模型构建所需的微分方程已经写的差不多了，~~甚至开始就把多方模型写出来了喂~~，在这里再总结一下
$$
\begin{align}
    \frac{\mathrm{d}M_r}{\mathrm{d}r} &= -4\pi r^2\rho\\[2ex]
    \frac{\mathrm{d}P}{\mathrm{d}r} &= -G\frac{M_r\rho}{r^2}\\[2ex]
    \frac{\mathrm{d}L_{r}}{\mathrm{d}r} &= 4\pi r^2\rho(\epsilon_{nu} + \epsilon_{g})\\[2ex]
    \left.\frac{\mathrm{d}T}{\mathrm{d}r}\right|_{rad} &= -\frac{3}{4ac}\frac{\bar\kappa\rho}{T^3}\frac{L_r}{4\pi r^2}\\[3ex]
    \left.\frac{\mathrm{d}T}{\mathrm{d}r}\right|_{ad}&= -\left(1-\frac{1}{\gamma}\right)\frac{\mu m_H}{k}\frac{GM_r}{r^2}
\end{align}
$$

边界条件
$$
\begin{align*}
    r\rightarrow 0\left\{
        \begin{array}{l}
        M_r &\rightarrow 0\\
        L_r &\rightarrow 0
        \end{array}
    \right.\\[14pt]
    r\rightarrow R_*\left\{
        \begin{array}{l}
        T&\rightarrow 0\\
        \rho&\rightarrow 0\\[3pt]
        P&\rightarrow 0
        \end{array}
    \right.
\end{align*}
$$

显然，边界条件中边界温度为0是不合理的。我们的模型还是有非常不精确的地方。
上面的模型还缺少一些对于恒星内部能源的讨论，当然已有的讨论也是非常粗略的，~~甚至没有一个天文应该有的数量级估算~~，等到笔者闲的时候再写一下吧。

[^1]

[^1]:Bradley W. Carroll (Weber State University, and  Utah), and  Dale A. Ostlie (Weber State University, and  Utah).. "An introduction to modern astrophysics ". Cambridge University Press,(2017).、