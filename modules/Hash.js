class Hash {
    constructor(options) {
        this.arr = options.arr
        this.id = options.id
    }

    changeHash() {
        window.location.hash = this.arr[this.id]
    }
}
