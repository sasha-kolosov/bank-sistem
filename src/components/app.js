import Message from './message/message'
import Login from './login/login'
import Register from './register/register'
import Header from './header/header'
import Home from './home/home'
import Finance from './finance/finance'
import Credits from './credits/credits'
import Deposits from './deposits/deposits'
import Shares from './shares/shares'
import Settings from './settings/settings'
import HeaderMedia from './header/header-media/header-media'
import Cards from './finance/cards/cards'
import CardInfo from './finance/cards/cardinfo/cardinfo'
import CardTransfer from './finance/cards/cardtransfer/cardtransfer'
import NewCard from './finance/cards/newcard/newcard'
import Bookkeeping from './finance/bookkeeping/bookkeeping'
import Analytics from './finance/bookkeeping/bookkeeping'

import '../styles/main.css'



export default class App {
    render() {
        if(window.localStorage.getItem('user') === null) {
            return (`
                ${ new Message().render() }
                ${ new Login().render() }
                ${ new Register().render() }
            `)
        } else {
            return (`
                ${ new Message().render() }
                ${ new Header().render() }
                <div class="router-container">
                    ${ new Home().render() }
                    ${ new Finance().render() }
                    ${ new Credits().render() } 
                    ${ new Deposits().render() }
                    ${ new Shares().render() }
                    ${ new Settings().render() }
                    ${ new HeaderMedia().render() }
                    ${ new Cards().render() }
                    ${ new CardInfo().render() }
                    ${ new CardTransfer().render() }
                    ${ new NewCard().render() }
                    ${ new Bookkeeping().render() }
                    ${ new Analytics().render() }
                </div>
            `)
        }
    }
}