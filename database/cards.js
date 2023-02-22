// '9' - bank id
// 'nnn' region { moscow : 001, piter : 002 ... }
// nnn nnn nnn - user id

if(window.localStorage.getItem('cards') === null) {
    window.localStorage.setItem('cards', JSON.stringify([
        {
            userId: 1,
            id: 1,
            number: '9001 0000 0000 0001',
            date: '12/04',
            money: 2000.00
        },
        {
            userId: 2,
            id: 2,
            number: '9001 0000 0000 0002',
            date: '11/14',
            money: 45000.00
        },
        {
            userId: 3,
            id: 3,
            number: '9001 0000 0000 0003',
            date: '03/29',
            money: 43990.43
        },
        {
            userId: 4,
            id: 4,
            number: '9001 0000 0000 0003',
            date: '05/18',
            money: 1000.00
        }
    ]))
}