class Language {
    constructor(options) {
        this.elements = options.elements
        this.words = options.words
    }

    change() {
        for(let i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML = this.words[i]
        } 
    }
}