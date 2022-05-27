const cardsState = {
    cardsIscard : {
        cards() {
            return new Connect(cardsDB).get()
        }
    },
    cardsOptions : {
        cards() {
            return new Connect(cardsProDB).get()
        }
    }
}