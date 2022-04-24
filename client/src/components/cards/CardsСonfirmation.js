class CardsConfirmation extends Components {
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
        return (`<div class="Cards__confirmation" style="display: ${this.blocked}">
            <div class="Cards__confirmation-credit" style="display: ${this.blockedCredit}"></div>
            <div class="Cards__confirmation-debit" style="display: ${this.blockedDebit}">
                <div class="Cards__confirmation-debit-block">
                    <div class="Cards__confirmation-debit-block-title">
                        <span id="ln-cards-confirmation-debit-block-title">Confirmation of registration</span>
                    </div>
                    <div class="Cards__confirmation-debit-block-info">
                        <div class="Cards__confirmation-debit-block-info-card">
                            <span id="ln-cards__confirmation-debit-block-info-card">Card: Debit</span>
                        </div>
                        <div class="Cards__confirmation-debit-block-info-name">
                            <span id="ln-cards__confirmation-debit-block-info-name">Name: </span>
                            ${this.debitName}
                        </div>
                        <div class="Cards__confirmation-debit-block-info-number">
                            <span id="ln-cards__confirmation-debit-block-info-number">Number: </span>
                            ${this.debitNumber}
                        </div>
                        <div class="Cards__confirmation-debit-block-info-cvc">
                            <span id="ln-cards__confirmation-debit-block-info-cvc">CVC:</span>
                            ${this.debitCvc}
                        </div>
                        <div class="Cards__confirmation-debit-block-info-date">
                            <span id="ln-cards__confirmation-debit-block-info-date">Date: </span>
                            ${this.debitDate}
                        </div>
                        <div class="Cards__confirmation-debit-block-info-options">
                            <ul>
                                <li>
                                    <span id="ln-cards-confirmation-debit-block-info-options-cashback">Increased cashback</span>
                                </li>
                                <li>
                                    <span id="ln-cards-confirmation-debit-block-info-options-operations">Alerts about operations</span>
                                </li>
                                <li>
                                    <span id="ln-cards-confirmation-debit-block-info-options-support">Card support 24/7</span>
                                </li>
                                <li>
                                    <span id="ln-cards-confirmation-debit-block-info-options-transfers">Free transfers to partner bank cards</span>
                                </li>
                                <li>
                                    <span id="ln-cards-confirmation-debit-block-info-options-bankmusic">BankMusic is free for 2 months</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="Cards__confirmation-debit-block-button">
                        <div class="Cards__confirmation-debit-block-button-confirmation">
                            <span id="ln-cards-confirmation-debit-block-button-confirmation">Register</span>
                        </div>
                        <div class="Cards__confirmation-debit-block-button-back">
                            <span id="ln-cards-confirmation-debit-block-button-back">Back</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}