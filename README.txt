//se instalo
npm intall express mysql nodemon -D

//se levanta host local
nodemon index.js

// formas de consultas: GET
http://localhost:3000/

//lista de usuarios por id
http://localhost:3000/usuario/1/

//lista todas las posiciones
http://localhost:3000/posiciones/

//lista de posiciones paginadas con la forma: '/tabla/comienzo/tamaño/'
http://localhost:3000/posiciones/7/2/

//formato POST
http://localhost:3000/usuario

{
    "nombre": "Elias",
    "email": "eli@gmail.com"
}