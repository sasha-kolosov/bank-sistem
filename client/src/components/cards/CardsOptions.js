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

        let index = 0

        if(Math.max.apply(null, elements.chart.arrPercent) > 59) {
            index = 2
        } else if(Math.max.apply(null, elements.chart.arrPercent) < 60 && Math.max.apply(null, elements.chart.arrPercent) > 49) {
            index = 3
        } else if(Math.max.apply(null, elements.chart.arrPercent) < 50 && Math.max.apply(null, elements.chart.arrPercent) > 39) {
            index = 4
        } else if(Math.max.apply(null, elements.chart.arrPercent) < 40) {
            index = 5
        }
    
        for(let i = 0; i < this.card().expenses.length; i++) {
            elements.layout += (`
                <div 
                    style="height: ${elements.chart.arrPercent[i] * index}px; 
                    background-color: ${elements.chart.arrColor[i]}" 
                    class="Cards__options-block-info-right-block-chart"
                ></div>
            `)
        }

        return elements.layout 
    }

    render() {
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
                    <div class="Cards__options-block-info-right">
                        <div class="Cards__options-block-info-right-block">
                            ${this.chart()}
                        </div>
                    </div>
                </div>
                <div class="Cards__options-block-options">
                    <div class="Cards__options-block-options-info">
                        <div class="Cards__options-block-options-info-timeRegister">
                            <span id="cards-options-block-options-info-timeRegister">Registration: </span>${this.card().info.timeOfRegister}
                        </div>
                        <div class="Cards__options-block-options-info-protocol">
                            <span id="cards-options-block-options-info-protocol">Security protocol: </span>${this.card().info.protocol}
                        </div>
                        <div class="Cards__options-block-options-info-money">
                            <span id="cards-options-block-options-info-money">Now on the card: </span>${this.card().money}₽
                        </div>
                        <div class="Cards__options-block-options-info-expenses">
                            <span id="cards-options-block-options-info-expenses">Your costs: </span>${this.card().expens}₽
                        </div>
                    </div>
                    <div class="Cards__options-block-options-block">
                        <div class="Cards__options-block-options-button">
                            <span id="cards-options-block-options-button">Back</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
    }
}