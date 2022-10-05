if(window.localStorage.getItem('users') === null) {
    window.localStorage.setItem('users', JSON.stringify([
        {
            id: 1,
            email: 'sashakolosov001@yandex.ru',
            password: 'cfif12345',
            phone: '89152399143',
            name: 'Sasha',
            surname: 'Kolosov',
            age: 16,
            finance: {
                users: []
            }
        },
        {
            id: 2,
            email: 'anton@yandex.ru',
            password: '123456789',
            phone: '89152299767',
            name: 'Anton',
            surname: 'Demin',
            age: 16,
            finance: {
                users: []
            }
        },
        {
            id: 3,
            email: 'sergey@yandex.ru',
            password: '123456789',
            phone: '89778621904',
            name: 'Sergey',
            surname: 'Leshenko',
            age: 17,
            finance: {
                users: []
            }
        }
    ]))
}