const assert = require('assert')
const fs = require('fs')
const util = require('util')
const path = require('path')

const readdir = util.promisify(fs.readdir)
const getRootDir = async (dir = process.cwd()) => {
  const pathToRoot = path.join(dir, '..')
  const rootDir = await readdir(pathToRoot)

  if (!rootDir) {
    throw new Error(`Could not find folder ${pathToRoot}`)
  }

  return rootDir
}

describe('javascript-tutorial-2 folder', () => {
  let rootDir
  before(async () => {
    rootDir = await getRootDir()
  })

  it('should have a main.js file', async () => {
    assert(rootDir.indexOf('main.js') >= 0)
  })
})

// 1.2

const readFile = util.promisify(fs.readFile)
const getJsFile = async (dir = process.cwd()) => {
  const pathToJs = path.join(dir, '..', 'main.js')
  const jsFile = await readFile(pathToJs)

  if (!jsFile) {
    throw new Error(`Could not find ${pathToJs}`)
  }
  return jsFile
}

const { products, fruits, vegetables, cheaperProducts } = require('../../main.js')

describe('main.js', () => {
  let jsFile
  before(async () => {
    jsFile = await getJsFile()
  })

  it('main.js should contain \"products\" array', () => {
    assert.ok(products, "The \"products\" array does not exist");
    assert.ok(Array.isArray(products), "\"products\" is not an array");
  })

  it('main.js should contain \"fruits\" array', () => {
    assert.ok(fruits, "The \"fruits\" array does not exist");
    assert.ok(Array.isArray(fruits), "\"fruits\" is not an array");
  })

  it('main.js should contain \"vegetables\" array', () => {
    assert.ok(vegetables, "The \"vegetables\" array does not exist");
    assert.ok(Array.isArray(vegetables), "\"vegetables\" is not an array");
  })

  it('main.js should contain \"cheaperProducts\" array', () => {
    assert.ok(cheaperProducts, "The \"cheaperProducts\" array does not exist");
    assert.ok(Array.isArray(cheaperProducts), "\"cheaperProducts\" is not an array");
  })

// 2.1
    
    it('The \"products\" array should now contain 7 objects', () => {
        assert.equal(products.length, 7, '\"products\" does not contain 7 objects');
    })

    it('The \"products\" array should contain \"Strawberry\" at the end of the array', () => {
        assert.ok(products.some(prod => prod.name == "Strawberry"), '\"Strawberry\" wasn not added to the array');
    })

// 3.1
    it('The 1st element should contain \"Banana\"', () => {
        assert.equal(products[0].name, "Banana", '\"Banana\" is not in a 1st element');
    })

    it('The 2nd element should contain \"Carrot\"', () => {
    assert.equal(products[1].name, "Carrot", '\"Carrot\" is not in a 2nd element');
    })

    it('The 3rd element should contain \"Kiwi\"', () => {
    assert.equal(products[2].name, "Kiwi", '\"Kiwi\" is not in a 3rd element');
    })

    it('The 4th element should contain \"Onion\"', () => {
    assert.equal(products[3].name, "Onion", '\"Onion\" is not in a 4th element');
    })

    it('The 5th element should contain \"Potato\"', () => {
    assert.equal(products[4].name, "Potato", '\"Potato\" is not in a 5th element');
    })

    it('The 6th element should contain \"Strawberry\"', () => {
    assert.equal(products[5].name, "Strawberry", '\"Strawberry\" is not in a 6th element');
    })

    it('The 7th element should contain \"Tomato\"', () => {
    assert.equal(products[6].name, "Tomato", '\"Tomato\" is not in a 7th element');
    })

// 4.1

    it('The array \"fruits\" should contain all the products whose type equal \"Fruit\"', () => {
        assert.equal(fruits.length, 4, "Array \"fruits\" does not contain only fruits or does not contain all the fruits")
        assert.ok(fruits.some(fruit => fruit.name == "Tomato"), "\"Tomato\" is not in the array");
        assert.ok(fruits.some(fruit => fruit.name == "Strawberry"), "\"Strawberry\" is not in the array");
        assert.ok(fruits.some(fruit => fruit.name == "Kiwi"), "\"Kiwi\" is not in the array");
        assert.ok(fruits.some(fruit => fruit.name == "Banana"), "\"Banana\" is not in the array");
    })

// 4.2

    it('The array \"vegetables\" should contain all the products whose type equal \"Vegetable\"', () => {
        assert.equal(vegetables.length, 3, "Array \"vegetables\" does not contain only vegetables or does not contain all the vegetables")
        assert.ok(vegetables.some(vegetable => vegetable.name == "Potato"), "\"Potato\" is not in the array");
        assert.ok(vegetables.some(vegetable => vegetable.name == "Carrot"), "\"Carrot\" is not in the array");
        assert.ok(vegetables.some(vegetable => vegetable.name == "Onion"), "\"Onion\" is not in the array");
    })
})