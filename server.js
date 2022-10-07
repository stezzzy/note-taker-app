const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


// Initialize the app and create the port
const app = express();
const PORT = process.env.PORT || 3001

// import our routes for express
app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)



// Starting server on PORT
app.listen(PORT, () => console.log(`Listening to server on ${PORT}`))