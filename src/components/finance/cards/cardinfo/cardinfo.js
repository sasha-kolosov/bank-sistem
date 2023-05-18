import './cardinfo.css'

export default class CardInfo {
    constructor() {
        this.query = JSON.parse(window.localStorage.getItem('query'))
    }

    render() {
        if(this.query) {
            return (`<div page="finance/cards/card" class="CardInfo">
                <div class="CardInfo__container">
                    <div class="CardInfo__block">
                        <h1>CardInfo page</h1>
                        <h1>${this.query[0]} = ${this.query[1]}</h1>
                    </div>
                </div>
            </div>`)
        }
    }
}