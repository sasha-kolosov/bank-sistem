class CardsOptions extends Components {
    constructor(blocked, options) {
        super(blocked)
    }

    code() {
        return (`<div class="Cards__options" style="display: ${this.blocked}">
            <h1>CardsOptions</h1>
        </div>`)
    }
}