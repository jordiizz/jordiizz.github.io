---
layout: single
title: "Código de Python - Método de Taylor"
date: 2025-06-05
toc: true
toc_sticky: true
sidebar:
  nav: "docs"
permalink: /docs/codigo-python-taylor/
---

## Sintáxis del Código

<div class="code-block" markdown="1" style="position: relative;">
  <button class="copy-button">Copiar</button>

```python
#!/usr/bin/env python3

import sympy as sp
import matplotlib.pyplot as plt
from rich.table import Table
from rich.console import Console

class TaylorMethod:
    
    def calc_derivatives(self, function, x, y, order):
        
        derivatives = [function]
        
        for _ in range(order - 1 ):
            derivative_function = sp.diff(derivatives[-1], x) + sp.diff(derivatives[-1], y) * function 
            derivatives.append(derivative_function)
        
        return derivatives
    
    def taylor_method(self, function_expresion, x0, y0, h, steps, order):
        
        x, y = sp.symbols('x y')
        function = function_expresion
        
        derivatives = self.calc_derivatives(function, x, y, order)
        
        lambda_derivatives = [sp.lambdify((x, y), d) for d in derivatives]
        
        xs = [x0]
        ys = [y0]
        
        for _ in range(steps):
            taylor_sum = 0
            for n in range(order):
                taylor_sum += (h**(n+1) / sp.factorial(n+1)) * lambda_derivatives[n](x0,y0)
            
            x1 = x0 + h
            y1 = y0 + taylor_sum
            
            xs.append(x1)
            ys.append(y1)
            
            x0, y0 = x1, y1
            
        return xs, ys

    def graficar(self, xs, ys, titulo="Método de Taylor", color='blue'):
        plt.plot(xs, ys, marker='o', linestyle='-', color=color)
        plt.title(titulo)
        plt.xlabel("x")
        plt.ylabel("y")
        plt.grid(True)
        plt.show()

def demo_taylor_method():
    
    metodo = TaylorMethod()
    x, y = sp.symbols('x y')
    f_expr = x + y

    x0 = 0
    y0 = 1
    h = 0.1
    steps = 3
    order = 3
    x_values, y_values = metodo.taylor_method(f_expr, x0, y0, h, steps, order)
    
    # Generando tabla.
    
    console = Console()
    table = Table(title="Metódo de Taylo para ED")
    
    table.add_column("i", justify="center", no_wrap=True)
    table.add_column("Xn", justify="center")
    table.add_column("Yn", justify="center", style="green")
    
    
    for i in range(len(x_values)):
        
        table.add_row(f"{i}", f"{x_values[i]:.1f}", f"{y_values[i]:.5f}")
        
    console.print(table)
    
    metodo.graficar(x_values, y_values)

if __name__ == "__main__":

    demo_taylor_method()

```
</div>

<script src="{{ '/assets/js/copy-code.js' | relative_url }}" defer></script>

## Código Ejecutable con Jupyter Notebook y Google Colab

[Codigo de Taylor Ejecutable con Google Colab](https://colab.research.google.com/drive/1ZniBPoj1DP4Pm2mWmolrLk_1E7kK_ag0?usp=sharing "Código de Taylor")

