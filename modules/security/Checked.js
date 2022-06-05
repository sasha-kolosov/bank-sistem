class Checked {
    constructor(options) {
        this.moneyInput = options.moneyInput,
        this.senderInput = options.senderInput,
        this.recipientInput = options.recipientInput
    }

    startChecked() {
        if(this.moneyInput !== "" && this.recipientInput !== "" && this.senderInput !== "") {
            if(this.recipientInput == this.senderInput) {
                const object = { status: 400 }
                return object
            }
            const cards = new Connect(cardsProDB).get()
            let recipient = false
            let sender = false
            for(let i = 0; i < cards.length; i++) {
                if(cards[i].id == this.recipientInput) {
                    recipient = true
                    break
                } else {
                    recipient = false
                }
            }

            for(let i = 0; i < cards.length; i++) {
                if(cards[i].id == this.senderInput) {
                    sender = true
                    break
                } else {
                    sender = false
                }
            }

            if(recipient == true && sender == true && this.moneyInput > 0) {
                const object = {
                    senderId: this.senderInput,
                    recipientId: this.recipientInput,
                    money: this.moneyInput, 
                    status: 200 
                }
                return object
            } else {
                const object = { status: 400 }
                return object
            }
        } else if(this.moneyInput == "" || this.recipientInput == "" || this.senderInput == "") {
            const object = { status: 400 }
            return object
        } else {
            const object = { status: 500 }
            return object
        }
    }
}