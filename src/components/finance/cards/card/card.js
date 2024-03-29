import './card.css'

export default class Card {
    constructor(options) {
        this.number = options.number
        this.id = options.id
        this.name = options.name
        this.surname = options.surname
    }

    render() {
        return `<div class="Card" path="finance/cards/card?card=${this.id}">
            <div class="Card__number">
                ${this.number}
            </div>
            <div class="Card__name">
                ${this.name + ' ' + this.surname} 
            </div> 
        </div>` 
    }
}