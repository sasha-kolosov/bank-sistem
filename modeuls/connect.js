class Connect {
    constructor(database) {
        this.database = database
    }

    get(key, value) {

        const database = JSON.parse(window.localStorage.getItem(`${this.database}`))

        if ((key === undefined && value === undefined) && (typeof key !== 'object' && typeof value !== 'object')) {
            return database
        } else if ((key && value) && (typeof key !== 'object' && typeof value !== 'object')) {
            for(let i = 0; i < database.length; i++) {
                if(database[i][`${key}`] == value) {
                    return database[i]
                }
            }

            throw new Error('Incorrect data')
        } else if (typeof key == 'object' && typeof value == 'object') {
            for(let i = 0; i < database.length; i++) {
                let status = 200
                for(let j = 0; j < key.length; j++) {
                    if(database[i][`${key[j]}`] != value[j]) {
                        status = 500
                    }
                }
                if(status == 200) {
                    return database[i]
                } else {
                    throw new Error('Incorrect data')
                }
            }
        }
    }
}