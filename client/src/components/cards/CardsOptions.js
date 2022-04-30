class CardsOptions extends Components {
    constructor(blocked, options) {
        super(blocked)
        this.id = options.id
    }

    state() { return cardsState.cardsOptions.cards() }

    card() {
        const cards = this.state()
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].id == this.id) {
                return cards[i]
            }
        }
    }

    chart() {
        const elements = { layout : '', chart : new Chart({ arr: this.card().expenses }).start() }

        return elements.layout 
    }

    code() {
        return (`<div class="Cards__options" style="display: ${this.blocked}">
            <div class="Cards__options-block">
                <div class="Cards__options-block-title">
                    <span id="ln-cards-options-block-title">Information about card</span>
                </div>
                <div class="Cards__options-block-info">
                    <div class="Cards__options-block-info-left">
                        <div class="Cards__options-block-info-left-card" style="background-image: url('${this.card().background}')"  card-id="${this.card().id}">
                            <div class="Cards__options-block-info-left-card-title">
                                Bank
                            </div>
                            <div class="Cards__options-block-info-left-card-number">
                                ${this.card().number}
                            </div>
                            <div class="Cards__options-block-info-left-card-date">
                                ${this.card().date}
                            </div>
                            <div class="Cards__options-block-info-left-card-info">
                                <div class="Cards__options-block-info-left-card-info-name">
                                    ${this.card().name}
                                </div>
                                <div class="Cards__options-block-info-left-card-info-protocol">
                                    <i class="bi bi-check2-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Cards__options-block-info-chart">
                        ${this.chart()}
                    </div>
                </div>
            </div>
        </div>`)
    }
}