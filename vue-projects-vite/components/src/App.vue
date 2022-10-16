<template>
  <div>
    <p>hello</p>
    <Greetings />
  </div>
</template>

<script>
import Greetings from "@/components/Greetings.vue";
export default {
  name: "App",
  // we register vue component locally
  // the component will be available only in this parent component
  // we list the components we want to use in the components property
  components: {
    Greetings,
  },
};
</script>


