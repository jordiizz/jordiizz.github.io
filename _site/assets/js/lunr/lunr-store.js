var store = [{
        "title": "Método de Taylor para ecuaciones diferenciales.",
        "excerpt":"¡Bienvenidos al Método de Taylor! Consiste en calcular las derivadas sucesivas de la ecuación diferencial dada, evaluando las derivadas en el punto inicial \\(x_0\\) y reemplazando el resultado en la serie de Taylor. La solución por el método de Taylor viene dada por: \\[y(x) = y(x_0) + (x - x_0)y^{(1)}(x_0)...","categories": [],
        "tags": [],
        "url": "/docs/metodo-de-taylor/",
        "teaser": null
      },{
        "title": "Métodos Multipasos para Ecuaciones Diferenciales",
        "excerpt":"¡Bienvenidos al Método Multipasos! Método Multipasos Los métodos de un paso como Runge-Kutta calculan cada punto de la solución de una E.D.O. a una distancia \\(h\\) utilizando la información del punto anterior. Los métodos de pasos múltiples son fórmulas que utilizan varios puntos calculados y disponibles para calcular la solución...","categories": [],
        "tags": [],
        "url": "/docs/metodo-de-multipasos/",
        "teaser": null
      },{
        "title": "Método Runge-Kutta para Ecuaciones diferenciales",
        "excerpt":"!Bienvenido al Método de Runge-Kutta! Runge-Kutta para Ecuaciones Diferenciales con valor inicial Qué es el método de Runge-Kutta Es un método aproximado que permite encontrar soluciones cercanas para ecuaciones diferenciales, mediante distintas operaciones, que avanzan hacia la solución con un paso h. Este método es aplicable a aquellas Ecuaciones Diferenciales...","categories": [],
        "tags": [],
        "url": "/docs/metodo-de-runge-kutta/",
        "teaser": null
      },{
        "title": "Método de Euler para ecuaciones diferenciales.",
        "excerpt":"¡Bienvenidos al Método de Euler! Método de Euler El método de Euler es el más simple de los métodos numéricos de resolución de ecuaciones diferenciales. Se obtiene considerando el desarrollo de Taylor a primer orden en h: \\[y(t_0 + h) ≈ y(t_0)+ hy'(t_0)\\] A partir de la ecuación diferencial \\(y(t_0)...","categories": [],
        "tags": [],
        "url": "/docs/metodo-de-euler/",
        "teaser": null
      },{
        "title": "Videos del Método de Taylor para ecuaciones diferenciales.",
        "excerpt":"Ejercicio 1     Ejercicio 2     Ejercicio 3     Explicación del código de Python     ","categories": [],
        "tags": [],
        "url": "/docs/video-de-taylor/",
        "teaser": null
      },{
        "title": "Código de Python - Método de Taylor",
        "excerpt":"Copiar #!/usr/bin/env python3 import sympy as sp import matplotlib.pyplot as plt from rich.table import Table from rich.console import Console class TaylorMethod: def calc_derivatives(self, function, x, y, order): derivatives = [function] for _ in range(order - 1 ): derivative_function = sp.diff(derivatives[-1], x) + sp.diff(derivatives[-1], y) * function derivatives.append(derivative_function) return derivatives def...","categories": [],
        "tags": [],
        "url": "/docs/codigo-python-taylor/",
        "teaser": null
      },{
        "title": "Código de Python - Método de Multipasos",
        "excerpt":"Copiar import numpy as np import pandas as pd import matplotlib.pyplot as plt from rich.console import Console from rich.table import Table def multipasos_adams_4(f, x0, xf, y0, h): num_puntos = int((xf - x0) / h) + 1 x = np.array([x0], dtype=float) y = np.array([y0], dtype=float) # Inicialización con RK4 for _...","categories": [],
        "tags": [],
        "url": "/docs/codigo-python-multipasos/",
        "teaser": null
      },{
        "title": "Código de Python - Método de Euler y Euler Mejorado",
        "excerpt":"Copiar import numpy as np import matplotlib.pyplot as plt #Definicion del método de Euler def euler(f, x0, y0, h, x_final): n = int((x_final - x0) / h) + 1 x = np.linspace(x0, x_final, n) y = np.zeros(n) y[0] = y0 for i in range(n-1): y[i+1] = y[i] + h *...","categories": [],
        "tags": [],
        "url": "/docs/codigo-python-euler/",
        "teaser": null
      },{
        "title": "Código de Python - Método de Runge-Kutta",
        "excerpt":"Copiar import numpy as np class RungeKutta: def rk1(x_i, y_i, step, main_function): k1 = step * main_function(x_i, y_i) return y_i + k1 def rk2(x_i, y_i, step, main_function): k1 = step * main_function(x_i, y_i) k2 = step * main_function(x_i + step, y_i + k1) return y_i + 0.5 * (k1 +...","categories": [],
        "tags": [],
        "url": "/docs/codigo-python-runge-kutta/",
        "teaser": null
      }]
