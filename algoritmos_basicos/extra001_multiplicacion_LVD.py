# Fuente: https://www.youtube.com/watch?v=MXmQM_Uehtk
# Actividad 1: Como multiplicar dos números naturales sin utilizar el signo de multiplicación

def multiply (a, b):
    result=0
    if abs(a) == a:
        positive_a = True
    else:
        positive_a = False

    for i in range(abs(a)):
        if positive_a:
            result+=b
        else:
            result-=b 
    
    return result

num1 = -5
num2 = -2
print('{} por {} es {}'.format(num1,num2, multiply(num1,num2)))
