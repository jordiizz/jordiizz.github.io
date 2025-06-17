---
layout: single
title: "RK2"
date: 2025-04-25
toc: true
toc_sticky: true
hidden: true
permalink: /docs/runge-kutta/rk2/
sidebar:
  nav: "docs"
---

{% include mathjax.html %}


## Fórmulas del método RK2

Dado un paso \( h \), el valor de \( y \) en el siguiente punto se calcula así:

$$
\begin{aligned}
k_1 &= f(x_n, y_n) \\\\
k_2 &= f\left(x_n + h,\ y_n + h \cdot k_1\right) \\\\
y_{n+1} &= y_n + \frac{h}{2}(k_1 + k_2)
\end{aligned}
$$

También existe una variante del RK2 conocida como el **método del punto medio**, con esta fórmula:

$$
\begin{aligned}
k_1 &= f(x_n, y_n) \\\\
k_2 &= f\left(x_n + \frac{h}{2},\ y_n + \frac{h}{2} \cdot k_1\right) \\\\
y_{n+1} &= y_n + h \cdot k_2
\end{aligned}
$$

Donde:

- \( x_n \): punto actual  
- \( y_n \): valor de la solución en \( x_n \)  
- \( h \): tamaño del paso  
- \( k_1, k_2 \): estimaciones de la derivada en puntos intermedios.

