const root = document.getElementById('root')

root.innerHTML = (new App('block')).render()

window.location.hash = '/'

console.log(`[RGS] Server working...`)

const checked = new Checked({
    moneyInput: 2000,
    senderInput: 1,
    recipientInput: 2
})

const check = checked.startChecked()

const token = new Token({
    checked: check
})