class Chart {
    constructor(options) {
        this.arr = options.arr
        this.work = false
    }

    start() {
        const result = {
            arrMoney: [],
            arrPercent: [],
            arrName: []
        }

        let sum = 0

        for(let i = 0; i < this.arr.length; i++) {
            result.arrName.push(this.arr[i].type)
            result.arrMoney.push(this.arr[i].money)
            sum += this.arr[i].money
        }

        const percent = sum / 100

        for(let i = 0; i < this.arr.length; i++) {
            result.arrPercent.push((result.arrMoney[i] / percent).toFixed(0))
        }

        return result
    }
}