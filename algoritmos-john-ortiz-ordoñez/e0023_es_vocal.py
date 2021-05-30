# Ejercicio 23: Comprobar si un caracter dado es una vocal

"""____________________version 1.lvd____________________"""
def is_vowel(letter):
    it_is = False;
    if len(letter) == 1:
        vowels = ['A','E','I','O','U'] 
        for i in range(0,5):
            if letter.upper() == vowels[i]:
                it_is = True
    else:
        print('No es una letra.')
    return it_is

#l=''
#l='y'
l='i'
if is_vowel(l):
    print('{} es una vocal.'.format(l))
else:
    print('{} no es una vocal'. format(l))

"""____________________version 2.joo____________________
def es_vocal(c):
    if len(c) == 1:
        vocales = 'aeiou'
        c=c.lower()
        return c in vocales
    else:
        return False

print(es_vocal('i')
print(es_vocal('I')
print(es_vocal('z'))
"""
