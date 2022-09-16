const randomGoatNames = [
    "Billy",
    "Goku",
    "Joe"
]

const app = Vue.createApp({
    data() {
        return {
            currentGoatIndex: null,
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
        createRandomGoat(){
                const goat = {
                name: randomGoatNames[Math.floor(randomGoatNames.length * Math.random())],
                isGrumpy: Math.random() > 0.5,
                powerLevel: Math.floor(Math.random() * 10000)
            }
            this.currentGoatIndex = -1
            this.upsertGoat(goat)
        },
        upsertGoat(goat){
            const goats = this.goats.slice()
            if ( this.currentGoatIndex === -1){
                goats.push(goat)
            }
            else {
                goats[this.currentGoatIndex] = goat
            }
            this.goats = goats
            this.currentGoatIndex = null
        },
        workoutGoat(goatIndex){
            const goat = this.goats[goatIndex]
            goat.powerLevel += 10
        },
        editGoat(goatIndex){
            this.currentGoatIndex = goatIndex
        }
    }
})

