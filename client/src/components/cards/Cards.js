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
            ${(new CardsConfirmation('none', {
                blockedCredit: 'block',
                creditNumber: 'xxxx xxxx xxxx xxxx',
                creditCvc: 'xx',
                creditDate: 'xx/xx',
                creditName: 'Sasha Kolosov',
                blockedDebit: 'none',
                debitNumber: 'xxxx xxxx xxxx xxxx',
                debitCvc: 'xxx',
                debitDate: 'xx/xx',
                debitName: 'Sasha Kolosov'
            })).render()}
            ${(new CardsFinal('block', {
                blockedCredit: 'block',
                creditNumber: 'xxxx xxxx xxxx xxxx',
                creditCvc: 'xx',
                creditDate: 'xx/xx',
                creditName: 'Sasha Kolosov',
                blockedDebit: 'none',
                debitNumber: 'xxxx xxxx xxxx xxxx',
                debitCvc: 'xxx',
                debitDate: 'xx/xx',
                debitName: 'Sasha Kolosov'
            })).render()}
            ${(new CardsOptions('none')).render()}
        </div>`)
    }
}