let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }, 
  // we use template to define the HTML that we want to render
  template: `{{ message }}`
})

vm.mount("#app");




// we can delay the mounting of the app
// until we have the data we need ot other conditions are met
// setTimeout(() => {
//   vm.mount("#app")
// }, 3000)