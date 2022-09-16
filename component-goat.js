app.component("goat", {
    template: /* html */ `
        <div 
            class="goat"
        >
            <span>name: {{name}}:</span>
            <span>is grump: {{isGrumpy}}:</span>
            <span>power level: {{powerLevel || "unknown"}}:</span>
            <button
                @click="$emit('workout')"
            >Send to Gym</button>
            <button
                @click="$emit('edit')"
            >Edit Goat</button>
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
})