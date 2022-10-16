<template>
    <div>
        <p>>{{ msg }}e</p>
    </div>
</template>

<script>
export default {
  name: 'Greeting', 
  data() { 
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
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
