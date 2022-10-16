<template>
  <div>
    <h3>hello</h3>
    <greetings />
    <User :age="age"/>
  </div>
</template>

<script>
import Greetings from "@/components/Greetings.vue";
import User from "@/components/User.vue";

export default {
  name: "App",
  // we register vue component locally
  // the component will be available only in this parent component
  // we list the components we want to use in the components property
  components: {
    Greetings,
    User
  },
  data() {
    return {
      age: 30
    }
  },
};
</script>


