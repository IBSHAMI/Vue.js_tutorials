let vm = Vue.createApp({
    data() {
        return { 
            prespective: 100, 
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    },
    methods: {
        reset () { 
            this.prespective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        }
    },
    computed: {},
    watch: {},
}).mount("#app");