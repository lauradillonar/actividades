#Ejercicio 22: Crear una subcadena de n caracteres replicada n cantidad de veces

"""____________________version 1.LVD____________________"""

def generate_substring (phrase, amount_char):
    subphrase = ''
    n = amount_char
    try:
        amount_char = int(amount_char)
        valid = True
        if amount_char > 0:
            if len(phrase) < amount_char: 
                amount_char=len(phrase)
            subphrase=phrase[:amount_char] 
            subphrase=subphrase*n
        else:
            print('La cantidad de caracteres debe ser un número mayor a cero.')
            valid = False
    except:
        print('La cantidad de caracteres no es un número válido.')
        valid = False
    return subphrase, valid

# times = 'y'
# times = 20
times = -5
# times = 6
string = 'Hola mundo'
substring, good = generate_substring(string, times)

if good:
    print('La subcadena replicada {} veces es: {}'.format(times,substring))
else:
    print('No se pudo replicar la subcadena.')


"""____________________version 2.JOO____________________

def replicar_subcadena(cadena,n):
    n_caracteres=n
    if n_caracteres > len(cadena):
        n_caracteres = len(cadena)
    subcadena = cadena[:n_caracteres]
    
    resultado = ''
    for i in range(n):
        resultado+=subcadena
    return resultado
"""
