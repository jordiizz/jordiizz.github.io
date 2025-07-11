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
        "excerpt":"¡Bienvenido al Método de Runge-Kutta! Introducción Runge-kutta es una familia de métodos que permite encontrar soluciones cercanas para ecuaciones diferenciales, mediante distintas operaciones, que avanzan hacia la solución con un paso h. Este método es aplicable a aquellas Ecuaciones Diferenciales Ordinarias (EDO), diseñado para EDO’s de orden uno lineales, que...","categories": [],
        "tags": [],
        "url": "/docs/metodo-de-runge-kutta/",
        "teaser": null
      },{
        "title": "Historia Runge-Kutta",
        "excerpt":"Historia del Método de Runge-Kutta La familia de métodos de Runge-Kutta, que es ampliamente utilizada hoy en día para la solución numérica de ecuaciones diferenciales ordinarias (EDO), tiene su origen en el trabajo de dos matemáticos alemanes: Carl Runge y Martin Wilhelm Kutta. Su desarrollo permite obtener soluciones aproximadas con...","categories": [],
        "tags": [],
        "url": "/docs/runge-kutta/historia/",
        "teaser": null
      },{
        "title": "RK4 ",
        "excerpt":"Fórmulas del método RK4 Dado un paso ( h ), el valor de ( y ) en el siguiente punto se calcula así: \\[\\begin{aligned} k_1 &amp;= f(x_n, y_n) \\\\ k_2 &amp;= f\\left(x_n + \\frac{h}{2},\\ y_n + \\frac{h}{2}k_1\\right) \\\\ k_3 &amp;= f\\left(x_n + \\frac{h}{2},\\ y_n + \\frac{h}{2}k_2\\right) \\\\ k_4 &amp;= f(x_n...","categories": [],
        "tags": [],
        "url": "/docs/runge-kutta/rk4/",
        "teaser": null
      },{
        "title": "RK2",
        "excerpt":"Fórmulas del método RK2 Dado un paso ( h ), el valor de ( y ) en el siguiente punto se calcula así: \\[\\begin{aligned} k_1 &amp;= f(x_n, y_n) \\\\\\\\ k_2 &amp;= f\\left(x_n + h,\\ y_n + h \\cdot k_1\\right) \\\\\\\\ y_{n+1} &amp;= y_n + \\frac{h}{2}(k_1 + k_2) \\end{aligned}\\] También existe...","categories": [],
        "tags": [],
        "url": "/docs/runge-kutta/rk2/",
        "teaser": null
      },{
        "title": "RK3",
        "excerpt":"Fórmulas del método RK3 Dado un paso ( h ), el valor de ( y ) en el siguiente punto se calcula con: \\[\\begin{aligned} k_1 &amp;= f(x_n, y_n) \\\\\\\\ k_2 &amp;= f\\left(x_n + \\frac{h}{2},\\ y_n + \\frac{h}{2} \\cdot k_1\\right) \\\\\\\\ k_3 &amp;= f\\left(x_n + h,\\ y_n - h \\cdot k_1...","categories": [],
        "tags": [],
        "url": "/docs/runge-kutta/rk3/",
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
        "excerpt":"Sintáxis del Código Copiar #!/usr/bin/env python3 import sympy as sp import matplotlib.pyplot as plt from rich.table import Table from rich.console import Console class TaylorMethod: def calc_derivatives(self, function, x, y, order): derivatives = [function] for _ in range(order - 1 ): derivative_function = sp.diff(derivatives[-1], x) + sp.diff(derivatives[-1], y) * function derivatives.append(derivative_function)...","categories": [],
        "tags": [],
        "url": "/docs/codigo-python-taylor/",
        "teaser": null
      },{
        "title": "Código de Python - Método de Multipasos",
        "excerpt":"Sintáxis del Código Copiar import numpy as np import pandas as pd import matplotlib.pyplot as plt from rich.console import Console from rich.table import Table def multipasos_adams_4(f, x0, xf, y0, h): num_puntos = int((xf - x0) / h) + 1 x = np.array([x0], dtype=float) y = np.array([y0], dtype=float) # Inicialización con...","categories": [],
        "tags": [],
        "url": "/docs/codigo-python-multipasos/",
        "teaser": null
      },{
        "title": "Código de Python - Método de Euler y Euler Mejorado",
        "excerpt":"Sintáxis del Código Copiar import numpy as np import matplotlib.pyplot as plt #Definicion del método de Euler def euler(f, x0, y0, h, x_final): n = int((x_final - x0) / h) + 1 x = np.linspace(x0, x_final, n) y = np.zeros(n) y[0] = y0 for i in range(n-1): y[i+1] = y[i]...","categories": [],
        "tags": [],
        "url": "/docs/codigo-python-euler/",
        "teaser": null
      },{
        "title": "Código de Python - Método de Runge-Kutta",
        "excerpt":"Sintáxis del Código Copiar import numpy as np import matplotlib.pyplot as plt from rich.table import Table from rich.console import Console def rk1(x_i, y_i, h, f): k1 = h * f(x_i, y_i) return y_i + k1 def rk2(x_i, y_i, h, f): k1 = h * f(x_i, y_i) k2 = h *...","categories": [],
        "tags": [],
        "url": "/docs/codigo-python-runge-kutta/",
        "teaser": null
      },{
        "title": "Ejercicio con Método de Euler (h = 0.1)",
        "excerpt":"Ejercicio 9: Método de Euler (3 iteraciones, (h = 0.1)) Dada la EDO: \\[y' = x + y, \\quad y(0) = 1\\] El método de Euler de primer orden utiliza la fórmula \\[y_{n+1} = y_n + h\\,f(x_n, y_n),\\] donde \\[f(x,y) = x + y.\\] Paso 0 → 1 ((x =...","categories": [],
        "tags": [],
        "url": "/docs/ejercicios-de-euler/",
        "teaser": null
      },{
        "title": "Ejercicio con Método de Multipasos (Adams–Bashforth de 4 pasos (h = 0.2))",
        "excerpt":"Ejercicio 30: Adams–Bashforth de 4 pasos (h = 0.2) Dada la EDO: \\[y' = y - x^2 + 1, \\qquad y(0)=0.5\\] Nuestro objetivo es aproximar (y(0.8)) empleando el método explícito de Adams–Bashforth de cuatro pasos (AB‑4) con paso (h = 0.2). Para iniciar el esquema multipasos se requieren cuatro valores...","categories": [],
        "tags": [],
        "url": "/docs/ejercicios-de-multipasos/",
        "teaser": null
      },{
        "title": "Ejercicio con Método de Runge–Kutta de orden 4 (h = 0.1)",
        "excerpt":"Ejercicio 19: Runge–Kutta de orden 4 (3 iteraciones, (h = 0.1)) Dada la EDO: \\[y' = y\\,\\tan(x), \\quad y(0)=1\\] El esquema clásico de RK4 es \\[\\begin{aligned} k_1 &amp;= f(x_n, y_n), \\\\ k_2 &amp;= f\\!\\left(x_n + \\tfrac{h}{2},\\; y_n + \\tfrac{h}{2}k_1\\right),\\\\ k_3 &amp;= f\\!\\left(x_n + \\tfrac{h}{2},\\; y_n + \\tfrac{h}{2}k_2\\right),\\\\ k_4 &amp;= f\\!\\left(x_n...","categories": [],
        "tags": [],
        "url": "/docs/ejercicios-de-runge-kutta/",
        "teaser": null
      },{
        "title": "Ejercicio con método de Taylor de orden 2",
        "excerpt":"Ejemplo 3.3: Método de Taylor de orden 2 (2 iteraciones, h = 0.1) Dada la EDO: \\[y' = x^2 - y, \\quad y(0) = 1\\] Aplicando la serie de Taylor: \\[y_{n+1} = y_n + h y'_n + \\frac{h^2}{2!} y''_n\\] Se tiene: \\[f(x, y) = x^2 - y\\] Derivadas parciales: \\[f_x...","categories": [],
        "tags": [],
        "url": "/docs/ejercicios-de-taylor/",
        "teaser": null
      },{
        "title": "Videos del Método de Euler y Euler Mejorado para ecuaciones diferenciales.",
        "excerpt":"Ejercicio 1     Ejercicio 2     Ejercicio 3     Explicación del código de Python     ","categories": [],
        "tags": [],
        "url": "/docs/video-de-euler/",
        "teaser": null
      },{
        "title": "Videos del Método de Multipasos para ecuaciones diferenciales.",
        "excerpt":"Ejercicio 1     Ejercicio 2     Ejercicio 3     Explicación del código de Python     ","categories": [],
        "tags": [],
        "url": "/docs/video-de-multipasos/",
        "teaser": null
      },{
        "title": "Videos del Método de Runge-Kutta para ecuaciones diferenciales.",
        "excerpt":"Ejercicio    ","categories": [],
        "tags": [],
        "url": "/docs/video-de-runge-kutta/",
        "teaser": null
      }]
