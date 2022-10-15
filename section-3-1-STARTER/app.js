let vm = Vue.createApp({
    data() {
        return { 
            prespective: 100, 
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        }
    },
    computed: {
        boxStyles() {
            return {
                transform: `perspective(${this.prespective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`
            }
        },
    },
    methods: {
        reset () { 
            this.prespective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        }, 
        async copy() {
            let text = `perspective(${this.prespective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`;
            await navigator.clipboard.writeText(text);

            // show a message to user 
            alert('Copied to clipboard');
        },
    },
    watch: {},
}).mount("#app");