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

    render() {
        return (`<div class="Cards__final" style="display: ${this.blocked}">
            <div class="Cards__final-credit" style="display: ${this.blockedCredit}">
                <div class="Cards__final-credit-block">
                    <div class="Cards__final-credit-block-card" card-id="${this.id}">
                        <div class="Cards__final-credit-block-card-title">
                            Bank
                        </div>
                        <div class="Cards__final-credit-block-card-number">
                            ${this.number}
                        </div>
                        <div class="Cards__final-credit-block-card-date">
                            ${this.date}
                        </div>
                        <div class="Cards__final-credit-block-card-info">
                            <div class="Cards__final-credit-block-card-info-name">
                                ${this.name}
                            </div>
                            <div class="Cards__final-credit-block-card-info-protocol">
                                <i class="bi bi-check2-circle"></i>
                            </div>
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
            <div class="Cards__final-debit" style="display: ${this.blockedDebit}">
                <div class="Cards__final-debit-block">
                    <div class="Cards__final-debit-block-card" card-id="${this.id}">
                        <div class="Cards__final-debit-block-card-title">
                            Bank
                        </div>
                        <div class="Cards__final-debit-block-card-number">
                            ${this.number}
                        </div>
                        <div class="Cards__final-debit-block-card-date">
                            ${this.date}
                        </div>
                        <div class="Cards__final-debit-block-card-info">
                            <div class="Cards__final-debit-block-card-info-name">
                                ${this.name}
                            </div>
                            <div class="Cards__final-debit-block-card-info-protocol">
                                <i class="bi bi-check2-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Cards__final-debit-button">
                    <div class="Cards__final-debit-button-block">
                        <div class="Cards__final-debit-button-block-finish">
                            <span id="ln-cards-final-debit-button-block-finish">Finish</span>
                        </div>
                        <div class="Cards__final-debit-button-block-options" card-id="${this.id}">
                            <span id="ln-cards-final-debit-button-block-options">Options</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}