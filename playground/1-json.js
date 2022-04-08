const fs = require('fs')

const fileBuffer = fs.readFileSync('1-json.json')

const readContent = fileBuffer.toString()

const parsedJSON = JSON.parse(readContent)

parsedJSON.name = 'Praveen B'
parsedJSON.planet = 'Titan'
parsedJSON.age = 44

fs.writeFileSync('1-json.json', JSON.stringify(parsedJSON))