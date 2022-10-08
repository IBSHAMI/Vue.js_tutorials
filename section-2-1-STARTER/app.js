Vue.createApp({
    data() { // the data is returned as an object and can be shown in the template as javascript expressions
        return { 
            firstName: 'jon', 
            lastName: 'snow',
            email: 'jonsnow@gmail.com',
        }
    }
}).mount('#app') // create a new Vue instance 
                           // the vue is taken from the cdn link in the index.html file
                           // the created app is then mounted to the div with id app in the index.html file


// Vue.createApp({
//     data() {
//         return {
//             firstName: 'jon',
//             lastName: 'snow',
//             email: 'jonsnow@gmail',
//         }
//     }
// }).mount('#app2')