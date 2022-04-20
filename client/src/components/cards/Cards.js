class Cards extends Components {
    code() {
        return (`<div class="Cards" id="cards" style="display: ${this.blocked}">
            ${(new CardsIscard('none')).render()}
            ${(new CardsNocard('none')).render()}
            ${(new CardsRegister('block')).render()}
        </div>`)
    }
}