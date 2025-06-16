---
layout: single
title: "Código de Python - Método de Multipasos"
date: 2025-06-10
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
permalink: /docs/codigo-python-multipasos/
---

<div class="code-block" markdown="1" style="position: relative;">
  <button class="copy-button">Copiar</button>

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from rich.console import Console
from rich.table import Table


def multipasos_adams_4(f, x0, xf, y0, h):
    num_puntos = int((xf - x0) / h) + 1
    x = np.array([x0], dtype=float)
    y = np.array([y0], dtype=float)

    # Inicialización con RK4
    for _ in range(3):
        x_n, y_n = x[-1], y[-1]
        k1 = f(x_n, y_n)
        k2 = f(x_n + h/2, y_n + h/2 * k1)
        k3 = f(x_n + h/2, y_n + h/2 * k2)
        k4 = f(x_n + h, y_n + h * k3)
        y_next = y_n + h/6 * (k1 + 2*k2 + 2*k3 + k4)
        x = np.append(x, x_n + h)
        y = np.append(y, y_next)

    # Adams-Bashforth / Adams-Moulton
    for i in range(3, num_puntos - 1):
        f0, f1, f2, f3 = f(x[i-3], y[i-3]), f(x[i-2], y[i-2]), f(x[i-1], y[i-1]), f(x[i], y[i])
        xp = x[i] + h
        yp = y[i] + h/24 * (55*f3 - 59*f2 + 37*f1 - 9*f0)
        fp = f(xp, yp)
        yc = y[i] + h/720 * (251*fp + 646*f3 - 264*f2 + 106*f1 - 19*f0)
        x = np.append(x, xp)
        y = np.append(y, yc)

    return pd.DataFrame({"x": x, "y (aproximado)": y})


def f(x, y):
    return x + y - 1  


def imprimir_tabla_rich(df, titulo):
    table = Table(title=titulo)
    for col in df.columns:
        table.add_column(col, justify="center")
    for _, row in df.iterrows():
        table.add_row(f"{row['x']:.2f}", f"{row['y (aproximado)']:.6f}")
    Console().print(table)


def graficar_resultado(df):
    plt.figure(figsize=(8, 5))
    plt.plot(df["x"], df["y (aproximado)"], marker="o", color="blue", linestyle="-")
    plt.title("Solución Aproximada con Adams de 4 Pasos")
    plt.xlabel("x")
    plt.ylabel("y (aproximado)")
    plt.grid(True)
    plt.tight_layout()
    plt.show()


# Parámetros
x0 = 0
xf = 0.8
y0 = 1
h = 0.2

# Ejecutar método y mostrar resultados
resultado_4 = multipasos_adams_4(f, x0, xf, y0, h)
imprimir_tabla_rich(resultado_4, "Método Multipasos de 4 Pasos")
graficar_resultado(resultado_4)

```

</div>

<script src="{{ '/assets/js/copy-code.js' | relative_url }}" defer></script>