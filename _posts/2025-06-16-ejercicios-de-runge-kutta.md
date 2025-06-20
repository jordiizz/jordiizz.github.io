---
layout: single
title: "Ejercicio con Método de Runge–Kutta de orden 4 (h = 0.1)"
date: 2025-06-16
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
permalink: /docs/ejercicios-de-runge-kutta/
---

{% include mathjax.html %}

## Ejercicio 19: Runge–Kutta de orden 4 (3 iteraciones, \(h = 0.1\))

Dada la EDO:

$$
y' = y\,\tan(x), \quad y(0)=1
$$

El esquema clásico de RK4 es

$$
\begin{aligned}
k_1 &= f(x_n, y_n), \\
k_2 &= f\!\left(x_n + \tfrac{h}{2},\; y_n + \tfrac{h}{2}k_1\right),\\
k_3 &= f\!\left(x_n + \tfrac{h}{2},\; y_n + \tfrac{h}{2}k_2\right),\\
k_4 &= f\!\left(x_n + h,\; y_n + h k_3\right),\\[6pt]
y_{n+1} &= y_n + \tfrac{h}{6}\bigl(k_1 + 2k_2 + 2k_3 + k_4\bigr),
\end{aligned}
\qquad f(x,y)=y\tan x.
$$

---

### Paso 0 → 1 (\(x = 0\) a \(0.1\))

$$
\begin{aligned}
x_0 &= 0, &\quad y_0 &= 1,\\
k_1 &= 0.000000,\\
k_2 &= 0.050042,\\
k_3 &= 0.050167,\\
k_4 &= 0.100838,\\[6pt]
y_1 &= y_0 + \tfrac{h}{6}\bigl(k_1 + 2k_2 + 2k_3 + k_4\bigr)=1.005021.
\end{aligned}
$$

---

### Paso 1 → 2 (\(x = 0.1\) a \(0.2\))

$$
\begin{aligned}
x_1 &= 0.1, &\quad y_1 &= 1.005021,\\
k_1 &= 0.100838,\\
k_2 &= 0.152656,\\
k_3 &= 0.153048,\\
k_4 &= 0.206830,\\[6pt]
y_2 &= y_1 + \tfrac{h}{6}\bigl(k_1 + 2k_2 + 2k_3 + k_4\bigr)=1.020339.
\end{aligned}
$$

---

### Paso 2 → 3 (\(x = 0.2\) a \(0.3\))

$$
\begin{aligned}
x_2 &= 0.2, &\quad y_2 &= 1.020339,\\
k_1 &= 0.206833,\\
k_2 &= 0.263176,\\
k_3 &= 0.263895,\\
k_4 &= 0.323791,\\[6pt]
y_3 &= y_2 + \tfrac{h}{6}\bigl(k_1 + 2k_2 + 2k_3 + k_4\bigr)=1.046752.
\end{aligned}
$$

---

$$
y(0.3) \approx 1.046752
$$

## PDF con más ejercicios resueltos

[Descargar Guía de Ejercicios](/docs/Ejercicios Runge-Kutta.pdf)

[Descargar Guía de Ejercicios Resueltos](/docs/Ejercicios Runge-Kutta Resueltos.pdf)
