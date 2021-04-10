module.exports = (name) => `import { AxiosInstance } from 'axios'
import ${name}Service from './${name}Service'

class Mock${name}Service extends ${name}Service {

  get${name} = jest.fn();

}

export default new Mock${name}Service({} as AxiosInstance)
`
