import App from './components/app'
import Router from './modeuls/router'
import Query from './modeuls/query'
import { startLogin, startApp } from './state/start-state'
import CONFIG from './state/config'

const root = document.getElementById('root')

root.innerHTML = new App().render()

{
    startLogin()
    startApp()
    CONFIG.elements()
}

{ new Router().init() }

{ new Query().init() }

export default root