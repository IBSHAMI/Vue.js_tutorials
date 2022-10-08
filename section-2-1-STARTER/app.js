const vm = Vue.createApp({
    data() { // the data is returned as an object and can be shown in the template as javascript expressions
        return { 
            firstName: 'jon', 
            lastName: 'snow',
            email: 'jonsnow@gmail.com',
            url: 'https://google.com',
        }
    }, 
    methods: { // methods are functions that can be called in the template
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}` // this refers to the data object
        }
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