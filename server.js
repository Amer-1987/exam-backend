'use strict';

require('dotenv').config();
const cors = require("cors");
const express = require("express");
const axios = require("axios");
const server = express();
const mongoose = require('mongoose');


server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/fruit');
}

const fruitSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: String,
});

const fruitModel = mongoose.model('Fruit', fruitSchema);

// const Apple = new fruitModel({
//     name: 'Apple',
//     image='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg',
//     price: '35'
// });

// const Peach = new fruitModel({
//     name: 'Banana',
//     image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg'
//     price: '12'
// });

// const Cherry = new fruitModel({
//     name: 'Grapes',
//     image='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg',
//     price: '45'
// });


// fruitSchema.methods.speak = function speak() {
//     const greeting = this.name

// };


// const Apple = new fruitModel ({ name: 'Apple' });
// Apple.speak();

//http://localhost:3010
server.get('/', (req, res) => {
    res.send('welcome ');
    console.log("welcome");
})


const fruitArray = [];


//http://localhost:3010/fruits

server.get('/fruits', getFruitFunction);
server.get('/fruitUser', getFruitUserFunction);
server.post('/fruitAdd', addFruitFunction);
server.delete('/fruitDelete', deleteFruitFunction);
server.put('/fruitUpdate', updateFruitFunction);




function getFruitFunction(req, res) {

    const url = `https://fruit-api-301.herokuapp.com/getFruit`;
    // console.log(888);
    axios
        .get(url)
        .then(result => {
            const fruitArray = result.data.fruits.map(item => {
                // console.log(result.data);

                return new Fruit(item);

            })
            res.send(fruitArray);
            console.log(fruitArray);
        })
        .catch(err => {
            console.log("error in getting data");
        })
    console.log(fruitArray);
}

function getFruitUserFunction(req, res) {
    const email = req.query.email;

    const getFruit= fruitmodelfind({email:email}(eroor) {

    })
}

function addFruitFunction(req, res) {

    const {name,image,price, email} = req.body;


 const addFruit= fruitModel.create()
}

function deleteFruitFunction (req,res){
const {name, image, price}  =req.params;

const deleteFruit=fruitModel.deleteOne(name,())
}

function updateFruitFunction (req,res){
    const  {name, image, price}  =req.params;
    const updateFruit= fruitModel.updateby

}


class Fruit {
    contructor(item) {
        this.name = item.name;
        this.image = item.image;
        this.price = item.price;
    }
}





server.listen(PORT, () => {
    console.log(`i am listening to PORT ${PORT}`);
})

