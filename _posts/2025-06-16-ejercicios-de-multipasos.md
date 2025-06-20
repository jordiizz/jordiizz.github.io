---
layout: single
title: "Ejercicio con Método de Multipasos (Adams–Bashforth de 4 pasos (h = 0.2))"
date: 2025-06-16
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
permalink: /docs/ejercicios-de-multipasos/
---

{% include mathjax.html %}

## Ejercicio 30: Adams–Bashforth de 4 pasos (h = 0.2)

Dada la EDO:

$$
y' = y - x^2 + 1, \qquad y(0)=0.5
$$

Nuestro objetivo es aproximar \(y(0.8)\) empleando el método explícito de Adams–Bashforth de **cuatro pasos** (AB‑4) con paso \(h = 0.2\).

Para iniciar el esquema multipasos se requieren cuatro valores previos, que se obtuvieron aquí con Runge–Kutta de orden 4:

$$
\begin{aligned}
y(0.0) &= 0.500000,\\
y(0.2) &= 0.829293,\\
y(0.4) &= 1.214076,\\
y(0.6) &= 1.648922.
\end{aligned}
$$

---

### Cálculo de \(f_n = f(x_n, y_n) = y_n - x_n^2 + 1\)

$$
\begin{aligned}
f_0 &= 0.500000 - 0^2 + 1 = 1.500000,\\
f_1 &= 0.829293 - 0.2^2 + 1 = 1.789293,\\
f_2 &= 1.214076 - 0.4^2 + 1 = 2.054076,\\
f_3 &= 1.648922 - 0.6^2 + 1 = 2.288922.
\end{aligned}
$$

---

### Paso AB‑4 \((x = 0.6 \;\to\; 0.8)\)

La fórmula del método es

$$
\boxed{\;
y_{n+1}
  = y_n
  + \frac{h}{24}
    \bigl(55 f_n
          - 59 f_{n-1}
          + 37 f_{n-2}
          - 9 f_{n-3}\bigr)
\;}
$$

Aplicando con \(n = 3\):

$$
\begin{aligned}
y_4 &= y_3
      + \tfrac{0.2}{24}
        \bigl(
          55\,f_3
          - 59\,f_2
          + 37\,f_1
          - 9\,f_0
        \bigr) \\[6pt]
    &= 1.648922
      + \tfrac{0.2}{24}
        \bigl(
          55(2.288922)
          - 59(2.054076)
          + 37(1.789293)
          - 9(1.500000)
        \bigr) \\[6pt]
    &= 1.648922
      + 0.2/24 \,(11.422&\text{…}) \\
    &\approx 2.127289.
\end{aligned}
$$



$$
y(0.8) \;\approx\; 2.127289
$$

## PDF con más ejercicios resueltos

[Descargar Guía de Ejercicios](/docs/Ejercicios Multipasos.pdf)

[Descargar Guía de Ejercicios Resueltos](/docs/Ejercicios Multipasos Resueltos.pdf)