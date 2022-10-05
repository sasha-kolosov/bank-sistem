function login() {
    if(window.localStorage.getItem('user') === null) {
        const users = new Connect('users')
        CONFIG.elements.login.loginButton.addEventListener('click', () => {
            const response = new Validate('login').init()

            if(response.status === 200) {
                try {
                    const user = users.get(['email', 'password'], [`${CONFIG.elements.login.loginEmail.value}`, `${CONFIG.elements.login.loginPassword.value}`])

                    try {
                        window.localStorage.setItem('user', JSON.stringify(user))
                        root.innerHTML = new App().render()
                        router()
                        CONFIG.render()
                    } catch(e) {
                        if(!e.name == 'TypeError') {
                            console.log(e)
                        }
                    }
                } catch(e) {
                    if(e.message == 'Incorrect data') {
                        new Message('User not found').init()
                    }
                }
            } else {
                new Message('Incorrct email or password').init()    
            }
        })
    }
}