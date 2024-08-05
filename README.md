# FactoriaF5-JS-counter
🕗 Vamos a crear un contador con JS
Importante
Antes de empezar a realizar el ejercicio deberás instalar node.js y correr los tests y cerciorarte de que fallan.

Parte I
Tenemos una página que empieza con un número 0, tenemos 3 botones, el de la izquierda se encarga de disminuir el número, el del medio volverá a iniciar a 0 el número y el de la derecha aumentará el número.

Tenemos 2 archivos dentro de la carpeta src/js, en counter.js realizarás las funciones necesarias para añadir la lógica del contador, y en events.js escribirás el código necesario para disparar un evento por cada botón.
Hay una carpeta llamada tests que contiene un archivo llamado app.test.js, allí encontrarás los tests que han de pasar, no modifiques este archivo, está aquí para saber que es lo que espera que haga la función, guíate con él.
El último test debería fallar en la primera parte del ejercicio, cuando resuelvas la segunda parte deberían pasar todos los test.
Ojo
No pases a la segunda parte si no tienes resuelta la primera.

Parte II
¿Has terminado la primera parte?

¡Felicidades!

Ahora refactoriza tu función "decrease" para que cuando el número esté en 0 no baje a números negativos y permanezca en 0.

Instalación Tests
Para poder ejecutar los test has de tener instalado Node.js. Versión LTS.

Puedes comprobar que lo tienes instalado con el comando:

node -v
Una vez instalado node.js, has de instalar las dependencias del proyecto (en la carpeta donde tienes todos los documentos del proyecto clonado) con el comando:

npm install
O

npm i
Ejecución de los test
Para ejecutar los test has de ejecutar el comando:

npm test

¿Qué aprenderemos?
Hacer funciones
Disparar eventos
Manipular el DOM
Uso de condicionales
