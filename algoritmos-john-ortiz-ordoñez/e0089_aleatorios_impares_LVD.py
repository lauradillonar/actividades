#Ejercicio 89: Generar n números impares aleatorios y verificar toda la lista

#______________________versión 1.lvd______________________

from random import randint

def generate_odd(n=5):
    odd = []
    count = 0 

    while count < n:
        number = randint(1,10)
        
        if number % 2 == 1:
            odd.append(number)
            count+=1
    return odd

def check_odd(numbers):
    if all(x % 2 == 1 for x in numbers):
        return True
    else: 
        return False

the_list = generate_odd()
print(the_list)

print('Son todos impares:', check_odd(the_list))

