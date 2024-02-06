const express = require('express');
const apiRoutes = require('./routes');
const {sequelize, connectToDb} = require('./db');
const body_parser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

app.use((request, response,) => {
    response.status(404);
    response.json({message: "Resource not found"});
});

app.use((request, response,) => {
    response.status(500);
    response.json({message: "Oops... something went wrong"});
});

app.get('/', (req, res) => {
    res.status(200).json({message: 'hello world'});
});

app.listen(PORT, async () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectToDb();
});