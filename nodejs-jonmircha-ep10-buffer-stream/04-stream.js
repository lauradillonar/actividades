'use strict'

var fs=require('fs'),
	readStream=fs.createReadStream('assets/nombres.txt'),
	writeStream=fs.createWriteStream('assets/nombres_copia.txt')

	readStream.pipe(writeStream)

	readStream.on('data', function(chunk){
		console.log('He leido:',chunk.length,'caracteres')
	}) 

	readStream.on('end',function(){
		console.log('Terminé de leer el archivo')
	})
