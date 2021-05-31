# Ejercicio 92: Filtrar números por medio de la función filter.

"""_____________________version 1.joo_____________________
numeros = [i for i in range(10)]

print(numeros)

filtro_impares = lambda x: x % 2 == 1

impares = filter(filtro_impares, numeros)

print(list(impares))

"""
"""_____________________version 2.lvd_____________________"""

numbers = [n for n in range(20)]
print(numbers)

odd=[]
for i in numbers:
    if i % 2 == 1:
        odd.append(i)
print (odd)
