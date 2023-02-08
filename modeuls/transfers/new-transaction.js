class NewTransaction {
    constructor(options) {
        this.senderId = options.senderId // from
        this.recipientId = options.recipientId // to
        this.cardSenderId = options.cardSenderId // from
        this.cardRecipientId = options.cardRecipientId // to
        this.amount = options.amount // transfer amount
        this.date = new Date()
        try {
            this.cardMoney = (new Connect('cards')).get('id', this.senderId).money
        } catch (error) {
            this.record('401') // incorrect date
        }
    }

    record(status) {
        return {
            senderId: this.senderId,
            recipientId: this.recipientId,
            cardSenderId: this.cardSenderId,
            cardRecipientId: this.cardRecipientId,
            amount: this.amount,
            date: this.date,
            status: status
        }
    }
    
    create() {
        try {
            if(
                (new Connect('users')).get('id', this.senderId).id &&
                (new Connect('users')).get('id', this.recipientId).id &&
                (new Connect('users')).get('id', this.cardSenderId).id &&
                (new Connect('users')).get('id', this.cardSenderId).id &&
                (this.cardMoney >= this.amount)
            ) {
                
            } else if(
                !(new Connect('users')).get('id', this.senderId).id ||
                !(new Connect('users')).get('id', this.recipientId).id ||
                !(new Connect('users')).get('id', this.cardSenderId).id ||
                !(new Connect('users')).get('id', this.cardSenderId).id
            ) {
                (new Connect('transactions')).post(this.record('401')) // incorrect date
            } else if(this.cardMoney <= this.amount) {
                (new Connect('transactions')).post(this.record('401')) // no money
            }
        } catch (e) {
            (new Connect('transactions')).post(this.record('401')) // incorrect date
        }
    }
}