<template>
    <div>
        <p v-if=" age > 25">>{{ msg }}</p>
        <p v-else>you have to be older than 25 to view this </p>
    </div>
</template>

<script>
export default {
  name: 'Greeting', 
  data() { 
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ["age"],
}
</script>

<style scoped lang="scss"> 
p {
  color: red;

  &:hover {
    color: darken(red, 30%);
  }


}

</style>
