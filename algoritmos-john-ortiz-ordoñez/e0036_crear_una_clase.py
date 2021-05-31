class Person:
    def __init__(self, name, age, email):
        self.name = name
        self.age = age
        self.email = email
    
    def __str__(self):
        return 'Nombre:{}\nEdad:\nCorreo:{}'.format(self.name, self.age, self.email)
    
    def salute(self):
        print('Hola, mi nombre es', self.name)
    
maria = Person('María', '43', 'maria@gmail.com')

print(maria)
maria.salute()