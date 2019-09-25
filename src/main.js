import Vue from 'vue'
import Router from 'vue-router'
//import LoginComponent from "../src/components/HellloWorld"
//import SecureComponent from "../src/components/secure"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        }
    ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
