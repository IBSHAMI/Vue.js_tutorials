let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: '',
    };
  },
  computed: {
    boxClasses() {
      return { purple: this.isPurple };
    },
  },
}).mount("#app");
