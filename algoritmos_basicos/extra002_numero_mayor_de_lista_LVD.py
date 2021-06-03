# Fuente: https://www.youtube.com/watch?v=MXmQM_Uehtk
# Actividad 2: Obtener el número mayor en un arreglo iterando una sola vez

from random import randint

def get_bigger(list):
    if len(list) > 0:
        bigger = list[0]

        for x in list:
            if bigger < x:
                bigger=x 
    return bigger

the_list = [randint(0,100) for i in range(10)]
print(the_list)
print('El mayor es:', get_bigger(the_list))
