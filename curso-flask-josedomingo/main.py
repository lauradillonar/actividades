from flask import Flask, render_template, abort, url_for, request, make_response
from jinja2 import Template

#Fuente: https://plataforma.josedomingo.org/pledin/cursos/flask/

app = Flask(__name__)

# --------------------------
# Generando respuestas HTTP

@app.route('/string/')
def return_string():
    return 'Hello World!'

@app.route('/object/')
def return_object():
    headers={'Content-Type':'text/plain'}
    return make_response('Hello Wordl!',200,headers)

@app.route('/tuple/')
def return_tuple():
    return 'Hello Wordl!',200,{'Content-Type':'text/plain'}

# --------------------------

@app.route("/hello/")
@app.route("/hello/<string:nombre>")
@app.route("/hello/<string:nombre>/<int:edad>")
def hola(nombre=None,edad=None):
    if nombre and edad:
        return 'Hola, {0} tienes {1} años.'.format(nombre, edad)
    elif nombre:
        return 'Hola, {0}.'.format(nombre)
    else:
        return 'Hola mundo'

@app.route('/articulos/new',methods=["POST"])
def articulos_new():
    return 'Esta URL recibe información de un formulario con el método POST'

@app.route('/login',methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return 'Hemos accedido con POST'
    else:
        return 'Hemos accedido con GET'

@app.route("/suma", methods=['GET', 'POST'])
def sumar():
    if request.method=='POST':
        num1=request.form.get("num1")
        num2=request.form.get("num2")
        return str(int(num1)+int(num2))
    else:
        return """<form action="/suma" method="POST">
                  <label>N1:</label>
                  <input type="text" name="num1" />
                  <label>N2:</label>
                  <input type="text" name="num2" />
                  </form> """
# -------------------------------------
# Plantillas con JINJA2
# from jinja2 import Template


temp1="Hola {{nombre}}"
print(Template(temp1).render(nombre="Pepe"))

temp2='<a href="{{url}}">{{enlace}}</a>'
print(Template(temp2).render(url="http://www.flask.com", enlace="Flask"))

temp3='<a href="{{datos[0]}}">{{datos[1]}}</a>'
print(Template(temp3).render(datos=["http://www.flask.com","Flask"]))

temp4='<a href="{{datos.url}}">{{datos.enlace}}</a>'
print(Template(temp4).render(datos={"url":"http://www.flask.com","enlace":"Flask"}))

temp5='Hola {{nombre|striptags|title}}'
print(Template(temp5).render(nombre="  pepe  "))

temp6="Los datos son {{lista|join(', ')}}"
print(Template(temp6).render(lista=["amarillo","verde","rojo"]))

temp7="El último elemento tiene {{lista|last|length}} caracteres"
print(Template(temp7).render(lista=["amarillo","verde","rojo"]))

# -------------------------------------
# Generando páginas HTML con plantillas

@app.route('/hola/')
@app.route('/hola/<nombre>')
def saluda(nombre=None):
    return render_template("/template1.html", nombre=nombre)

@app.route('/suma/<num1>/<num2>')
def suma(num1,num2):
    try:
        resultado=int(num1)+int(num2)
    except:
        abort(404)
    return render_template('template2.html', num1=num1, num2=num2, resultado=resultado)

@app.route('/tabla/<numero>')
def tabla(numero):
    try:
        numero=int(numero)
    except:
        abort(404)
    return render_template("template3.html", num=numero)

@app.route('/enlaces')
def enlaces():
    enlaces=[{"url":"http://www.google.com", "texto":"Google"},{"url":"https://twitter.com","texto":"Twitter"},{"url":"https://www.facebook.com","texto":"Facebook"}]
    return render_template("template4.html", enlaces=enlaces)


@app.errorhandler(404)
def page_not_found(error):
    return render_template("error.html", error="Página no encontrada..."), 404

# -------------------------------------

if __name__=='__main__':
    app.run(debug=True, port=8000)
