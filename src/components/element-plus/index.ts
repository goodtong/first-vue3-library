import type { App } from 'vue'
import HelloWorld from '../HelloWorld'

const components = [HelloWorld]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  HelloWorld,
  install
}

export default {
  install,
}
