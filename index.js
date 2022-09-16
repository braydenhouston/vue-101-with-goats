const app = Vue.createApp({
    data() {
        return {
            goats: [
                {
                    name: "Gruff",
                    isGrumpy: true,
                    powerLevel: 100
                },
                {
                    name: "Billy",
                    isGrumpy: false,
                    powerLevel: 30
                },
                {
                    name: "Joe",
                    isGrumpy: false,
                    powerLevel: 42
                },
                {
                    name: "Sam",
                    isGrumpy: true,
                    powerLevel: 42
                },
                {
                    name: "Goku",
                    isGrumpy: true,
                    powerLevel: 9001
                }
            ]
        }
    },
    computed: {
        goatCount() {
            return this.goats.length
        },
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
