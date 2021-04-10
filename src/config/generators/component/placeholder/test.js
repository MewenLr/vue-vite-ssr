module.exports = (name) => `import { VueWrapper } from '@vue/test-utils'
import { prepareShallow } from '@/config/jest/prepare'
import cloneDeep from 'lodash/cloneDeep'
import ${name} from './${name}.vue'
import dataset from './${name}.dataset'

const { props } = dataset

let propsData: any
let wrapper: VueWrapper<any>

describe('[${name}]', () => {

  beforeEach(() => {
    propsData = cloneDeep(props)
    wrapper = prepareShallow(${name}, { propsData })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  xdescribe('Rendering', () => {

    it('should render something', async () => {
      /* expect... */
    })
  })
})
`
