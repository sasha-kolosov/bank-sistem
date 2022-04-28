const cardsState = {
    cardsIscard : {
        cards() {
            const cards = new Connect(cardsDB).get()
            return cards
        }
    }
}