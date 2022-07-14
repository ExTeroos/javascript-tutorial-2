# Introduction

This simple tutorial will show you the basics of arrays in JavaScript.

## 1. Create an array "products".

### 1.1

First, you must create an empty file called "main.js" in the main folder.

### 1.2

In the file you've just created, **copy the above code**, which will create an array of objects representing products in the grocery store. In addition, it will declare three arrays that you will need later on.

```
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



// Your space to code is above this line
// DO NOT CHANGE THE CODE BELOW
module.exports = { products, fruits, vegetables, cheaperProducts };
```

## 2. Add new object to array

### 2.1

Create a new object, which will represent a strawberry by typing the following code:

```
let strawberry = {
    "name": "Strawberry",
    "type": "Fruit",
    "price": 4
}
```

Then we need to add it at the last position. To do it you can use `push()` method.

It should look like that:
```
products.push(strawberry);
```

## 3. Sort the elements in the array

### 3.1

Now we can sort the products to make the array more transparent. Let's sort them alphabetically by typing the below line:

```
products = products.sort((p1, p2) => (p1.name > p2.name) ? 1 : (p1.name < p2.name) ? -1 : 0);
```

It should sort our products. You can check if it worked by typing:

```
console.log(products);
```

## 4. Filter element by value

### 4.1

Let's add vegetables and fruits to two different arrays. To do it, we can use the`filter()` method.

Use to the following line to add all the products whose type equals **"Fruit"** to the `fruits` array:

```
fruits = products.filter(product => product.type == "Fruit");
```

### 4.2

Now, let's do the same thing with vegetables. Add to the `vegetables` array all the products with the **"Vegetable"** type.

### 4.3

We can also filter objects by other values. Now, let's save in the array `cheaperProducts` all the products whose price equals or it's lower than **3**.

