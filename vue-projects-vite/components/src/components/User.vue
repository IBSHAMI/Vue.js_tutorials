<template>
    <div>
        <p> the user is {{ age }} years old</p>

        <button @click.prevent="onClickAge">update age from user component</button>
    </div>
</template>

<script>
export default {
    name: "user",
    // we can use props to pass data from parent to child
    // we use the same 
    props: ["age"],
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
        }
    }
}

</script>

<style lang="scss" scoped>

</style>