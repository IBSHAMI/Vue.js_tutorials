let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: '',
      size: 150
    };
  },
  computed: {
    boxClasses() {
      return { purple: this.isPurple };
    },
  },
}).mount("#app");
