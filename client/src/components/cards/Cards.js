class Cards extends Components {
    code() {
        if(DB.cards[0]) {
            return (`<div class="Cards" id="cards" component="${this.id}">
                ${(new CardsIscard(6)).render()}
            </div>`)
        } else {
            return (`<div class="Cards" id="cards" component="${this.id}">
                ${(new CardsNocard(7)).render()}
            </div>`)
        }
    }
}