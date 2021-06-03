# actividad 1: interpretar un código
# actividad 2: elegir un ejercicio a resolver: palíndormos
# actividad 3: POO con qué entidades modelaría un problema
# actividad 4: cajero automático. Cómo entregaría el cambio.
# Ingresa el billete y paga un monto. Devuelve cambio. 
# Ver los distintos valores de billetes e ir descontando. 
# Ver las combinaciones de billetes que se puede devolver.

def pay_back(total, pay):
    amounts_to_pay = [0,0,0,0,0,0,0,0,0]

    if total <= pay: 
        to_pay = int(pay-total)
        i = 0
        while to_pay > 0:
            aux = to_pay // amounts[i]
            if aux > 0:
                to_pay = to_pay - aux * amounts[i]
                amounts_to_pay[i]=aux
            else: 
                i+=1
    else:
        print('Pago insuficiente.')
    return amounts_to_pay

amounts = [500,200,100,50,20,10,5,2,1]
total_to_pay = 345
# pay_with = 1000
# pay_with = 500
pay_with = 200 
back = pay_back(total_to_pay,pay_with)
print(back)

t=0
for x in range(len(back)):
    print ('de {} son {}'.format(amounts[x], back[x]))
    t+=amounts[x]*back[x]

print ('El cambio es en total', t)
print ('A pagar son', total_to_pay)
print ('Pagó con', pay_with)


