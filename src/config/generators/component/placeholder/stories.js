module.exports = (name, directory) => `import '@/config/storybook/scaffold'
import { storiesOf } from '@storybook/vue'
import ${name} from './${name}.vue'
import dataset from './${name}.dataset'

const { props } = dataset

storiesOf('${directory}/${name}', module)
  .add('default', () => ({
    components: {
      ${name},
    },
    data: () => ({
    }),
    template: \`<${name}
    />\`,
  }))
`
