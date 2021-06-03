# Actividad 3: Iterando un arreglo una vez escribir 
# una función que elimine false y 0 de la lista

def delete_element(list):
    l = []
    for x in list:
        if x!= 0 and x!=False:
            l.append(x)    
    return l

the_list = [3,2,5,0,1,False,7,2]
print(delete_element(the_list))

