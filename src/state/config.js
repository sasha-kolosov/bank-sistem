const CONFIG = {
    render() {
        login()
        register()
    },
    newUser(email, password, phone) {
        return {
            id: 0,
            email: email,
            password: password,
            phone: phone,
            name: 'User',
            surname: '',
            age: 0,
            finance: {
                users: []
            }
        }
    },
    elements: {
        login: {
            loginEmail: document.getElementById('login-form-email-input'),
            loginPassword: document.getElementById('login-form-password-input'),
            loginButton: document.getElementById('login-form-button-submit')
        },
        register: {
            registerEmail: document.getElementById('register-form-email-input'),
            registerPhone: document.getElementById('register-form-phone-input'),
            registerPassword: document.getElementById('register-form-password-input'),
            registerButton: document.getElementById('register-form-button-submit')
        }
    }
}