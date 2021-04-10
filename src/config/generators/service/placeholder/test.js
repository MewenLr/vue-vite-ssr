module.exports = (name) => `import { AxiosInstance } from 'axios'
import ${name}Service from './${name}Service'
import MockHttpClient from '../HttpClient.mock'

let service: ${name}Service

describe('[${name}Service]', () => {

  beforeEach(() => {
    service = new ${name}Service(MockHttpClient as unknown as AxiosInstance)
  })

  xdescribe('get${name}', () => {

    it('should return a rejected promise on api error', async () => {
      const rejError = 'Dummy rejection error'
      MockHttpClient.get.mockRejectedValue(rejError)
      expect(service.get${name}()).rejects.toEqual(rejError)
    })

    it('should return a resolved promise with ${name.toLowerCase()}', async () => {
      const res${name} = {
        data: [
          { },
        ],
      }
      MockHttpClient.get.mockResolvedValue(res${name})
      expect(service.get${name}()).resolves.toMatchObject(res${name}.data)
    })
  })
})
`
