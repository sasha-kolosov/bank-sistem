class Query {
    constructor() {
        this.queries = document.getElementsByClassName('query')
    }

    init() {
        window.localStorage.setItem('query', JSON.stringify(['', '']))
        window.addEventListener('hashchange', () => {
            if(window.location.hash.slice(2) == 'finance/cards/card') {
                { new CardInfo().render() }
            }
        })
    }
}