import './message.css'

export default class Message {
    constructor(message) {
        this.message = message
    }

    render() {
        return (`<div class="Message">
            <div class="Message__text"></div>
        </div>`)
    }

    init() {
        const message = document.getElementsByClassName('Message__text')[0]
        const block = document.getElementsByClassName('Message')[0]

        block.style.display = 'block'
        message.innerHTML = this.message

        setTimeout(() => {
            block.style.opacity = '1'
            block.style.top = '5vh'
        }, 100)

        setTimeout(() => {
            block.style.top = '0'
            block.style.opacity = '0'
        }, 2700)
        setTimeout(() => {
            block.style.display = 'none'
        }, 3100)
    }
}