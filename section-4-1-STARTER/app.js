let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    console.log("beforeCreate called");
    console.log(this.message);
  },
  created() {
    console.log("created called");
    console.log(this.message);
  },
  beforeMount() {
    console.log("beforeMount called");
    console.log(this.$el);
  },
  mounted() {
    console.log("mounted called");
    console.log(this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate called");
  },
  updated() {
    console.log("updated called");
  },
  beforeUnmount() {
    console.log("beforeUnmount called");
  },
  unmounted() {
    console.log("unmounted called");
  }
})

vm.mount("#app");




// we can delay the mounting of the app
// until we have the data we need ot other conditions are met
// setTimeout(() => {
//   vm.mount("#app")
// }, 3000)