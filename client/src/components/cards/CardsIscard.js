class CardsIscard extends Components {
    state() { return cardsState.cardsIscard.cards() }

    cards() {

        const cards = this.state()

        const elements = { layout : '' }

        for(let i = 0; i < cards.length; i++) {

            elements.layout += (`<div 
                class="Cards__iscard-block-cards-card"
                style="background-image: url('${cards[i].background}')" 
                card-id="${cards[i].id}"
            >
                <div class="Cards__iscard-block-cards-card-title">
                    Bank
                </div>
                <div class="Cards__iscard-block-cards-card-number">
                    ${cards[i].number}
                </div>
                <div class="Cards__iscard-block-cards-card-date">
                    ${cards[i].date}
                </div>
                <div class="Cards__iscard-block-cards-card-info">
                    <div class="Cards__iscard-block-cards-card-info-name">
                        ${cards[i].name}
                    </div>
                    <div class="Cards__iscard-block-cards-card-info-protocol">
                        <i class="bi bi-check2-circle"></i>
                    </div>
                </div>
            </div>`)
        }

        if(cards.length < 6) {
            elements.layout += (`
                <div class="Cards__iscard-block-cards-new">
                    <i class="bi bi-plus-lg"></i>
                </div>
            `)
        }

        return elements.layout
    }

    render() {
        return (`<div class="Cards__iscard" style="display: ${this.blocked}">
            <div class="Cards__iscard-block">
                <div class="Cards__iscard-block-title">
                    <span id="cards-iscard-title">Your bank cards</span>
                </div>
                <div class="Cards__iscard-block-cards">
                    ${this.cards()}
                </div>
            </div>
        </div>`)
    }
}