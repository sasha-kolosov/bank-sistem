class CardsFinal extends Components {
    constructor(blocked, options) {
        super(blocked)
        this.blockedCredit = options.blockedCredit
        this.creditNumber = options.creditNumber
        this.creditCvc = options.creditCvc
        this.creditDate = options.creditDate
        this.creditName = options.creditName
        this.blockedDebit = options.blockedDebit
        this.debitNumber = options.debitNumber
        this.debitCvc = options.debitCvc
        this.debitDate = options.debitDate
        this.debitName = options.debitName
    }

    code() {
        return (`<div class="Cards__final" style="display: ${this.blocked}">
            <div class="Cards__final-credit" style="display: ${this.blockedCredit}">
                <div class="Cards__final-credit-block">
                    <div class="Cards__final-credit-block-card">
                        <h1>Credit card</h1>
                    </div>
                </div>
                <div class="Cards__final-credit-button">
                    <div class="Cards__final-credit-button-block">
                        <div class="Cards__final-credit-button-block-finish">
                            <span id="ln-cards-final-credit-button-block-finish">Finish</span>
                        </div>
                        <div class="Cards__final-credit-button-block-options">
                            <span id="ln-cards-final-credit-button-block-options">Options</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}