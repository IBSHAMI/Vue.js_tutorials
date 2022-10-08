const vm = Vue.createApp({
    data() { // the data is returned as an object and can be shown in the template as javascript expressions
        return { 
            firstName: 'jon', 
            middleName: '',
            lastName: 'snow',
            email: 'jonsnow@gmail.com',
            age: 26,
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
        }
    }, 
    methods: { // methods are functions that can be called in the template
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}` // this refers to the data object
        }, 
        increment() { 
            this.age++ // this refers to the data object
        },
        updateLastName(msg, event) { // e is the event object
            console.log(msg)

            this.lastName = event.target.value
        },
        updateMiddleName(event) {
            this.middleName = event.target.value
        },
    }
}).mount('#app')          

// create a new Vue instance 
// the vue is taken from the cdn link in the index.html file
// the created app is then mounted to the div with id app in the index.html file



// change data inside the vue instance model 
// setTimeout(() => {
//     vm.firstName = 'Arya'
// }, 3000);























// Vue.createApp({
//     data() {
//         return {
//             firstName: 'jon',
//             lastName: 'snow',
//             email: 'jonsnow@gmail',
//         }
//     }
// }).mount('#app2')