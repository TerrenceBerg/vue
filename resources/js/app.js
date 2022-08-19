import './bootstrap';

import '../sass/app.scss'


import {createApp} from 'vue'
import App from './Components/App.vue'
import AudioRecorder from 'vue-audio-recorder'


import ExampleComponent1 from './Components/ExampleComponent1.vue'
import ExampleComponent2 from './Components/ExampleComponent2.vue'
// import AudioComponent from './Components/AudioRecordComponent.vue'

createApp(AudioRecorder).mount()
createApp(App).mount("#app")
createApp(ExampleComponent1).mount("#root-component-1")
createApp(ExampleComponent2).mount("#root-component-2")
// createApp(AudioComponent).mount("#audio-component")

