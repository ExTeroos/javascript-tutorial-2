let products = [
    {
        "name": "Tomato",
        "type": "Fruit",
        "price": 5
    },

    {
        "name": "Potato",
        "type": "Vegetable",
        "price": 2
    },

    {
        "name": "Banana",
        "type": "Fruit",
        "price": 3
    },

    {
        "name": "Kiwi",
        "type": "Fruit",
        "price": 4
    },

    {
        "name": "Carrot",
        "type": "Vegetable",
        "price": 6
    },

    {
        "name": "Onion",
        "type": "Vegetable",
        "price": 3
    }
]

let fruits = [];
let vegetables = [];
let cheaperProducts = [];

// DO NOT CHANGE THE CODE ABOVE
// Your space to code is below this line

let strawberry = {
    "name": "Strawberry",
    "type": "Fruit",
    "price": 4
}

products.push(strawberry);

products = products.sort((p1, p2) => (p1.name > p2.name) ? 1 : (p1.name < p2.name) ? -1 : 0);

// Your space to code is above this line
// DO NOT CHANGE THE CODE BELOW
module.exports = { products, fruits, vegetables, cheaperProducts };