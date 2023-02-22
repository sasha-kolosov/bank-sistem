class ILBTO {
    constructor(object) {
        this.object = object
    }

    create(func) {
        if(func !== undefined) {
            return ''
        }
        
        this.object.__proto__.proxieng = 'ILBTO'

        return this.object
    } 
}