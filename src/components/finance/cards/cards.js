class Cards {
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

    render() {
        const query = window.localStorage.getItem('query')
        if(query === null) {
            return (`<div class="Cards" page="finance/cards">
                <div class="Cards__container">
                    <div class="Cards__block">
                        <h1>Cards page</h1>
                        <div class="Cards__block-container">
                            ${ this.cards() }
                        </div>
                    </div>
                </div>
            </div>`)
        } else if(false) {
            return (`<div class="Cards" page="finance/cards"></div>`)
        } else if(false) {
            return (`<div class="Cards" page="finance/cards"></div>`)
        }
    }
}