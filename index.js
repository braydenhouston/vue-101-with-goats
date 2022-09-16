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
        addGoats(count){
            this.goatCount += count
        }
    }
})



const appInstance = app.mount('#app')
