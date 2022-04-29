class Connect {
    constructor(database) {
        this.database = database
    }

    get() {
        return this.database
    } 

    post(value) {
        this.database.push(value)     
    }

    put(keySearch, valueSearch, key, value) {
        for(let i = 0; i < this.database.length; i++) {
            if(this.database[i][keySearch] == valueSearch) {
                this.database[i][key] = value
            } else {
                return 'Incorrect data'
            }
        }
    }

    delete(key, value) {
        for(let i = 0; i < this.database.length; i++) {
            if(this.database[i][key] == value) {
                delete this.database[i]
            }
        }
    }
}