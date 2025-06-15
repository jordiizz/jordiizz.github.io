---
layout: single
title: "Método de Euler para ecuaciones diferenciales."
date: 2025-04-28
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
permalink: /docs/metodo-de-euler
---

¡Bienvenidos al Método de Euler!
{% include mathjax.html %}


## Método de Euler

El método de Euler es el más simple de los métodos numéricos de resolución de ecuaciones diferenciales. Se obtiene considerando el desarrollo de Taylor a primer orden en h:

$$y(t_0 + h) ≈ y(t_0)+ hy'(t_0)$$

A partir de la ecuación diferencial $$y(t_0) = f(t_0, y_0)$$, obtenemos

$$y_1 = y_0 + hf(t_0, y_0)$$

Análogamente, utilizando $$y_1$$ como condición inicial, tenemos en el segundo paso

$$y_2 = y_1 + hf(t_1, y_1)$$

y, en general, el algoritmo recursivo viene dado por

$$y_0 = y(t_0)$$ 
$$y_{n+1} = y_n + hf(t_n, y_n),                   n = 1, 2,...$$

Lógicamente, el error aumentará a medida que aumente el número de iteraciones. El valor práctico de este método es limitado, aunque resulta útil para obtener al menos una primera aproximación de la solución, para un valor de h suficientemente pequeño.

## Ejemplo 1.1
Resolver: 

$$\frac{dt}{dy} = t - y$$,     $$y(0)=1$$

en el intervalo $$t∈[0,1]$$ con $$h=0.5$$.

Respuesta:

- $$T_0=0, y_0=1$$
- $$h=0.5$$, entonces los puntos son $$t_1=0.5, t_2=1.0$$.

Aplicar la fórmula de Euler

1. Primera iteración (n=0):

$$f(t_0,y_0)=t_0−y_0=0−1=−1$$

$$y_1=y_0+h⋅f(t_0,y_0)=1+0.5⋅(−1)=0.5$$

2. Segunda iteración (n=1):

$$f(t_1,y_1)=t_1−y_1=0.5−0.5=0$$

$$y_2=y_1+h⋅f(t_1,y_1)=0.5+0.5⋅0=0.5$$


| $$t_n$$ | $$y_n$$(Aprox.)| 
|---------|----------------|
|  0.0    |    1.0         | 
|  0.5    |    0.5         | 
|  1.0    |    0.5         | 


La solución analítica es $$y(t)=t-1+2e^-t$$     En $$t=1$$:
$$
y(1)=1-1+2e^-1 ≈ 0.7358
$$
El error en $$t = 1 es ∣0.5-0.7358∣=0.2358$$, debido a que $$h=0.5$$ es grande.


## Euler Mejorado

Su idea es utilizar en $$(t_n, y_n)$$ un valor promedio de la derivada en ese punto $$y$$ en $$(t_{n+1}, y_{n+1})$$. Como no se conoce el valor $$y{_n+1}$$, se calcula con el método de Euler, $$y_{n+1}=y_n+hf(t_n, y_n)$$. El nuevo valor de $$y_{n + 1}$$ será:

$$
y_{n+1}=y_n+\frac{h}{2}(f(t_n, y_n)+f(t_{n+1}, y'_{n+1}))
$$

El método se conoce como predictor-corrector. El error es O($$h^3$$). Fue formulado por Karl Heun, Alemania, 1859-1929.

Resolviendo el mismo ejercicio anterior: 

## Ejemplo 2.1
Resolver:
$$ \frac{dt}{dy}= t - y$$,     $$y(0)=1$$

En el intervalo $$t∈[0,1]$$ con $$h=0.5$$.
 - $$T_0=0, y_0=1$$
 - $$h=0.5$$, entonces los puntos son $$t_1=0.5, t_2=1.0$$.

Iteración 1 (n=0):

Predictor:

$$f(t_0, y_0)= 0 - 1 = -1$$

$$y'_1= y_0+h.f(t_0, y_0) = 1 + 0.5 . (-1) = 0.5$$

Corrector:

$$f(t_1, y_1) = 0.5 - 0.5 = 0$$

$$y_1= y_0 + \frac{h}{2}.[f(t_0, y_0) + f(t_1, y'_1)]$$ 

$$= 1 + \frac{0.5}{2}[-1+0] = 1 - 0.25 = 0.75$$

Iteración 2 (n=1):

Predictor:

$$f(t_1,y_1) = 0.5 - 0.75 = 0.25$$

$$y'_2= y_1 + h .f(t_1, y_1)$$ 

$$= 0.75 + 0.5 . (-0.25) = 0.625$$

Corrector:

$$f(t_2, y'_2) = 1.0 - 0.625 = 0.375$$

$$y_2= y_1+ \frac{h}{2}[f(t_1,y_1) + f(t_2, y_2)]$$

$$= 0.75 +\frac{0.5}{2}[-0.25 + 0.375] = 0.75 + 0.03125 = 0.78$$

| $$t_n$$ | $$y_n$$(Aprox.)| 
|---------|----------------|
|  0.0    |    1.0         | 
|  0.5    |    0.75        | 
|  1.0    |    0.78125     | 
