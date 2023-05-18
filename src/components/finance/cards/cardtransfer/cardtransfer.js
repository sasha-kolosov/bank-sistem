import './cardtransfer.css'
import Connect from '../../../../modeuls/connect'

export default class CardTransfer {
    constructor() {
        this.user = new Connect('user').get()
    }

    cards() {
        let layout = ''

        for(let i = 0; i < this.user.finance.cards.length; i++) {
            const card = new Connect('cards').get(['id', 'userId'], [this.user.finance.cards[i], this.user.id])
            layout += `<div 
                class="CardTransfer__block-cards-slider-cards-option" 
                id="cardtransfer-block-cards-slider-cards-option-${i}" 
                style="left: ${i * 400}px"
                >
                <div class="CardTransfer__block-cards-slider-cards-option-number">Form ${card.number}</div>
                <div class="CardTransfer__block-cards-slider-cards-option-money">${card.money % 1 == 0 ? card.money + '.00' : card.money}₽</div>
            </div>`
        }

        return layout
    }

    dots() {
        let layout = ''

        for(let i = 0; i < this.user.finance.cards.length; i++) {
            layout += `<div class="CardTransfer__block-cards-slider-dots-dot ${i == 0 ? 'CardTransfer__block-cards-slider-dots-dot-active' : ''}"></div>`
        }

        return layout
    }

    render() {
        return (`<div page="finance/cards/cardtransfer" class="CardTransfer">
            <div class="CardTransfer__container">
                <div class="CardTransfer__block">
                    <h1>Transaction page</h1>
                    <div class="CardTransfer__block-container">
                        <div class="CardTransfer__block-cards">
                            <div class="CardTransfer__block-cards-slider">
                                <div class="CardTransfer__block-cards-slider-block">
                                    <div class="CardTransfer__block-cards-slider-cards">
                                        ${this.cards()}
                                    </div>
                                </div>
                                <div class="CardTransfer__block-cards-slider-dots">
                                    ${this.dots()}
                                </div>
                            </div>
                            <div class="CardTransfer__block-cards-cardnumber">
                                <input 
                                    type="text" 
                                    placeholder="Card number of recipient" 
                                    class="CardTransfer__block-cards-cardnumber-input" 
                                    id="cardtransfer-block-cards-cardnumber-input"
                                />
                            </div>
                            <div class="CardTransfer__block-cards-amount">
                                <input 
                                    type="text" 
                                    placeholder="Amount" 
                                    class="CardTransfer__block-cards-amount-input"
                                    id="cardtransfer-block-cards-amount-input"
                                />
                            </div>
                        </div>
                        <div class="CardTransfer__block-result">
                            <div class="CardTransfer__block-result-container">
                                <div class="CardTransfer__block-result-icon">
                                    <i class="bi bi-bank"></i>
                                </div>
                                <div class="CardTransfer__block-result-username">
                                    <span id="cardtransfer-block-result-username">Card not found</span>
                                </div>
                                <div class="CardTransfer__block-result-type">
                                    Transaction
                                </div>
                                <div class="CardTransfer__block-result-amount">
                                    <span id="cardtransfer-block-result-amount">0</span>₽
                                </div>
                                <div class="CardTransfer__block-result-button">
                                    <div class="CardTransfer__block-result-button-block" id="cardtransfer-block-result-button-block">
                                        Transfer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}