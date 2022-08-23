require('./bootstrap')

import { createApp } from 'vue'
import HelloWorld from '../js/Components/ExampleComponent1'

const app = createApp({})

app.component('hello-world', HelloWorld)

app.mount('#app')


