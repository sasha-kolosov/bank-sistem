if(window.localStorage.getItem('users') === null) {
    window.localStorage.setItem('users', JSON.stringify([
        {
            id: 1,
            email: 'sashakolosov001@uandex.ru',
            password: 'cfif12345',
            phone: '89152399143',
            name: 'Sasha',
            surname: 'Kolosov',
            age: 16
        }
    ]))
}