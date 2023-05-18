import settings from './settings-state'
import finance from './finance-state'
import Router from '../modeuls/router'
import App from '../components/app'
import CONFIG from './config'
import Message from '../components/message/message'
import Connect from '../modeuls/connect'
import Validate from '../modeuls/validate'
import root from '../index'

export default function login() {
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
                                finance()
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