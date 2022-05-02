const cardsProDB = [
    { 
        id: 1, 
        type: 'debit', 
        name: 'User name', 
        number: '0000 0000 0000 0000', 
        background: './client/assets/debit-background.avif',
        money: '0', 
        pin: '0000', 
        cvc: '000', 
        date: '00/00',
        info: {
            timeOfRegister: 'MM:HH DD:MM:YY',
            protocol: 'debit-ease'
        },
        expenses: [
            {
                type: 'food',
                money: 10500
            },
            {
                type: 'sport',
                money: 0
            },
            {
                type: 'education',
                money: 7300
            },
            {
                type: 'culture',
                money: 2900
            }
        ]
    },
    { 
        id: 2, 
        type: 'credit', 
        name: 'User name', 
        number: '0000 0000 0000 0000', 
        background: './client/assets/credit-background.avif',
        money: '0', 
        pin: '0000', 
        cvc: '000', 
        date: '00/00',
        info: {
            timeOfRegister: 'MM:HH DD:MM:YY',
            protocol: 'credit-ease'
        },
        expenses: [
            {
                type: 'food',
                money: 24080
            },
            {
                type: 'education',
                money: 29000
            },
            {
                type: 'culture',
                money: 14000
            }
        ]
    }
]