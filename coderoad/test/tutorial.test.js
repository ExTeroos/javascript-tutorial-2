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

})