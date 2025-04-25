# H1 Runge-Kutta para Ecuaciones Diferenciales con valor inicial
!Bienvenido al Método de Runge-Kutta!

# H2 Qué es el método de Runge-Kutta
Es un método aproximado que permite encontrar soluciones cercanas para ecuaciones diferenciales, mediante distintas operaciones, que avanzan hacia la solución con un paso h. Este método es aplicable a aquellas Ecuaciones Diferenciales Ordinarias (EDO), diseñado para EDO's de orden uno lineales, que tienen un valor inicial, realmente Runge-Kutta es una familia de métodos numéricos, siendo el de orden cuatro el más famoso, conocido por su eficiencia y por su precisión.

# H3 ¿Por qué usar RK?
Porque es una familia de métodos que nos permiten calcular una solución aproximada sin calcular derivadas de orden elevada, lo que permite mejora de rendimiento y eficiencia computacional.


# H2 ¿Qué es el paso h?
Imagina que estás avanzando por un camino (función solución), y que buscando un objetivo (comportamiento) hacés uso de una brújula (ecuación diferencial) que te dice a dónde ir, si imaginas este camino como puntos en un mapa, digamos que cada que avanzamos un paso o punto en ese camino, h es el tamaño del paso que damos en esa dirección que marca la brújula, luego nos detenemos y usamos la brújula otra vez (cada paso), hasta que llegamos a un camino aproximado. 

Definición del paso h.

# H2 Historia de Runge-Kutta

# H2 Runge-Kutta de orden cuatro
Es un método que se basa en el avance(iteraciones):
Dada una EDO, de orden uno lineal:

    dy/dx = f(x, y),   con y(x0) = y0
    

    k1 = f(x_n, y_n)
    k2 = f(x_n + h/2, y_n + h/2 * k1)
    k3 = f(x_n + h/2, y_n + h/2 * k2)
    k4 = f(x_n + h,   y_n + h * k3)

Entonces:
    y_{n+1} = y_n + (h/6) * (k1 + 2*k2 + 2*k3 + k4)
Donde:
    x0 = Valor inicial de x, de la condición inicial
    y0 = Valor inicial de y, de la condición inicial
    RK4 depende de un criterio de para estructural, como criterio de parada tenemos un valor xf, en la última iteración que deseamos encontrar de la EDO(el último punto del mapa que descubriremos)
    xf = Valor de x, en la última iteración que deseamos encontrar
    x_{n+1} = Para cada iteración será x_n+1 = x_i + h

# H2 Ejemplo:
Usa el método de Runge-Kutta con h = 0.1 para obtener una aproximación y(1.5), para la solución de dy/dx = 2xy.
y(1) = 1

Datos: 
    x0 = 1
    y0 = 1
    xf = 1.5
    f(x, y) = 2xy

RK4
Primera iteración
    k1 = f(1, 1) = 2 * 1 *1 = 2
    k2 = f(1 + 0.1 / 2, 1 + 0.1 / 2 * 2) = 2.31
    k3 = f(1 + 0.1 / 2, 1 + 0.1 / 2 * 2.31) = 2.34255
    k4 = f(1 + 0.1, 1 + 0.1 * 2.34255) = 2.715361

Con estos valores:
    x1 = x0 + h
    x1 = 1 + 0.1
    y1 =  1 + (0.1/6) * (2 + 2 * 2.31 + 2 * 2.34255 + 2.715361) = 1.23367435

Continuamos así hasta que x_n alcance el valor de 1.5, entonces detenemos las iteraciones


