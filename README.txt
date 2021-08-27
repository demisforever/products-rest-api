//Software requeridos
Node.js
https://nodejs.org/en/

Base de datos
Es importante que primero, tengas creada una base de datos con el nombre : kodeardb.

// clonar e instalar en la local
git clone https://github.com/demisforever/kodear-rest-api.git
cd kodear-rest-api

// sobre el proyecto se instaló
npm install express mysql nodemon -D

//Levantar el servidor
nodemon index.js

// formas de consultas: GET
//lista de usuarios por id
http://localhost:3000/usuario/1/

//lista todas las posiciones
http://localhost:3000/posiciones/

//lista de posiciones paginadas con la forma: '/tabla/comienzo/tamaño/'
http://localhost:3000/posiciones/7/2/

//forma de consulta: POST
http://localhost:3000/usuario

{
    "nombre": "Elias",
    "email": "eli@gmail.com"
}