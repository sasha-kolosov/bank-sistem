function register() {
    if(window.localStorage.getItem('user') === null) {
        const users = new Connect('users')
        CONFIG.elements.register.registerButton.addEventListener('click', () => {
            const response = new Validate('register').init()

            if(response.status === 200) {
                try {
                    users.get('email', `${CONFIG.elements.register.registerEmail.value}`)
                    new Message('User already exists').init()
                } catch(e) {
                    try {
                        const user = users.post(CONFIG.newUser(`${CONFIG.elements.register.registerEmail.value}`, `${CONFIG.elements.register.registerPassword.value}`, `${CONFIG.elements.register.registerPhone.value}`))
                        window.localStorage.setItem('user', JSON.stringify(user))
                        root.innerHTML = new App().render()
                        router()
                        CONFIG.render()
                    } catch(e) {
                        if(!e.name == 'TypeError') {
                            console.log(e)
                        }
                    }
                }
            } else {
                new Message('Incorrct email or password').init()    
            }
        })
    }
}