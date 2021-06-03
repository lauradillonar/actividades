
# Ejercicio 1002: Extraer las vocales minúsculas desde un texto usando la función filter().

"""______________________version 1.joo__________________
frase = 'Python Es Tremendo'
print(frase)

print()

vocales_minusculas = list(filter(lambda c: True if c in 'aeiou' else False, frase))
print(vocales_minusculas)
"""

"""______________________version 2.lvd__________________"""

def extract_vowels(phrase):
    vowel = ['a','e','i','o','u']
    vowels= []
    for char in phrase:
        if char in vowel:
            vowels.append(char)
    return vowels

the_phrase = input('Frase: ')
print(extract_vowels(the_phrase))


