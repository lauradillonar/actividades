# Ejercicio 21: Generar los n primeros números pares positivos
""" ______________________version 1.0______________________
def positive_pairs(n):
    pairs=''
    for i in range(0,2*n,2):
        pairs+=str(i)

    return pairs

print(positive_pairs(4))
"""

""" ______________________version 2.0______________________
def generate_numbers_pairs(n=100):
    pairs=[]
    counter=0
    number=0

    while counter < n:
        if number % 2 == 0:
            pairs.append(number)
            counter+=1
        number+=1
    return pairs

n=int(input('Escriba la cantidad de números pares positivos a generar: '))

if n>0: 
    pairs=generate_numbers_pairs(n)
    print(pairs)
    print('Cantidad de pares:', len(pairs))
else:
    print('El número debe ser positivo.')
"""

""" ______________________version 3.0______________________"""

def positive_pairs(n=10):
    pairs=[]
    for i in range(0,2*n,2):
        pairs.append(i)
    return pairs

# print(positive_pairs(5))
# print(positive_pairs())

def enter_amount():
    end = False
    amount = input('¿Cuántos números positivos pares desea generar? (T) para Terminar:')
    while not end:
        try:
            amount = int(amount)
            if amount > 0:
                valid = True
                end = True
            else:
                valid = False
                print('No ingresó un número entero mayor a cero.')
                amount = input('¿Cuántos números positivos pares desea generar? (T) para Terminar:')
        except:
            valid = False
            if amount.upper() == 'T':
                print('Fin')
                end = True
            else:
                print('No ingresó un número válido.')
                amount = input('¿Cuántos números positivos pares desea generar? (T) para Terminar:')
    return amount, valid

n, good = enter_amount()
if good: 
    print(positive_pairs(n))
    print('Cantidad de números pares:', n)
else:
    print('No se pudo generar los números pares positivos.')
        
                  
            
