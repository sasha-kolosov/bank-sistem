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
                
                let count = 0

                for(let j = 0; j < key.length; j++) {
                    if(database[i][`${key[j]}`] == value[j]) {
                        count += 1
                    }
                }

                if(count != key.length) {
                    count = 0
                } else {
                    return database[i]
                }
            }
            {
                throw new Error('Incorrect data')
            }
        }
    }

    post(data) {
        if(typeof data == 'object') {
            const database = JSON.parse(window.localStorage.getItem(`${this.database}`))
            data.id = database[database.length - 1].id + 1
            database.push(data)
            window.localStorage.setItem(`${this.database}`, JSON.stringify(database))
            return data
        } else {
            throw new Error('Incorrect data')
        }
    }

    put(keySearche, valueSearche, key, value) {
        const database = JSON.parse(window.localStorage.getItem(`${this.database}`))
        if(keySearche !== undefined && valueSearche !== undefined && key !== undefined && value !== undefined ) {
            if(typeof keySearche !== 'object' && typeof valueSearche !== 'object') {
                const id = this.get(`${keySearche}`, `${valueSearche}`).id
                if(id) {
                    for(let i = 0; i < database.length; i++) {
                        if(database[i].id === id) {
                            database[i][`${key}`] = value
                            window.localStorage.setItem(`${this.database}`, JSON.stringify(database))
                        }
                    }
                }
            } else if(typeof keySearche === 'object' && typeof valueSearche === 'object') {
                for(let i = 0; i < database.length; i++) {
                    let count = 0
                    for(let j = 0; j < keySearche.length; j++) {
                        if(database[i][`${keySearche[j]}`] == valueSearche[j]) {
                            count += 1
                        }
                        if(count == keySearche.length) {
                            database[i][`${key}`] = value
                            window.localStorage.setItem(`${this.database}`, JSON.stringify(database))
                        } else if(j == keySearche.length - 1 && count !== keySearche.length) {
                            count = 0
                        }
                    }
                }   
            }       
        }
    }

    delete() {}
}