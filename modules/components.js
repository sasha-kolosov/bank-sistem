class Components {
    constructor(id) {
        this.id = id
    }

    code() {
        return `Page ${this.id}`
    }

    render() {
        return this.code()
    }
}