import login from './login-state'
import register from './register-state'
import Router from '../modeuls/router'
import App from '../components/app'
import CONFIG from './config'
import Message from '../components/message/message'
import root from '../index'

export default function settings() {
    if(window.localStorage.getItem('user') !== null) {
        const config = CONFIG.elements().settings
        config.settingsLogoutButton.addEventListener('click', () => {
            window.localStorage.removeItem('user')
            {
                root.innerHTML = new App().render()
                { new Router().init() }
                CONFIG.elements()
                {
                    login()
                    register()
                }
            }
            new Message('You logout').init()
        })
    }
}