app.component("goat", {
    template: /* html */ `
        <div 
            class="goat"
        >
            <span>name: {{name}}:</span>
            <span>is grump: {{isGrumpy}}:</span>
            <span>power level: {{powerLevel || "unknown"}}:</span>
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