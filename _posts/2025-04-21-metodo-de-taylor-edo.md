---
layout: single
title: "Método de Taylor para ecuaciones diferenciales"
date: 2025-04-21
categories: blog
---

¡Bienvenidos al Método de Taylor!

Consiste en calcular las derivadas sucesivas de la ecuación diferencial dada, evaluando las derivadas en el punto inicial x₀ y reemplazando el resultado en la serie de Taylor.

La solución por el método de Taylor viene dada por:

y(x) = y(x₀) + (x - x₀)y₁(x₀) + ((x - x₀)² / 2!) y₂(x₀) + ((x - x₀)³ / 3!) y₃(x₀) + ... + ((x - x₀)ⁿ / n!) yₙ(x₀)

En forma práctica, si queremos calcular la solución en pasos h (pasos de integración), usamos:

y(x₀ + h) = y(x₀) + h y'(x₀) + (h² / 2!) y''(x₀) + (h³ / 3!) y'''(x₀) + ... + (hⁿ / n!) y⁽ⁿ⁾(x₀)

Donde:

- h: Cantidad que se aumentará en cada paso o iteración.
- y⁽ⁿ⁾(x₀): Derivadas según el orden que se decida. Cuanto más alto el orden, mayor será la precisión.

Los coeficientes pueden calcularse así:

y(x₀) = y₀  
y'(x₀) = f(x₀, y₀) = dy/dx  
y''(x₀) = ∂f/∂x + ∂f/∂y · dy/dx  
y⁽ⁿ⁾(x₀) = ∂(y⁽ⁿ⁻¹⁾)/∂x + ∂(y⁽ⁿ⁻¹⁾)/∂y · dy/dx

---

## Ejemplo 1.1: Método de Taylor de orden 1 y 2

Dada la EDO:

y' = y - x² + 1

### Orden 1

Aplicando la serie de Taylor:

yₙ₊₁ = yₙ + h y'ₙ = yₙ + h f(x, y)

Sustituyendo f(x, y):

yₙ₊₁ = yₙ + h (yₙ - x² + 1)

### Orden 2

El método de Taylor de orden 2 es:

yₙ₊₁ = yₙ + h y'ₙ + (h² / 2!) y''ₙ

Se tiene:

f(x, y) = y' = y - x² + 1

Derivadas parciales:

∂f/∂x = -2x  
∂f/∂y = 1

Entonces:

y'' = -2x + (y - x² + 1) = y - x² - 2x + 1

Y el método queda como:

yₙ₊₁ = yₙ + h(yₙ - x² + 1) + (h² / 2)(yₙ - x² - 2x + 1)

---

## Ejemplo 2.2: Método de Taylor de orden 3 (3 iteraciones, h = 0.1)

Dada:

y' = x + y,   y(0) = 1

La serie de Taylor es:

yₙ₊₁ = yₙ + h y'ₙ + (h² / 2!) y''ₙ + (h³ / 3!) y'''ₙ

### Derivadas

y' = x + y  
∂f/∂x = 1  
∂f/∂y = 1

Entonces:

y'' = 1 + (x + y)  
y''' = 1 + (x + y)

### Paso 0 → 1 (x = 0 a x = 0.1)

x₀ = 0, y₀ = 1  
y' = 1  
y'' = 2  
y''' = 2

y₁ = 1 + 0.1(1) + (0.1² / 2)(2) + (0.1³ / 6)(2) = 1.11033

### Paso 1 → 2 (x = 0.1 a x = 0.2)

x₁ = 0.1, y₁ = 1.11033  
y' = 1.21033  
y'' = 2.21033  
y''' = 2.21033

y₂ = 1.11033 + 0.1(1.21033) + (0.1² / 2)(2.21033) + (0.1³ / 6)(2.21033) ≈ 1.24278

### Paso 2 → 3 (x = 0.2 a x = 0.3)

x₂ = 0.2, y₂ = 1.24278  
y' = 1.44278  
y'' = 2.44278  
y''' = 2.44278

y₃ = 1.24278 + 0.1(1.44278) + (0.1² / 2)(2.44278) + (0.1³ / 6)(2.44278) ≈ 1.39968


