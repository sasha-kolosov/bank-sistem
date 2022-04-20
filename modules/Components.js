class Components {
    constructor(blocked) {
        this.blocked = blocked
    }

    code() {
        return `<h1>New page</h1>`
    }

    render() {
        return this.code()
    }
}
