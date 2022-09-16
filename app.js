const randomGoatNames = [
    "Billy",
    "Goku",
    "Joe"
]

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
        createGoat(){
            return {
                name: randomGoatNames[Math.floor(randomGoatNames.length * Math.random())],
                isGrumpy: Math.random() > 0.5,
                powerLevel: Math.floor(Math.random() * 10000)
            }
        },
        addGoats(count){
            const newGoats = []
            for (let i = 0; i < count; i++){
                newGoats.push(this.createGoat())
            }
            this.goats = this.goats.concat(newGoats)
        },
        workoutGoat(goatIndex){
            const goat = this.goats[goatIndex]
            goat.powerLevel += 10
        }
    }
})

