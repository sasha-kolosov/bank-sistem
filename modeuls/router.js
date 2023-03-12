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
                    const queryPath = `${this.path[i].getAttribute('path')}`.split('?')
                    if(queryPath.length == 1) {  
                        window.location.hash = `/${queryPath[0]}`
                    } else {
                        window.localStorage.setItem('query', queryPath[1])
                        window.location.hash = `/${queryPath[0]}`
                    } 
                })
            }

            window.addEventListener('hashchange', () => {
                for(let i = 0; i < this.pages.length; i++) {
                    this.pages[i].style.display = 'none'
                }
                try {
                    pages[`${window.location.hash.slice(2)}`].style.display = 'block'
                } catch(e) {
                    if(e.name !== 'TypeError') {
                        console.log(e)
                    }
                }
            })
        } catch(e) {
            if(e.name !== 'TypeError') {
                console.log(e)
            }
        }
    }
}