class Chart {
    constructor(options) {
        this.arr = options.arr
        this.colors = options.colors || undefined
        this.work = false
    }

    color(result) {
        if(this.colors == undefined) {
            for(let i = 0; i < this.arr.length; i++) {
                if(this.arr[i].type == 'food') {
                    result.push('#8D230F')
                } if(this.arr[i].type == 'sport') {
                    result.push('#1E434C')
                } if(this.arr[i].type == 'culture') {
                    result.push('#9B4F0F')
                } if(this.arr[i].type == 'education') {
                    result.push('#C99E10')
                } if(this.arr[i].type == 'bank') {
                    result.push('#819672')
                }
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