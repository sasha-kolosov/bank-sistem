class Cards extends Components {

    cards() {
        if(DB.cards[0]) {
            let code = ``
            for(let i = 0; i < DB.cards.length; i++) {
                code += ``
            }
            return code
        } else {
            return (`<div class="Cards__nocard">
                <div class="Cards__nocard-title">
                    <span id="ln-cards-nocard-title">Register now — buy today</span>
                </div>
                <div class="Cards__nocard-offers">
                    <div class="Cards__nocard-offers-left-block">
                        <div class="Cards__nocard-offers-left">
                            <div class="Cards__nocard-offers-left-title">
                                <span id="ln-cards-nocard-offers-left-title"></span>
                            </div>
                            <div class="Cards__nocard-offers-left-text">
                                <span id="ln-cards-nocard-offers-left-text"></span>
                            </div>
                            <div class="Cards__nocard-offers-left-button">
                                <span id="ln-cards-nocard-offers-left-button"></span>
                            </div>
                        </div>
                    </div>
                    <div class="Cards__nocard-offers-right-block">
                        <div class="Cards__nocard-offers-right">
                            <div class="Cards__nocard-offers-right-title">
                                <span id="ln-cards-nocard-offers-right-title"></span>
                            </div>
                            <div class="Cards__nocard-offers-right-text">
                                <span id="ln-cards-nocard-offers-right-tet"></span>
                            </div>
                            <div class="Cards__nocard-offers-right-button">
                                <span id="ln-cards-nocard-offers-right-button"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`)
        }
    }

    code() {
        return (`<div class="Cards" id="cards" component="${this.id}">
            ${this.cards()}
        </div>`)
    }
}