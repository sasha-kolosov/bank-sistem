const CONFIG = {
    getOne() {
        this.elements().login.loginEmail
    },
    newUser(email, password, phone) {
        return {
            id: 0,
            name: '',
            surname: '',
            age: 0,
            email: email,
            password: password,
            phone: phone,
            finance: {
                cards: []
            }
        }
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
                },
                finance: {
                    cards: {
                        cardtransfer: {
                            cardtransferNumberInput: document.getElementById('cardtransfer-block-cards-cardnumber-input'),
                            cardtransferUserName: document.getElementById('cardtransfer-block-result-username'),
                            cardtransferAmountInput: document.getElementById('cardtransfer-block-cards-amount-input'),
                            cardtransferAmount: document.getElementById('cardtransfer-block-result-amount'),
                            cardtransferButton: document.getElementById('cardtransfer-block-result-button-block')
                        }
                    }
                }
            }
        }
    }
}

export default CONFIG