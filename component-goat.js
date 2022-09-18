app.component("goat", {
    template: /* html */ `
        <div 
            class="goat"
        >
            <div
                class="card mb-3"
            >
                <header class="card-header">
                    <p class="card-header-title">
                        {{name}} 
                    </p>
                    <div class="card-header-icon">
                        <span class="icon">
                            <i class="fas fa-duotone fa-ram" aria-hidden="true"></i>
                        </span>
                    </div>
                     
                </header>
                <div class="card-content">
                        <div class="content">
                            Mood: <i 
                            class="fa-regular" 
                            :class="goatMood"
                            ></i>
                            <br>
                            Power: {{powerLevel || "unknown"}}
                        </div>
                    </div>
                <footer class="card-footer">
                    <a 
                    class="card-footer-item"
                    @click="$emit('workout')"
                    >
                        Workout
                    </a>
                    <a 
                    class="card-footer-item"
                    @click="$emit('edit')"
                    >
                        Edit
                    </a>
                    <a 
                    class="card-footer-item"
                    @click="$emit('delete')"
                    >
                        Delete
                    </a>
                </footer>
            </div>
        </div>
    `,
    props: {
        name: {
            type: String,
            require: true
        },
        isGrumpy: {
            type: Boolean,
            require: false
        },
        powerLevel: {
            type: Number,
            require: false
        }
    }
    ,
    computed: {
        goatMood() {
            return {
                'fa-face-angry': this.isGrumpy,
                'fa-face-smile': !this.isGrumpy,
            }
        }
    }
}) 