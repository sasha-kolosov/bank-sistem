const DB = {
    _cards: [
        { 
            id: 1, 
            type: 'debit', 
            number: 'xxxxxxxxxxxxxxxx', 
            name: 'Sasha Kolosov', 
            money: '0', 
            pin: 'xxxx', 
            cvc: 'xxx', 
            date: 'xx/xx',
            info: {
                timeOfRegister: 'MM:HH DD:MM:YY',
                protocol: 'debit-ease'
            }
        }
    ],

    cards: [
        { 
            id: 1, 
            number: 'xxxxxxxxxxxxxxxx', 
            name: 'Sasha Kolosov' 
        }
    ],

    getCards(id) {
        for(let i = 0; i < this._cards; i++) {
            if(this._cards[i].id === id) {
                return this._cards[i]
            }
        }
    }
}