if(window.localStorage.getItem('users') === null) {
    window.localStorage.setItem('users', JSON.stringify([
        {
            id: 1,
            email: 'sashakolosov001@yandex.ru',
            password: 'cfif12345',
            phone: '+79152399143',
            name: 'Sasha',
            surname: 'Kolosov',
            age: 16,
            finance: {
                cards: [1, 5, 6]
            }
        },
        {
            id: 2,
            email: 'anton@yandex.ru',
            password: '123456789',
            phone: '+79152299767',
            name: 'Anton',
            surname: 'Demin',
            age: 16,
            finance: {
                cards: [2]
            }
        },
        {
            id: 3,
            email: 'sergey@yandex.ru',
            password: '123456789',
            phone: '+79778621904',
            name: 'Sergey',
            surname: 'Leshenko',
            age: 17,
            finance: {
                cards: [3]
            }
        },
        {
            id: 4,
            email: 'akim@yandex.ru',
            password: '123456789',
            phone: '+79255141487',
            name: 'Akim',
            surname: 'Tashtanov',
            age: 18,
            finance: {
                cards: [4]
            }
        }
    ]))
}