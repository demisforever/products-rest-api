const express = require('express');
const app = express();

//setting
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//import routs
app.use(require('./src/routes'));

//start server
app.listen(app.set('port'), () => {
    console.log('server en 3000');
});