---
layout: single
title: "Ejercicio con método de Taylor de orden 2"
date: 2025-06-16
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
permalink: /docs/ejercicios-de-taylor/
---

{% include mathjax.html %}
## Ejemplo 3.3: Método de Taylor de orden 2 (2 iteraciones, h = 0.1)

Dada la EDO:

$$
y' = x^2 - y, \quad y(0) = 1
$$

Aplicando la serie de Taylor:

$$
y_{n+1} = y_n + h y'_n + \frac{h^2}{2!} y''_n
$$

Se tiene:

$$
f(x, y) = x^2 - y
$$

Derivadas parciales:

$$
f_x = 2x, \quad f_y = -1
$$

Entonces:

$$
y'' = f_x + f_y \cdot f = 2x - (x^2 - y) = 2x - x^2 + y
$$

---

### Paso 0 → 1 (x = 0 a x = 0.1)

$$
x_0 = 0
$$

$$
y_0 = 1
$$

$$
f_0 = 0^2 - 1 = -1
$$

$$
y''_0 = 2(0) - 0^2 + 1 = 1
$$

$$
y_1 = y_0 + h f_0 + \frac{h^2}{2} y''_0
$$

$$
y_1 = 1 + 0.1(-1) + \frac{0.01}{2}(1) = 0.905
$$

---

### Paso 1 → 2 (x = 0.1 a x = 0.2)

$$
x_1 = 0.1
$$

$$
y_1 = 0.905
$$

$$
f_1 = 0.1^2 - 0.905 = -0.895
$$

$$
y''_1 = 2(0.1) - 0.1^2 + 0.905 = 1.095
$$

$$
y_2 = y_1 + h f_1 + \frac{h^2}{2} y''_1
$$

$$
y_2 = 0.905 + 0.1(-0.895) + \frac{0.01}{2}(1.095) \approx 0.820975
$$

---

$$
y(0.2) \approx 0.82098
$$

## PDF con más ejercicios resueltos

[Descargar Guía de Ejercicios](/docs/Ejercicios Taylor.pdf)