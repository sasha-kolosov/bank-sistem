class NewTransaction {
    constructor(options) {
        this.senderId = options.senderId // from
        this.recipientId = options.recipientId // to
        this.cardSenderId = options.cardSenderId // from
        this.cardRecipientId = options.cardRecipientId // to
        this.amount = options.amount // transfer amount
        this.date = new Date()
        this.senderMoney = (new Connect('cards')).get(['userId', 'id'], [options.cardSenderId, options.senderId]).money
        this.recipientMoney = (new Connect('cards')).get(['userId', 'id'], [options.cardRecipientId, options.recipientId]).money
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
                (new Connect('users')).get('id', this.cardRecipientId).id &&
                (this.senderMoney >= this.amount)
            ) {
                { (new Connect('transactions')).post(this.record('200')) } // all OK
                { (new Connect('cards')).put(['userId', 'id'], [this.senderId, this.cardSenderId], 'money', (this.senderMoney -= this.amount)) }
                { (new Connect('cards')).put(['userId', 'id'], [this.recipientId, this.cardRecipientId], 'money', (this.recipientMoney += this.amount)) }
 
            } else if(
                !(new Connect('users')).get('id', this.senderId).id ||
                !(new Connect('users')).get('id', this.recipientId).id ||
                !(new Connect('users')).get('id', this.cardSenderId).id ||
                !(new Connect('users')).get('id', this.cardRecipientId).id
            ) {
                { (new Connect('transactions')).post(this.record('401')) } // incorrect date
            } else if(this.senderMoney <= this.amount) {
                { (new Connect('transactions')).post(this.record('402')) } // no money
            }
        } catch {
            { (new Connect('transactions')).post(this.record('401')) } // incorrect date
        }
    }
}