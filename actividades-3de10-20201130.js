/* (3.9) Programa una funci�n que obtenga un n�mero aleatorio entre 501 y 600.
*/

const numeroAleatorio = (inicio = undefined, fin = undefined) => {
   try {

     if (inicio === undefined)
        throw new Error ("El m�nimo no est� definido.");

     if (isNaN(inicio)) 
        throw new Error ("El valor m�nimo no es un n�mero.");

     if (!inicio) 
        throw new Error ("No hay valor m�nimo.");
 
    if (fin === undefined)
        throw new Error ("El m�ximo no est� definido.");

     if (isNaN (fin)) 
        throw new Error ("El valor m�ximo no es un n�mero.");

     if (!fin) 
        throw new Error ("No hay valor m�ximo.");

     inicio = parseFloat (inicio);
     fin = parseFloat (fin);

     if ((fin < inicio) || (fin === inicio))
        throw new Error (`El valor m�nimo ${inicio} debe ser menor al m�ximo ${fin} del rango donde buscar un n�mero aleatorio.`);

     let num = 0,
        aleatorio = Math.random ();

     num = Math.floor (aleatorio *(fin - inicio)) + inicio;

     alert (`${num} es un n�mero aleatorio entre ${inicio} y ${fin}.
random es ${aleatorio} y fin-inicio es ${fin - inicio}`);
     return num;

   } catch (error) {
       alert (`${error}`);
   }
}

// numeroAleatorio (501,600);
// numeroAleatorio ("a",600);
// numeroAleatorio (501,"a");
// numeroAleatorio (501,"");
// numeroAleatorio ();

// let min = new Number (),
//  max = new Number ();

//  min = prompt ("Valor m�nimo:"),
//  max = prompt ("Valor m�ximo:");

// numeroAleatorio (min,max);

// numeroAleatorio (parseInt(min,10), parseInt(max,10));


/* (3.10) Programa una funci�n que reciba un n�mero y eval�e si es capic�a o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolver� true.
*/

const esCapicua = (num = undefined) => {
  try {

    if (num === undefined)
      throw new Error ("El n�mero no est� definido.");
    
    if (isNaN (num))
      throw new Error ("El valor no es un n�mero.");

    if (!num) 
      throw new Error ("No hay un n�mero para ver si es capic�a.");
    
    let cadena = num.toString(10), 
inversa = cadena.split ("").reverse ().join ("");

    if (cadena === inversa) {
      alert (`El n�mero ${num} es capic�a.` );
      return true;
    } else {
      alert (`El n�mero ${num} no es capic�a`);
      return false;
    }

  } catch (error) {
    alert (`${error}`);
  }
}

// esCapicua(2002);
// esCapicua();

// let numero = prompt ("Ingrese un n�mero para ver si es capic�a:");
// esCapicua(numero);

const factorial = (num = undefined) => {
  try {

    if (num === undefined)
      throw new Error ("El n�mero no est� definido.");
    
    if (isNaN (num))
      throw new Error ("El valor no es un n�mero.");

    if (num === 0) {
      alert("El factorial de cero es cero.");
      return 0;
    }

    if (num === 1) {
      alert("El factorial de uno es uno.");
      return 0;
    }

    if (!num) 
      throw new Error ("No hay un n�mero.");
    
    if ( num !== parseInt(num))
      throw new Error ("El n�mero no es entero.");

    if (num < 0)
      throw new Error ("El n�mero no es positivo.");
 
    let facto = 1;
     for (let i = 0 ; i < num ; i++) facto = facto * (num - i);

    alert (`El factorial de ${num} es ${facto}.`);
    return facto;

  } catch (error) {
    alert (`${error}`);
  }
}

// factorial (0);

// factorial (1);

// factorial (5);


