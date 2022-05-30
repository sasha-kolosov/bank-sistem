class Checked {
    constructor(options) {
        this.moneyInput = options.moneyInput,
        this.senderInput = options.senderInput,
        this.recipientInput = options.recipientInput
    }

    startChecked() {
        if(this.moneyInput.length > 0 && this.recipientInput.length > 0 && this.senderInput.length > 0) {
            object = { status: 200 }
            return object
        } else if(this.moneyInput.length == 0 || this.recipientInput.length == 0 || this.senderInput.length == 0) {
            object = { status: 400 }
            return object
        } else {
            object = { status: 500 }
            return object
        }
    }
}