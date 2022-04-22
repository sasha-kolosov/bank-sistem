const DB = {
    _cards: [
        { id: 1, number: 5478894348390011, name: 'Sasha Kolosov', money: 18070, pin: 3567, cvc: '342', date: '10/32' },
        { id: 2, number: 3465901423905478, name: 'Anton Demin', money: 15000, pin: 8439, cvc: '436', date: '02/32' },
        { id: 3, number: 9154025869278439, name: 'Vika Lagutina', money: 12500, pin: 9178, cvc: '235', date: '06/32' },
        { id: 4, number: 3927951085396598, name: 'Dima Medvedev', money: 20800, pin: 2954, cvc: '856', date: '09/32' }
    ],

    cards: [
        { id: 1, number: 5478894348390011, name: 'Sasha Kolosov' },
        { id: 2, number: 3465901423905478, name: 'Anton Demin' },
        { id: 3, number: 9154025869278439, name: 'Vika Lagutina' },
        { id: 4, number: 3927951085396598, name: 'Dima Medvedev' }
    ],

    getCards(id) {
        for(let i = 0; i < this._cards; i++) {
            if(this._cards[i].id === id) {
                return this._cards[i]
            }
        }
    }
}