class Router {
    constructor() {
        this.pages = document.querySelectorAll('[page]')
        this.path = document.querySelectorAll('[path]')
    }

    init() {
        try {
            const pages = {}
            const path = {}

            this.pages[0].style.display = 'block'
            window.location.hash = `/${this.pages[0].getAttribute('page')}`

            for(let i = 0; i < this.pages.length; i++) {
                pages[`${this.pages[i].getAttribute('page')}`] = this.pages[i]
            }

            for(let i = 0; i < this.path.length; i++) {
                path[`${this.path[i].getAttribute('path')}`] = this.path[i]
            }

            for(let i = 0; i < this.path.length; i++) {
                this.path[i].addEventListener('click', () => {
                    window.location.hash = `/${this.path[i].getAttribute('path')}`
                })
            }

            window.addEventListener('hashchange', () => {
                for(let i = 0; i < this.pages.length; i++) {
                    this.pages[i].style.display = 'none'
                }
                pages[`${window.location.hash.slice(2)}`].style.display = 'block'
            })
        } catch(e) {
            if(!e.name == 'TypeError') {
                console.log(e)
            }
        }
    }
}