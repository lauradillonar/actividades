/* (2.5) Programa una función que invierta las palabras de una cadena de texto, pe. 
         miFunción("Hola Mundo") devolverá "odnuM aloH"

*/

const invertirTexto = (cadena = "") => {
    try {
        if (!cadena)
            throw new Error("No hay un texto");

        if (typeof(cadena) !== "string")
            throw new Error("Lo ingresado no es un texto");

        let invertida = "";
        for (let i = cadena.length - 1; i >= 0; i--) {
            invertida = invertida + cadena[i];
        }
        alert(invertida);
        return invertida;

    } catch (error) {
        alert(`${error}`)
    }
}

// invertirTexto("Hola Mundo");
// invertirTexto();
// invertirTexto(Array(0));
// invertirTexto(null);
// invertirTexto(undefined);

//let texto = prompt("Ingrese un texto:");
//invertirTexto(texto);




/* (2.6) Programa una función para contar el número de veces 
    que se repite una palabra en un texto largo, pe.
    miFunción("hola mundo adiós mundo", "mundo") devolverá 2.
*/

const vecesPalabra = (cadena = "", palabra = "") => {
    try {
        if (!cadena)
            throw new Error("No hay un texto");

        if (typeof(cadena) !== "string")
            throw new Error("Lo ingresado no es un texto");

        if (!palabra)
            throw new Error("No hay un texto");

        if (typeof(palabra) !== "string")
            throw new Error("Lo ingresado no es un texto");


        let veces = 0,
            expReg = new RegExp(palabra, "g"),
            coincidencias = Array[0];

        // (cadena.includes(palabra)) ?
        // alert(`La palabra "${palabra}" está en el texto "${cadena}".`):
        //     alert(`La palabra "${palabra}" no está en el texto "${cadena}".`)
        // console.log(expReg.exec(cadena));

        coincidencias = cadena.match(expReg);

        if (expReg.test(cadena)) {
            veces = coincidencias.length;
            alert(`La palabra "${palabra}" está ${veces} veces en el texto "${cadena}".`);
        } else
            alert(`La palabra "${palabra}" no está en el texto "${cadena}".`);
        return veces;

    } catch (error) {
        alert(`${error}`)
    }
}

// vecesPalabra("Hola mundo. Adiós mundo", "mundo");
// vecesPalabra("", "mundo");
// vecesPalabra("ASDERTFGHASDTYUERTASTYUASD", "asd");

// texto = prompt("Ingrese un texto:");
// queBuscar = prompt("Ingrese una palabra para buscar en el texto:");
// vecesPalabra(texto, queBuscar);




/* (2.7) Programa una función que valide si una palabra
    o frase dada es un palíndromo (que se lee igual en un sentido que en otro)
    pe. miFunción ("Salas") devolverá true.
*/


const esPalindromo = (cadena = "") => {

    try {
        if (!cadena)
            throw new Error("No hay una palabra");

        if (typeof(cadena) !== "string")
            throw new Error("Lo ingresado no es una palabra");

        let invertida = "";
        for (let i = cadena.length - 1; i >= 0; i--) {
            invertida = invertida + cadena[i];
        }

        console.log(invertida.toLowerCase());
        if (invertida.toLowerCase() === cadena.toLowerCase()) {
            alert(`La palabra ${cadena} es un palíndromo.`);
            return true;
        } else {
            alert(`La palabra ${cadena} no es un palíndromo.`);
            return false;
        }

    } catch (error) {
        alert(`${error}`)
    }
}

// esPalindromo("Salas");
// esPalindromo("345");

// let unaPalabra = prompt("Ingrese una palabra para ver si es un palíndromo:");
// esPalindromo(unaPalabra);



/* (2.8) Programa una función que elimine cierto patrón
    de caracteres de un texto dado, pe.
    miFuncion ("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
    devolverá "1, 2, 3, 4 y 5".
*/

const eliminarPatron = (cadena = "", patron = "") => {
    try {
        if (!cadena)
            throw new Error("No hay un texto");

        if (typeof(cadena) !== "string")
            throw new Error("Lo ingresado no es un textp");

        if (!patron)
            throw new Error("No hay un patrón para buscar en el texto.");

        if (typeof(patron) !== "string")
            throw new Error("Lo ingresado no es patrón de texto.");

        let expReg = new RegExp(patron, "g"),
            nuevo = "";

        if (expReg.test(cadena)) {
            nuevo = cadena.replace(expReg, "");
            alert(nuevo);
        } else {
            alert(`No se encuentra el patrón "${patron}" en el texto "${cadena}".`);
        }
        return nuevo;

    } catch (error) {
        alert(`${error}`);
    }
}

// eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "123");

// let texto = prompt("Ingrese un texto donde buscar un patrón:"),
//     unPatron = prompt("Ingrese un patrón a buscar en el texto:");
// eliminarPatron(texto, unPatron);
