class Random {
    getRandomId(length) {
        return Math.random().toString(36).substr(3, length)
    }
}