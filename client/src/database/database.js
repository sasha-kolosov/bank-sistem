const DB = {
    _cards: [
        { 
            id: 1, 
            type: 'debit', 
            number: '0000 0000 0000 0000', 
            name: 'User name', 
            money: '0', 
            pin: '0000', 
            cvc: '000', 
            date: '00/00',
            info: {
                timeOfRegister: 'MM:HH DD:MM:YY',
                protocol: 'debit-ease'
            }
        }
    ],

    cards: [
        { 
            name : 'User name',
            id : '1',
            type : 'debit',
            number : '0000 0000 0000 0000',
            date : '00/00'
        }
    ],

    getCards(id) {
        for(let i = 0; i < this._cards; i++) {
            if(this._cards[i].id === id) {
                return this._cards[i]
            } else {
                return new Error('Cards with this id is not defined')
            }
        }
    }
}