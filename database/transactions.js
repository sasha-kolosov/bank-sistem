if(window.localStorage.getItem('transactions') === null) {
    window.localStorage.setItem('transactions', JSON.stringify([
        { // test
            id: 1,
            senderId: 0,
            recipientId: 0,
            cardSenderId: 0,
            cardRecipientId: 0,
            amount: 10000,
            status: '200' 
        }
    ]))
}