/* (3.9) Programa una función que obtenga un número aleatorio entre 501 y 600.
*/

const numeroAleatorio = (inicio = undefined, fin = undefined) => {
   try {

     if (inicio === undefined)
        throw new Error ("El mínimo no está definido.");

     if (isNaN(inicio)) 
        throw new Error ("El valor mínimo no es un número.");

     if (!inicio) 
        throw new Error ("No hay valor mínimo.");
 
    if (fin === undefined)
        throw new Error ("El máximo no está definido.");

     if (isNaN (fin)) 
        throw new Error ("El valor máximo no es un número.");

     if (!fin) 
        throw new Error ("No hay valor máximo.");

     inicio = parseFloat (inicio);
     fin = parseFloat (fin);

     if ((fin < inicio) || (fin === inicio))
        throw new Error (`El valor mínimo ${inicio} debe ser menor al máximo ${fin} del rango donde buscar un número aleatorio.`);

     let num = 0,
        aleatorio = Math.random ();

     num = Math.floor (aleatorio *(fin - inicio)) + inicio;

     alert (`${num} es un número aleatorio entre ${inicio} y ${fin}.
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

//  min = prompt ("Valor mínimo:"),
//  max = prompt ("Valor máximo:");

// numeroAleatorio (min,max);

// numeroAleatorio (parseInt(min,10), parseInt(max,10));


/* (3.10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

const esCapicua = (num = undefined) => {
  try {

    if (num === undefined)
      throw new Error ("El número no está definido.");
    
    if (isNaN (num))
      throw new Error ("El valor no es un número.");

    if (!num) 
      throw new Error ("No hay un número para ver si es capicúa.");
    
    let cadena = num.toString(10), 
inversa = cadena.split ("").reverse ().join ("");

    if (cadena === inversa) {
      alert (`El número ${num} es capicúa.` );
      return true;
    } else {
      alert (`El número ${num} no es capicúa`);
      return false;
    }

  } catch (error) {
    alert (`${error}`);
  }
}

// esCapicua(2002);
// esCapicua();

// let numero = prompt ("Ingrese un número para ver si es capicúa:");
// esCapicua(numero);

const factorial = (num = undefined) => {
  try {

    if (num === undefined)
      throw new Error ("El número no está definido.");
    
    if (isNaN (num))
      throw new Error ("El valor no es un número.");

    if (num === 0) {
      alert("El factorial de cero es cero.");
      return 0;
    }

    if (num === 1) {
      alert("El factorial de uno es uno.");
      return 0;
    }

    if (!num) 
      throw new Error ("No hay un número.");
    
    if ( num !== parseInt(num))
      throw new Error ("El número no es entero.");

    if (num < 0)
      throw new Error ("El número no es positivo.");
 
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


