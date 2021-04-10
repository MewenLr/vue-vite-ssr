const fs = require('fs')
const mkdirp = require('mkdirp')
const inquirer = require('inquirer')
const fsPromises = require('fs').promises
const questions = require('./questions')
const mockPlaceholder = require('./placeholder/mock.js')
const testPlaceholder = require('./placeholder/test.js')
const modelPlaceholder = require('./placeholder/model.js')
const servicePlaceholder = require('./placeholder/service.js')
const modelDatasetPlaceholder = require('./placeholder/modelDataset.js')

const [, , ...args] = process.argv

function toPascalCase(name) {
  return `${name}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w+)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`,
    )
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), (s) => s.toUpperCase())
}

async function generateComponent() {
  try {
    const input = args[0]
    const normalizedPath = input.split('/').map((el) => toPascalCase(el))

    const name = normalizedPath[normalizedPath.length - 1]

    let path = './src/services'

    normalizedPath.forEach((el) => path += `/${el}`)

    console.log('path >', path)

    const { model } = await inquirer.prompt(questions)
    const normalizedModel = toPascalCase(model)
    const pathModel = `./src/models/${normalizedModel.toLowerCase()}`

    if (!fs.existsSync(path)) {
      await mkdirp.sync(path)

      await fsPromises.writeFile(`${path}/${name}Service.mock.ts`, mockPlaceholder(name))
      await fsPromises.writeFile(`${path}/${name}Service.test.ts`, testPlaceholder(name))
      // await fsPromises.writeFile(`${path}/${name}Service.ts`, servicePlaceholder(name, 'test'))
      await fsPromises.writeFile(`${path}/${name}Service.ts`, servicePlaceholder(name, normalizedModel))

      if (!fs.existsSync(pathModel)) {
        await mkdirp.sync(pathModel)

        await fsPromises.writeFile(`./src/models/${normalizedModel.toLowerCase()}/${normalizedModel.toLowerCase()}.model.ts`, modelPlaceholder(normalizedModel))
        await fsPromises.writeFile(`./src/models/${normalizedModel.toLowerCase()}/${normalizedModel.toLowerCase()}.dataset.ts`, modelDatasetPlaceholder(normalizedModel))

        console.info(`
          \nThe service ${name} has been successfully created!
          \nDo not forget to inject it and to index the model\n
        `)
      } else {
        console.info(`\n[error] model ${pathModel} already exists\n`)
      }
    } else {
      console.info(`\n[error] service at ${path} already exists\n`)
    }
  } catch (e) {
    console.info(`[error] ${e}`)
  }
}

if (!args[0]) console.info('[error] Please enter a service name at the end of the command \'npm run service\'\n')
else if (args.length >= 2) console.info('[error] You must pass no more than one argument\n')
else {
  console.info('Welcome to Vue Service Generator\n')

  generateComponent()
}
