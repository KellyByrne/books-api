const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'book_shop',
    'root',
    'Arcenciel24!', 
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

const connectToDb = async () => {
    try{
        await sequelize.authenticate();
        console.log('successfully connected to our db')
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {sequelize, connectToDb};