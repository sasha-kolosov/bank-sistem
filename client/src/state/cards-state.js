const cardsState = {
    cardsIscard : {
        cards() {
            const cards = new Connect(cardsDB).get()
            return cards
        }
    },
    cardsOptions : {
        cards() {
            const cards = new Connect(cardsProDB).get()
            return cards
        }
    }
}