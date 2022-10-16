import { createApp } from 'vue'
import App from './App.vue'
// we import a vue component 
// we make sure we add the file extension so, 
// vite knows we are importing a single vue component
// import Greeting from '@/components/Greeting.vue'



let vm = createApp(App)

// we register the component globally 
// this is not recommended for large projects
// vm.component("Greeting", Greeting)


vm.mount('#app')
