/* Fuente: AprendeJavaScript.org por Jon MirCha
    Cap.34: https://youtu.be/3o5d-tdVscU
    Cap.35: https://youtu.be/Xh8p7aZBiaw

 (1.1) Programa una función que cuente el número 
    de caracteres de una cadena de texto, pe.
    miFunción ("Hola Mundo") devolverá 10.
    */

const contarEnTexto = (cadena = "") => {
    try {
        if (!cadena)
            throw new Error("No hay cadena de texto");

        alert(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);
        return cadena.length;

    } catch (error) {
        alert(`${error}`);
    }
}

// console.log(contarEnTexto("hola mundo"));
// contarEnTexto();

// let texto = prompt("La cadena de texto es:");
// contarEnTexto(texto);





/* (1.2) Programa una función que te devuelva el texto 
      recortado según el número de caracteres indicados, pe.
      miFunción ("Hola Mundo", 4) devolverá "Hola".
*/
const cortarCadena = (cadena = "", largo = undefined) => {
    try {
        if (!cadena)
            throw new Error("No hay cadena de texto");

        if (largo === undefined)
            throw new Error("Número indefinido de caracteres a cortar del texto.");

        if (typeof(cadena) !== "string")
            throw new Error("Lo ingresado no es un texto.");

        if (largo === null)
            throw new Error("No hay número de caracteres a cortar del texto.");

        if (isNaN(largo))
            throw new Error("Lo ingresado no es un número");

        if (largo != Math.floor(largo))
            throw new Error("Lo ingresado no es un número entero positivo.");

        if (largo < 0)
            throw new Error("No se puede recortar un número negativo de caracteres.");

        if (largo === 0)
            largo = cadena.length;

        alert(`El texto recortado es "${cadena.slice(0, largo)}".`);
        return cadena.slice(0, largo);

    } catch (error) {
        alert(`${error}`);
    }

}

// console.log(cortarCadena("Hola Mundo", 4));
// cortarCadena();
// cortarCadena("", 4);
// cortarCadena("breve", 7);
// cortarCadena("Un texto", 0);
// cortarCadena("Un texto", -3);
// cortarCadena("Un texto", "a");
// cortarCadena("Un texto", 1.2);
// cortarCadena("Un texto", undefined);
// cortarCadena("Un texto", null);
// cortarCadena(Array(0), 4);

//let texto = prompt("Ingresa un texto:");
//let cantidad = prompt("Ingresa el número de caracteres para recortar del texto:");
//cortarCadena(texto, cantidad);





/* (1.3) Programa una función que dada una String te devuelva 
un Array de textos separados por cierto caracter, pe.
miFunción ("Hola que tal"," ") devolverá ["Hola","que","tal"]
*/

const separarTexto = (cadena = "", separador = undefined) => {
    try {
        if (!cadena)
            throw new Error("No hay cadena de texto");

        if (separador === undefined)
            throw new Error("El caracter para separar el texto está indefinido.");

        if (typeof(cadena) !== "string")
            throw new Error("No se ingresó un texto.");

        if (!separador)
            throw new Error("No hay caracter para separar el texto.");

        if (typeof(separador) !== "string")
            throw new Error("No se ingresó un caracter para separar el texto.");

        alert(`[${cadena.split(separador)}]`);
        return cadena.split(separador);

    } catch (error) {
        alert(`${error}`);
    }
}

// console.log(separarTexto("Hola que tal", " "));
// separarTexto("Lun,Mar,Mie,Jue,Vie,Sab,Dom", ",");
// separarTexto(" ", " ");
// separarTexto("", " ");
// console.log(separarTexto("Este texto", ""));
// separarTexto("Hola");

// let texto = prompt("Ingrese un texto: "),
//    separa = prompt("Indique un caracter para separar el texto: ");
// separarTexto(texto, separa);




/* (1.4) Programa una función que repite un texto X veces, pe.
    miFunción ("Hola Mundo", 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repetirTexto = (cadena = "", cantidad = undefined) => {
    try {
        if (!cadena)
            throw new Error("No hay texto para repetir.");

        if (cantidad === undefined)
            throw new Error("El número de veces para repetir, está indefinido.");

        if (typeof(cadena) !== "string")
            throw new Error("Lo ingresado no es un texto.");

        if (cantidad === null)
            throw new Error("No se ha ingresado el número de veces a repetir e texto.");

        if (isNaN(cantidad))
            throw new Error("El número de veces ingresado no es un número.");

        if (cantidad != Math.floor(cantidad))
            throw new Error("No se ingresó un número entero positivo de veces para repetir el texto.");

        if (Math.sign(cantidad) === -1)
            throw new Error("El número de veces no puede ser negativo.");

        if (cantidad === 0)
            throw new Error("No es posible repetir cero veces un texto.");

        let cad = "";
        for (let indice = 1; indice <= cantidad; indice++) {
            cad = cad + indice + " " + cadena + "\n";
        }
        alert(`${cad}`);
        return cad;

    } catch (error) {
        alert(`"${error}"`);
    }
}

// repetirTexto("Hola Mundo", 3);
// repetirTexto();
// repetirTexto("hola");

// let texto = prompt("Ingrese un texto:"),
//    veces = prompt("Ingrese el número de veces que se va a repetir el texto:");
// repetirTexto(texto, veces);
