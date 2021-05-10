import { App } from 'vue'
import HelloWorld from './HelloWorld.vue'

HelloWorld.install = (app: App): void => {
  app.component(HelloWorld.name, HelloWorld)
}

export default HelloWorld
