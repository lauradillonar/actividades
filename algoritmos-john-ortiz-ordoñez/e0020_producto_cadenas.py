#Ejercicio 20: Emular el funcionamiento del producto de cadenas de caracteres

def product(word, times):
    result = ''
    for i in range(times):
        result += word
    return result

print(product ('hola', 4))
