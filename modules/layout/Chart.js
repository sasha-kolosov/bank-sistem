class Chart {
    constructor(options) {
        this.arr = options.arr
        this.work = false
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

        const percent = sum / 100

        for(let i = 0; i < this.arr.length; i++) {
            result.arrPercent.push((result.arrMoney[i] / percent).toFixed(0))

            if(this.arr[i].type == 'food') {
                result.arrColor.push('#8D230F')
            } if(this.arr[i].type == 'sport') {
                result.arrColor.push('#1E434C')
            } if(this.arr[i].type == 'culture') {
                result.arrColor.push('#9B4F0F')
            } if(this.arr[i].type == 'education') {
                result.arrColor.push('#C99E10')
            }
        }

        return result
    }
}