function login() {
    if(window.localStorage.getItem('user') === null) {
        const users = new Connect('users')
        const state = CONFIG.elements().login
        state.loginButton.addEventListener('click', () => {
            const response = new Validate('login').init()

            if(response.status === 200) {
                try {
                    const user = users.get(['email', 'password'], [`${state.loginEmail.value.toLowerCase()}`, `${state.loginPassword.value}`])

                    try {
                        window.localStorage.setItem('user', JSON.stringify(user))
                        {
                            root.innerHTML = new App().render()
                            { new Router().init() }
                            CONFIG.elements()
                            {
                                settings()
                            }
                        }
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