<template>
  <div>
    <p>the user is {{ age }} years old</p>

    <button @click.prevent="onClickAge">update age from user component</button>
  </div>
</template>

<script>
export default {
  name: "user",
  // we can use props to pass data from parent to child
  // we use the same
  props: {
    age: {
      // type of the prop for validation
      type: Number,
      // indicate that every time a component is using User component, it must pass an age prop
      //required: true,
      // we can set a default value for the prop
      // default: 20
      validator (value) {
        // should return true or false
        return value < 130;
      }
    },
  },
  // array of emit event the parents should expect
  emits: ["update_age"],
  methods: {
    // changing the age property in the child component
    // in a way that will trigger a custom event to allow
    // other components to listen for the change
    onClickAge() {
      // the $emit method is used to trigger a custom event
      // it require the name of the custom event function
      this.$emit("update_age", 3);
    },
  },
};
</script>

<style lang="scss" scoped></style>
