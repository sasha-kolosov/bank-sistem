class Transaction {
    constructor(options) {
        this.response = options.response
    }

    transaction() {
        if(this.response == 'Enter the correct data') {
            return this.response
        } else if(this.response == 'Server error') {
            return this.response
        } else {
            const token = this.response.split('&')
            const tokens = new Connect(tokenDB)
            const cards = new Connect(cardsProDB)

            cards.put('id', token[1], 'money', (cards.get('id', token[1]).money - parseInt(token[3])))

            cards.put('id', token[2], 'money', (cards.get('id', token[2]).money + parseInt(token[3])))
            
            tokens.post({
                id: (tokens.get()[tokens.get().length - 1].id + 1),
                token: this.response
            })
        }
    }
}