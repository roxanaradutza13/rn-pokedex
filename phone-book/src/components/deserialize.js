const fs = require("fs");
 
// Creamos la funcion
function deserializarDatos(nombreArchivo) {
  // Ler o conteúdo do arquivo JSON como uma string
  let datosJSON = fs.readFileSync(nombreArchivo, "utf8");
  // Deserializar a resposta JSON em uma matriz de objetos
  let datos = JSON.parse(datosJSON);
  // Imprimir os dados na console
  console.log(datos);
}


//Llamammos a la funcion
deserializarDatos("BaseDatos.json");


//Para funcionar hay que entrar en la carpeta (terminal)
// >> node deserialize.js