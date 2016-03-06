PROYECTO DE : ANDREA FRANCIS SORIA JIMENEZ
ARCHIVO DE CONFIGURACION DE LA BASE DE DATOS: decrypter_mensajes.sql
NOMBRE DE LA BASE DE DATOS: decrypter
LOGIN BASE DE DATOS:
 host: "127.0.0.1" // O la IP del servidor a deployar
 user: "root" // usuario
 password: "A08112012s" // contrase;a
 database: "decrypter" // Nombre de la base de datos
 TIPO DE BASE DE DATOS: MYSQL
 TECNOLOGIAS EMPLEADAS:
 > JavaScript (Servidor: NodeJS cliente: AngularJS)
 > MySql

 Pasos para ejecutar la aplicacion:
 1. Dentro de la raiz del proyecto escriba el comando:
 	node app.js
 2. Abra un navegador
 3. Ingrese a la direccion del servidor en el puerto 3030 Ej.:
 	localhost:3030

 Pasos para probar la aplicacion:
 1. Ingrese un nuevo mensaje en el campo de texto de la seccion "Nuevo Mensaje" Ej.:

Mientras con ansias a su perro
esperaba, muchas preocupasiones
Gustavo tenia. Esperar
unos minutos mas su espiritu
socababa escuchando el tic tac
tembloroso de su reloj, sin embargo,
a pesar de la larga espera, finalmente
Einstein, su [errrp, volvioa su apreciado habitat
sembrando la alegria en su querido amigo

2. Presione el boton "Guardar"
3. A continuacion podra ver que el nuevo registro fue agregado a la tabla de mensajes
4. Para desencriptar y ver el mensaje oculto y en binario, presione: "Decifrar"
5. Seguidamente usted podra ver en la seccion: "Mensaje Decifrado" los campos: 
 ! Mensaje original ! Mensaje decifrado ! Mensaje Decifrado en Binario
6. Para eliminar el mensaje presione el boton "Eliminar"