class Chart {
    constructor(options) {
        this.arr = options.arr
        this.colors = options.colors || undefined
        this.work = false
    }

    color(result) {
        if(this.colors == undefined) {
            const colors = {
                food : '#8D230F',
                sport : '#1E434C',
                culture : '#9B4F0F',
                education : '#C99E10',
                bank : '#819672'
            }

            for(let i = 0; i < this.arr.length; i++) {
                result.push(colors[this.arr[i].type])
            }
        } else {
            // For best time
        }
    }
 
    start() {
        const result = {
            arrMoney: [],
            arrPercent: [],
            arrName: [],
            arrColor: []
        }

        let sum = 0

        for(let i = 0; i < this.arr.length; i++) {
            result.arrName.push(this.arr[i].type)
            result.arrMoney.push(this.arr[i].money)
            sum += this.arr[i].money
        }

        for(let i = 0; i < result.arrMoney.length; i++) {
            if(result.arrMoney[i] == 0 || result.arrMoney[i] < 0) {
                result.arrMoney.splice(i, 1)
            }
        }

        const percent = sum / 100

        for(let i = 0; i < result.arrMoney.length; i++) {
            result.arrPercent.push((result.arrMoney[i] / percent).toFixed(0))
        }

        this.color(result.arrColor)

        return result
    }
}