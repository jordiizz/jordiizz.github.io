---
layout: single
title: "RK4 "
date: 2025-04-25
toc: true
toc_sticky: true
permalink: /docs/runge-kutta/rk4/
sidebar:
  nav: "docs"
---

{% include mathjax.html %}


## Fórmulas del método RK4

Dado un paso \( h \), el valor de \( y \) en el siguiente punto se calcula así:

$$
\begin{aligned}
k_1 &= f(x_n, y_n) \\

k_2 &= f\left(x_n + \frac{h}{2},\ y_n + \frac{h}{2}k_1\right) \\

k_3 &= f\left(x_n + \frac{h}{2},\ y_n + \frac{h}{2}k_2\right) \\

k_4 &= f(x_n + h,\ y_n + hk_3) \\
y_{n+1} &= y_n + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)
\end{aligned}
$$


Donde:

 \( x_n \): punto actual  
 \( y_n \): valor aproximado de la solución en \( x_n \)  
 \( h \): tamaño del paso  
 \( k_1 \), \( k_2 \), \( k_3 \), \( k_4 \): estimaciones de la pendiente (derivada) en diferentes puntos dentro del intervalo.

---



