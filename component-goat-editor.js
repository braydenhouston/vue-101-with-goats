app.component("goat-editor", {
    template: /* html */ `
        <form 
            class="goat-editor mb-5 p-5 has-background-white-ter"
            @submit.prevent="submit"
        >
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                        <input
                        class="input" 
                        type="text"
                        v-model.trim="value.name"
                        />
                </div>
            </div>

            <div class="field">
                <label class="label">Grumpy</label>
                <div class="control">
                    <label class="checkbox">
                        <input 
                        type="checkbox"
                        v-model="value.isGrumpy"
                        />
                        is Grumpy
                    </label>
                </div>
            </div>

            <div class="field">
                <label class="label">Power Level</label>
                <div class="control">
                    <input 
                    class="input"
                    type="number"
                    v-model.number="value.powerLevel"
                    />
                </div>
            </div>

            <button
                class="button is-success"
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
