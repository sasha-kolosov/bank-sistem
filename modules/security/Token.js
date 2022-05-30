class Token {
    constructor(options) {
        this.checked = options.checked // object from class checkTransfer
    }

    getToken() {
        if(this.checked.status == 200) {
            let id = (new Random()).getRandomId(9)
            const response = `${id}&${this.checked.senderId}&${this.checked.recipientId}&${this.checked.money}`
            return response
        } else if(this.checked.status == 400) {
            return 'Enter the correct data'
        } else {
            return 'Server error'
        }
    } 
}