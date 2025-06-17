---
layout: single
title: "Método de Runge-Kutta"
permalink: /docs/runge-kutta/
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
---

{% include mathjax.html %}

## Introducción 

Runge-kutta es una familia de métodos que permite encontrar soluciones cercanas para ecuaciones diferenciales, mediante distintas operaciones, que avanzan hacia la solución con un paso h. Este método es aplicable a aquellas Ecuaciones Diferenciales Ordinarias (EDO), diseñado para EDO's de orden uno lineales, que tienen un valor inicial, realmente Runge-Kutta es una familia de métodos numéricos, siendo el de orden cuatro el más famoso, conocido por su eficiencia y por su precisión.

### ¿Por qué usar RK?
Porque es una familia de métodos que nos permiten calcular una solución aproximada sin calcular derivadas de orden elevada, lo que permite mejora de rendimiento y eficiencia computacional.

## ¿Qué es el paso h?
Imagina que estás avanzando por un camino (función solución), y que buscando un objetivo (comportamiento) hacés uso de una brújula (ecuación diferencial) que te dice a dónde ir, si imaginas este camino como puntos en un mapa, digamos que cada que avanzamos un paso o punto en ese camino, h es el tamaño del paso que damos en esa dirección que marca la brújula, luego nos detenemos y usamos la brújula otra vez (cada paso), hasta que llegamos a un camino aproximado. 


## Subtemas
- [Historia RK](/docs/runge-kutta/historia/)
- [RK2](/docs/runge-kutta/rk2/)
- [RK3](/docs/runge-kutta/rk3/)
- [RK4](/docs/runge-kutta/rk4/)
