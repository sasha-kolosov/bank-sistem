const CONFIG = {
    newUser(email, password, phone) {
        return new ObjectRemaker({
            id: 0,
            name: '',
            surname: '',
            age: 0,
            finance: {
                cards: []
            }
        }).init({
            email: email,
            password: password,
            phone: phone
        })
    },
    elements() {
        if(window.localStorage.getItem('user') === null) {
            return {
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
        } else {
            return {
                settings: {
                    settingsLogoutButton: document.getElementById('settings-container-logout-button')
                }
            }
        }
    }
}