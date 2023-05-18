import login from './login-state'
import register from './register-state'
import settings from './settings-state'
import finance from './finance-state'

function startLogin(){   
    login()
    register()
}

function startApp(){
    settings()
    finance()
}

export { startLogin, startApp }