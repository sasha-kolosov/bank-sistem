class ObjectRemaker {
    constructor(object) {
        this.object = object
    }

    reset() {} 

    init(changes) {
        for(let key in changes) {
            this.object[key] = changes[key]
        }

        return this.object
    }
}