<template>
    <div>
        <p> the user is {{ age }} years old</p>
    </div>
</template>

<script>
export default {
    name: "user",
    // we can use props to pass data from parent to child
    // we use the same 
    props: ["age"],
}

</script>

<style lang="scss" scoped>

</style>