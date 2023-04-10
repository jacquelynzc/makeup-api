import {promises as fsPromises} from 'fs'
import fetch from 'node_modules/node-fetch'

fetch('https://makeup-api.herokuapp.com/api/v1/products.json?')
  .then(response=> response.json())
  .then(data => fsPromises.writeFile("./db/makeups.json", JSON.stringify(data)))
