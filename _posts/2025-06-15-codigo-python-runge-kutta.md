---
layout: single
title: "Código de Python - Método de Runge-Kutta"
date: 2025-06-15
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
permalink: /docs/codigo-python-runge-kutta/
---

## Sintáxis del Código

<div class="code-block" markdown="1" style="position: relative;">
  <button class="copy-button">Copiar</button>

```python
import numpy as np
import matplotlib.pyplot as plt
from rich.table import Table
from rich.console import Console

def rk1(x_i, y_i, h, f):
    k1 = h * f(x_i, y_i)
    return y_i + k1

def rk2(x_i, y_i, h, f):
    k1 = h * f(x_i, y_i)
    k2 = h * f(x_i + h, y_i + k1)
    return y_i + 0.5 * (k1 + k2)

def rk3(x_i, y_i, h, f):
    k1 = h * f(x_i, y_i)
    k2 = h * f(x_i + h/2, y_i + k1/2)
    k3 = h * f(x_i + h, y_i - k1 + 2*k2)
    return y_i + (1/6) * (k1 + 4*k2 + k3)

def rk4(x_i, y_i, h, f):
    k1 = h * f(x_i, y_i)
    k2 = h * f(x_i + h/2, y_i + k1/2)
    k3 = h * f(x_i + h/2, y_i + k2/2)
    k4 = h * f(x_i + h, y_i + k3)
    return y_i + (1/6) * (k1 + 2*k2 + 2*k3 + k4)

rks = {1: rk1, 2: rk2, 3: rk3, 4: rk4}

def runge_kutta_method(f, x0, y0, h, steps, order=4):
    if order not in rks:
        raise ValueError(f"Orden inválido: {order}. Solo se admite 1, 2, 3 o 4.")
    
    xs = [x0]
    ys = [y0]
    
    for _ in range(steps):
        y1 = rks[order](x0, y0, h, f)
        x1 = x0 + h
        xs.append(x1)
        ys.append(y1)
        x0, y0 = x1, y1
        
    return xs, ys

def graficar(xs, ys, titulo="Método de Runge-Kutta", color="blue"):
    plt.plot(xs, ys, marker='o', linestyle='-', color=color)
    plt.title(titulo)
    plt.xlabel("x")
    plt.ylabel("y")
    plt.grid(True)
    plt.show()
    #plt.savefig("rk_output.png")
    #print("[+] Gráfica guardada en: rk_output.png")

def tabla_resultados(xs, ys, metodo="RK"):
    console = Console()
    table = Table(title=f"Método de {metodo}")

    table.add_column("i", justify="center")
    table.add_column("Xn", justify="center")
    table.add_column("Yn", justify="center", style="green")

    for i in range(len(xs)):
        table.add_row(f"{i}", f"{xs[i]:.2f}", f"{ys[i]:.5f}")

    console.print(table)

def demo_runge_kutta():
    f = lambda x, y: x + y

    x0 = 0
    y0 = 1
    h = 0.1
    steps = 20
    order = 2  

    xs, ys = runge_kutta_method(f, x0, y0, h, steps, order)
    tabla_resultados(xs, ys, metodo=f"Runge-Kutta Orden {order}")
    graficar(xs, ys, titulo=f"Runge-Kutta Orden {order}")

if __name__ == "__main__":
    demo_runge_kutta()
```

</div>

<script src="{{ '/assets/js/copy-code.js' | relative_url }}" defer></script>

## Código Ejecutable con Jupyter Notebook y Google Colab

[Codigo de Runge-Kutta Ejecutable con Google Colab](https://colab.research.google.com/drive/1P9V9St3v2wxEciLTkC-CB2YTo_c3GZIW?usp=sharing "Código de Runge-Kutta")