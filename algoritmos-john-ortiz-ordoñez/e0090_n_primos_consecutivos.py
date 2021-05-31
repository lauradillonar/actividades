#Ejercicio: Generar n cantidad de números primos consecutivos

#_____________version 1.lvd_____________

def generate_prime(n=5):
    numbers = []
    count = 0
    num=2
    
    while count < n:
        is_prime = False
        
        if all (num % x != 0 for x in range(2,int((num+1)/2))):
            is_prime=True
        
        if is_prime:
            numbers.append(num)
            count+=1

        num+=1

    return numbers

print(generate_prime(10))


"""_____________version 2.joo_____________

def generar_primo():
    numero = 2

    yield numero

    while True:
        temp = numero
        while True:
            temp += 1
            contador = 1
            contador_divisores = 0

            while contador <= temp:
                if temp % contador == 0:
                    contador_divisores += 1
                
                if contador_divisores > 2:
                    break
                
                contador += 1
            
            if contador_divisores == 2:
                yield temp

g = generar_primo()

primos = [next(g) for _ in range(20)]

print(primos)

"""