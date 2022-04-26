class CardsFinal extends Components {
    constructor(blocked, options) {
        super(blocked)
        this.blockedCredit = options.blockedCredit
        this.blockedDebit = options.blockedDebit
        this.id = options.id
        this.number = options.number
        this.cvc = options.cvc
        this.date = options.date
        this.name = options.name
    }

    code() {
        return (`<div class="Cards__final" style="display: ${this.blocked}">
            <div class="Cards__final-credit" style="display: ${this.blockedCredit}">
                <div class="Cards__final-credit-block">
                    <div class="Cards__final-credit-block-card" card-id="${this.id}">
                        <div class="Cards__final-credit-block-card-title">
                            Bank
                        </div>
                    </div>
                </div>
                <div class="Cards__final-credit-button">
                    <div class="Cards__final-credit-button-block">
                        <div class="Cards__final-credit-button-block-finish">
                            <span id="ln-cards-final-credit-button-block-finish">Finish</span>
                        </div>
                        <div class="Cards__final-credit-button-block-options" card-id="${this.id}">
                            <span id="ln-cards-final-credit-button-block-options">Options</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}