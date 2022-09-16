app.component("goat-editor", {
    template: /* html */ `
        <form 
            class="goat-editor"
            @submit.prevent="submit"
        >
            <div>
                <label>
                    <span>Name</span>
                    <input 
                        type="text"
                        v-model.trim="value.name"
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>is Grumpy</span>
                    <input 
                        type="checkbox"
                        v-model="value.isGrumpy"
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>Power Level</span>
                    <input 
                        type="number"
                        v-model.number="value.powerLevel"
                    />
                </label>
            </div>
            <button
                type="submit"
            >Submit</button>
        </form>
    `,
    props: {
        initalGoat: {
            type: Object,
            require: false,
            default() {
                return {}
            }
        }
    },
    data(){
        return {
            value: {
                ...this.initalGoat
            }
        }
    },
    methods:{
        submit() {
            this.$emit(
                'goat',
                this.value
            )
        }
    }
})
