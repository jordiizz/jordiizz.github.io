---
layout: single
title: "Código de Python - Método de Euler y Euler Mejorado"
date: 2025-06-15
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
permalink: /docs/codigo-python-euler/
---

<div class="code-block" markdown="1" style="position: relative;">
  <button class="copy-button">Copiar</button>

```python
import numpy as np
import matplotlib.pyplot as plt

#Definicion del método de Euler
def euler(f, x0, y0, h, x_final):
    n = int((x_final - x0) / h) + 1
    x = np.linspace(x0, x_final, n)
    y = np.zeros(n)
    y[0] = y0
    
    for i in range(n-1):
        y[i+1] = y[i] + h * f(x[i], y[i])
        
    return x, y

#Definicion del método de Euler Mejorado
def eulerMejorado(f, x0, y0, h, x_final):
    n = int((x_final - x0) / h) + 1
    x = np.linspace(x0, x_final, n)
    y = np.zeros(n)
    y[0] = y0
    
    for i in range(n-1):
        y_nplus1 = y[i] + h * f(x[i], y[i])
        y[i+1] = y[i] + h * 0.5 * (f(x[i], y[i]) + f(x[i+1], y_nplus1))
        
    return x, y

#Donde definimos la ecuación diferencial dy/dx
def f(x, y):
    return x + y  

#Colocamos los valores iniciales
x0 = 0
y0 = 1
h = 0.1
x_final = 0.5

#Llamamos a los métodos e imprimimos el valor buscado
x_Euler, y_Euler = euler(f, x0, y0, h, x_final)
x_EulerMejorado, y_EulerMejorado = eulerMejorado(f, x0, y0, h, x_final)
print("Para f(x) en x =", x_final)
print(f"Euler: y({x_final}) = {y_Euler[-1]:.10f}")
print(f"Euler Mejorado: y({x_final}) = {y_EulerMejorado[-1]:.10f}")

#Mostramos gráfica com ambos métodos
plt.figure(figsize=(12, 8))
plt.subplot(2, 1, 1)
plt.plot(x_Euler, y_Euler, 'bo-', label='Método de Euler')
plt.plot(x_EulerMejorado, y_EulerMejorado, 'ro--', label='Euler Mejorado')
plt.xlabel('x')
plt.ylabel('y(x)')
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()

```

</div>

<script src="{{ '/assets/js/copy-code.js' | relative_url }}" defer></script>