import './cards.css'
import Connect from '../../../modeuls/connect'
import Card from './card/card'

export default class Cards {
    cards() {
        const user = (new Connect('user')).get()

        let layout = ''

        if(user.finance.cards.length == 0) {
            return `<div class="Cards__block-nocards">You haven'to cards</div>`
        }

        for(let i = 0; i < user.finance.cards.length; i++) {
            const card = (new Connect('cards')).get(['id', 'userId'], [user.finance.cards[i], user.id])
            layout += `<div class="Cards__block-container-item">
                ${(new Card({
                    number: card.number,
                    id: card.id,
                    name: user.name,
                    surname: user.surname
                }).render())}
            </div>`
        }

        return layout
    }   

    newcard() {
        const user = (new Connect('user')).get()
        if(user.finance.cards.length < 5) {
            return `<div class="Cards__block-container-item">
                <div class="Cards__block-conntainer-item-newcard" path="finance/cards/newcard">
                    <div class="Cards__block-conntainer-item-newcard-plus">
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>`
        } else {
            return ``
        }
    }

    render() {
        return (`<div class="Cards" page="finance/cards">
            <div class="Cards__container">
                <div class="Cards__block">
                    <h1>Cards page</h1>
                    <div class="Cards__block-container">
                        ${ this.cards() }
                        ${this.newcard()}
                        <div class="Cards__block-container-item">
                            <div class="Cards__block-conntainer-item-transaction" path="finance/cards/cardtransfer">
                                <div class="Cards__block-conntainer-item-transaction-img">
                                    <i class="bi bi-currency-exchange"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}