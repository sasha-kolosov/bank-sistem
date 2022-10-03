const root = document.getElementById('root')

root.innerHTML = new App().render()

{ new Router().init() } // router start working

{ // register and login
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
    }
}