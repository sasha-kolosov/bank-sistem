const cardsProDB = [
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
        },
        expenses: {} // Затраты
    },
    { 
        id: 2, 
        type: 'credit', 
        number: '0000 0000 0000 0000', 
        name: 'User name', 
        money: '0', 
        pin: '0000', 
        cvc: '000', 
        date: '00/00',
        info: {
            timeOfRegister: 'MM:HH DD:MM:YY',
            protocol: 'debit-ease'
        },
        expenses: {} // Затраты 
    }
]