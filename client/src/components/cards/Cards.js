class Cards extends Components {
    code() {
        return (`<div class="Cards" id="cards" style="display: ${this.blocked}">
            ${(new CardsIscard('none')).render()}
            ${(new CardsNocard('none')).render()}
            ${(new CardsRegister('none', {
                blockedCreditForm: 'block',
                blockedDebitForm: 'none',
                borderCredit: 'active',
                borderDebit: '',
                blockedCreditFinal: 'block',
                blockedDebitFinal: 'none'
            })).render()}
            ${(new CardsConfirmation('block')).render()}
        </div>`)
    }
}