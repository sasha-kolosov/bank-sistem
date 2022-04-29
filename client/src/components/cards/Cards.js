class Cards extends Components {
    code() {
        return (`<div class="Cards" id="cards" style="display: ${this.blocked}">
            ${(new CardsIscard('block')).render()}
            ${(new CardsNocard('none')).render()}
            ${(new CardsRegister('none', {
                blockedCreditForm: 'block',
                blockedDebitForm: 'none',
                borderCredit: 'active',
                borderDebit: '',
                blockedCreditFinal: 'block',
                blockedDebitFinal: 'none'
            })).render()}
            ${(new CardsConfirmation('none', {
                blockedCredit: 'block',
                blockedDebit: 'none',
                number: '0000 0000 0000 0000',
                cvc: '000',
                date: '00/00',
                name: 'Sasha Kolosov'
            })).render()}
            ${(new CardsFinal('none', {
                blockedCredit: 'block',
                blockedDebit: 'none',
                id: 'id',
                number: '0000 0000 0000 0000',
                date: '00/00',
                name: 'Sasha Kolosov'
            })).render()}
            ${(new CardsOptions('none', {
                id: '1'
            })).render()}
        </div>`)
    }
}