---
layout: single
title: "Método de Taylor para ecuaciones diferenciales."
date: 2025-04-21
categories: blog
---

¡Bienvenidos al Método de Taylor!

{% include mathjax.html %}

Consiste en calcular las derivadas sucesivas de la ecuación diferencial dada, evaluando las derivadas en el punto inicial $$ x_0 $$ y reemplazando el resultado en la serie de Taylor.

La solución por el método de Taylor viene dada por:

$$
y(x) = y(x_0) + (x - x_0)y^{(1)}(x_0) + \frac{(x - x_0)^2}{2!}y^{(2)}(x_0) + \frac{(x - x_0)^3}{3!}y^{(3)}(x_0) + \dots + \frac{(x - x_0)^n}{n!}y^{(n)}(x_0)
$$

En forma práctica, si queremos calcular la solución en pasos $$ h $$ (pasos de integración), usamos:

$$
y(x_0 + h) = y(x_0) + h y'(x_0) + \frac{h^2}{2!}y''(x_0) + \frac{h^3}{3!}y'''(x_0) + \dots + \frac{h^n}{n!}y^{(n)}(x_0)
$$

Donde:

- $$ h $$: Cantidad que se aumentará en cada paso o iteración.
- $$ y^{(n)}(x_0) $$: Derivadas según el orden que se decida. Cuanto más alto el orden, mayor será la precisión.

Los coeficientes pueden calcularse así:

$$
\begin{aligned}
y(x_0) &= y_0 \\
y'(x_0) &= f(x_0, y_0) = \frac{dy}{dx} \\
y''(x_0) &= \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} \cdot \frac{dy}{dx} \\
y^{(n)}(x_0) &= \frac{\partial y^{(n-1)}}{\partial x} + \frac{\partial y^{(n-1)}}{\partial y} \cdot \frac{dy}{dx}
\end{aligned}
$$

---

## Ejemplo 1.1: Método de Taylor de orden 1 y 2

Dada la EDO:

$$
y' = y - x^2 + 1
$$

### Orden 1

Aplicando la serie de Taylor:

$$
y_{n+1} = y_n + h y'_n = y_n + h f(x, y)
$$

Sustituyendo $$ f(x, y) $$:

$$
y_{n+1} = y_n + h (y_n - x^2 + 1)
$$

### Orden 2

El método de Taylor de orden 2 es:

$$
y_{n+1} = y_n + h y'_n + \frac{h^2}{2!} y''_n
$$

Se tiene:

$$
f(x, y) = y' = y - x^2 + 1
$$

Derivadas parciales:

$$
\frac{\partial f}{\partial x} = -2x, \quad \frac{\partial f}{\partial y} = 1
$$

Entonces:

$$
y'' = -2x + (y - x^2 + 1) = y - x^2 - 2x + 1
$$

Y el método queda como:

$$
y_{n+1} = y_n + h \cdot (y_n - x^2 + 1) + \frac{h^2}{2}(y_n - x^2 - 2x + 1)
$$

---

## Ejemplo 2.2: Método de Taylor de orden 3 (3 iteraciones, h = 0.1)

Dada:

$$
y' = x + y, \quad y(0) = 1
$$

La serie de Taylor es:

$$
y_{n+1} = y_n + h y'_n + \frac{h^2}{2!} y''_n + \frac{h^3}{3!} y'''_n
$$

### Derivadas

- $$ y' = x + y $$
- $$ \frac{\partial f}{\partial x} = 1 $$
- $$ \frac{\partial f}{\partial y} = 1 $$

Entonces:

$$
y'' = \frac{\partial f}{\partial x} + \frac{\partial f}{\partial y} \cdot y' = 1 + (x + y)
$$

Y como $$ y''' = \frac{d}{dx}(y'') \approx 1 + (x + y) $$ nuevamente (simplificando para este caso), tenemos:

$$
y'' = 1 + x + y, \quad y''' = 1 + x + y
$$

---

### Paso 0 → 1 (x = 0 a x = 0.1)

- $$ x_0 = 0, y_0 = 1 $$
- $$ y' = 1 $$
- $$ y'' = 2 $$
- $$ y''' = 2 $$

$$
y_1 = 1 + 0.1(1) + \frac{0.1^2}{2}(2) + \frac{0.1^3}{6}(2) = 1 + 0.1 + 0.01 + 0.000333 \approx 1.11033
$$

---

### Paso 1 → 2 (x = 0.1 a x = 0.2)

- $$ x_1 = 0.1, y_1 = 1.11033 $$
- $$ y' = 0.1 + 1.11033 = 1.21033 $$
- $$ y'' = 1 + 0.1 + 1.11033 = 2.21033 $$
- $$ y''' = 2.21033 $$

$$
y_2 = 1.11033 + 0.1(1.21033) + \frac{0.1^2}{2}(2.21033) + \frac{0.1^3}{6}(2.21033) \approx 1.24278
$$

---

### Paso 2 → 3 (x = 0.2 a x = 0.3)

- $$ x_2 = 0.2, y_2 = 1.24278 $$
- $$ y' = 0.2 + 1.24278 = 1.44278 $$
- $$ y'' = 1 + 0.2 + 1.24278 = 2.44278 $$
- $$ y''' = 2.44278 $$

$$
y_3 = 1.24278 + 0.1(1.44278) + \frac{0.1^2}{2}(2.44278) + \frac{0.1^3}{6}(2.44278) \approx 1.39968
$$

