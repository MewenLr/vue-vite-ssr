module.exports = (name, model) => `import { AxiosInstance } from 'axios'
import ${model} from '@/models/${name.toLowerCase()}/${name.toLowerCase()}.model'

export const ${name}ServiceSymbol = Symbol('${name}Service symbol')

export default class ${name}Service {

  private httpClient: AxiosInstance

  constructor(HttpClient: AxiosInstance) {
    this.httpClient = HttpClient
  }

  async get${name}(): Promise<Array<${model}>> {
    try {
      const { data } = await this.httpClient.get('/${name.toLowerCase()}')
      return Promise.resolve(data)
    } catch (err) {
      return Promise.reject(err)
    }
  }
}
`
