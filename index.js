const app = Vue.createApp({
    data() {
        return {
            goatCount: 5
        }
    },
    computed: {
        dailyFoodRequirments() {
            return this.goatCount * 5
        }
    },
    methods: {
        addGoat(){
            this.goatCount += 1
        },
        addFiveGoats(){
            this.goatCount += 5
        }
    }
})



const appInstance = app.mount('#app')
