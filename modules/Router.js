class Router {
    constructor(options) {
        this.arr = options.arr
        this.id = options.id
    }

    route() {
        for(let i = 0; i < this.arr.length; i++) {
            this.arr[i].style.display = 'none'
        }
        this.arr[this.id].style.display = 'block'
    }
}
