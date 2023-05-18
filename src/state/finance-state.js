import NewTransaction from '../modeuls/transfers/new-transaction'
import Connect from '../modeuls/connect'
import CONFIG from './config'

export default function finance() {
    if(window.localStorage.getItem('user') !== null) {
        const config = CONFIG.elements().finance

        { // state.cards.cardtransfer
            const localConfig = config.cards.cardtransfer
            localConfig.cardtransferNumberInput.addEventListener('input', e => {
                {
                    let cardCode = e.target.value.replace(/[^\d]/g, '').substring(0,16)
                    cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : ''
                    e.target.value = cardCode

                    try {
                        const request = new Connect('cards').get('number', `${e.target.value}`)
                        const findUser = new Connect('users').get('id', `${request.userId}`)
                        localConfig.cardtransferUserName.innerHTML = `${findUser.name} ${findUser.surname[0]}.`
                    } catch {
                        localConfig.cardtransferUserName.innerHTML = `Card not found`
                    }
                }
            })

            localConfig.cardtransferAmountInput.addEventListener('input', e => {
                e.target.value = e.target.value.replace(/[^\d.,]/g, '').replace(/[,]/g, '.').trim()
                if(e.target.value !== '') {
                    localConfig.cardtransferAmount.innerHTML = e.target.value
                } else {
                    localConfig.cardtransferAmount.innerHTML = '0'
                }
            })

            localConfig.cardtransferButton.addEventListener('click', () => {
                if(parseFloat(localConfig.cardtransferAmount.innerHTML) > 0 && localConfig.cardtransferNumberInput.value > 0) {
                    const transactions = new NewTransaction({
                        senderId: '',
                        recipientId: '',
                        cardSenderId: '',
                        cardRecipientId: '',
                        amount: parseFloat(localConfig.cardtransferAmount.innerHTML)
                    })   
                }
            })
        }
    }
}