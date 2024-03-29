import settings from './settings-state'
import finance from './finance-state'
import Router from '../modeuls/router'
import App from '../components/app'
import CONFIG from './config'
import Message from '../components/message/message'
import Connect from '../modeuls/connect'
import Validate from '../modeuls/validate'
import root from '../index'

export default function register() {
    if(window.localStorage.getItem('user') === null) {
        const users = new Connect('users')
        const config = CONFIG.elements().register
        config.registerButton.addEventListener('click', () => {
            const response = new Validate('register').init()

            if(response.status === 200) {
                try {
                    users.get('email', `${config.registerEmail.value.toLowerCase()}`)
                    new Message('User already exists').init()
                } catch(e) {
                    try {
                        const phone = config.registerPhone.value.replace(/[^0-9]/g, '')
                        const user = users.post(CONFIG.newUser(`${config.registerEmail.value.toLowerCase()}`, `${config.registerPassword.value}`, `${phone}`))
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
                }
            } else {
                new Message('Incorrct email or password').init()    
            }
        })
    }
}