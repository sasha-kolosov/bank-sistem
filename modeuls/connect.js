class Connect {
    constructor(database) {
        this.database = database
    }

    get(key, value) {
        if (key === undefined && value === undefined) {
            return JSON.parse(window.localStorage.getItem(`${this.database}`))
        }
    }
}