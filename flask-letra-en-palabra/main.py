from flask import Flask, render_template, request

app = Flask(__name__)

# Para que encuentre una letra, pasar como parámetro:
#http://localhost:8000/actividad1/ubuntu?letra=u
@app.route('/actividad1/')
@app.route('/actividad1/<word>')
def contar(word=None):
    total=0
    letter1=request.args.get('letra','sin letra')
    if len(letter1)==1 and letter1.upper() in 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ':
        valid=True
        for letter in word:
            if letter.upper()=='Á': letter='A'
            if letter.upper()=='É': letter='E'
            if letter.upper()=='Í': letter='I'
            if letter.upper()=='Ó': letter='O'
            if letter.upper()=='Ú': letter='U'
            if letter.upper()=='Ü': letter='U'
            if letter.upper()==letter1.upper():
                total+=1
    else: valid=False
    return render_template("/template1.html", word=word, letter=letter1, times=total, valid=valid)

if __name__=='__main__':
    app.run(debug=True, port=8000)
