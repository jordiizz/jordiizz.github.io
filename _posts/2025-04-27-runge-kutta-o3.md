---
layout: single
title: "RK3"
date: 2025-04-25
toc: true
toc_sticky: true
hidden: true
permalink: /docs/runge-kutta/rk3/
sidebar:
  nav: "docs"
---

{% include mathjax.html %}


## Fórmulas del método RK3

Dado un paso \( h \), el valor de \( y \) en el siguiente punto se calcula con:

$$
\begin{aligned}
k_1 &= f(x_n, y_n) \\\\
k_2 &= f\left(x_n + \frac{h}{2},\ y_n + \frac{h}{2} \cdot k_1\right) \\\\
k_3 &= f\left(x_n + h,\ y_n - h \cdot k_1 + 2h \cdot k_2\right) \\\\
y_{n+1} &= y_n + \frac{h}{6}(k_1 + 4k_2 + k_3)
\end{aligned}
$$

Donde:

- \( x_n \): punto actual  
- \( y_n \): valor aproximado de la solución en \( x_n \)  
- \( h \): tamaño del paso  
- \( k_1, k_2, k_3 \): estimaciones de la pendiente (derivada) en diferentes puntos dentro del intervalo.
