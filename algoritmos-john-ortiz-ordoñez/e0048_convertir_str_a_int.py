#Ejercicio 48: Convertir una cadena d caracteres a entero y real.

string = '3.14'
integer = int(string.split('.')[0])
print(integer)
real = float(string)
print(real)
