---
layout: single
title: "Ejercicio con Método de Euler (h = 0.1)"
date: 2025-06-16
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
permalink: /docs/ejercicios-de-euler/
---

{% include mathjax.html %}

## Ejercicio 9: Método de Euler (3 iteraciones, \(h = 0.1\))

Dada la EDO:

$$
y' = x + y, \quad y(0) = 1
$$

El método de Euler de primer orden utiliza la fórmula

$$
y_{n+1} = y_n + h\,f(x_n, y_n),
$$

donde

$$
f(x,y) = x + y.
$$

---

### Paso 0 → 1 (\(x = 0\) a \(x = 0.1\))

$$
\begin{aligned}
x_0 &= 0, \\
y_0 &= 1, \\
f_0 &= 0 + 1 = 1, \\
y_1 &= y_0 + h\,f_0 = 1 + 0.1(1) = 1.1.
\end{aligned}
$$

---

### Paso 1 → 2 (\(x = 0.1\) a \(x = 0.2\))

$$
\begin{aligned}
x_1 &= 0.1, \\
y_1 &= 1.1, \\
f_1 &= 0.1 + 1.1 = 1.2, \\
y_2 &= y_1 + h\,f_1 = 1.1 + 0.1(1.2) = 1.22.
\end{aligned}
$$

---

### Paso 2 → 3 (\(x = 0.2\) a \(x = 0.3\))

$$
\begin{aligned}
x_2 &= 0.2, \\
y_2 &= 1.22, \\
f_2 &= 0.2 + 1.22 = 1.42, \\
y_3 &= y_2 + h\,f_2 = 1.22 + 0.1(1.42) = 1.362.
\end{aligned}
$$

---

$$
y(0.3) \approx 1.362
$$

## PDF con más ejercicios resueltos

[Descargar Guía de Ejercicios](/docs/Ejercicios Euler.pdf)

[Descargar Guía de Ejercicios Resueltos](/docs/Ejercicios Euler Resueltos.pdf)