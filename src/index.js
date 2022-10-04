const root = document.getElementById('root')

root.innerHTML = new App().render()

const router = () => new Router().init()

router()

{
    if(window.localStorage.getItem('user') === null) {
        const users = new Connect('users')
        const elements = {
            loginEmail: document.getElementById('login-form-email-input'),
            loginPassword: document.getElementById('login-form-password-input'),
            loginButton: document.getElementById('login-form-button-submit'),
            registerEmail: document.getElementById('register-form-email-input'),
            registerPhone: document.getElementById('register-form-phone-input'),
            registerPassword: document.getElementById('register-form-password-input'),
            registerButton: document.getElementById('register-form-button-submit')
        }

        elements.loginButton.addEventListener('click', () => {
            const response = new Validate('login').init()

            if(response.status === 200) {
                try {
                    const user = users.get(['email', 'password'], [`${elements.loginEmail.value}`, `${elements.loginPassword.value}`])

                    try {
                        window.localStorage.setItem('user', JSON.stringify(user))
                        root.innerHTML = new App().render()
                        router()
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