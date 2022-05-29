class Transfer {
    constructor(options) {
        this.checked = options.checked // object from class checkTransfer
    }

    start() {
        if(this.checked.status == 200) {
            const response = `${this.checked.senderId}&${this.checked.recipientId}&${this.checked.money}`
            return response
        } else {
            return 'Server error 500'
        }
    } 
}