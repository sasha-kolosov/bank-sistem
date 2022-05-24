class App extends Components {
    render() {
        return (`
            ${(new Header('block')).render()}
            ${(new Home('block')).render()}
            ${(new Cards('none')).render()}
            ${(new Payments('none')).render()}
            ${(new Deposits('none')).render()}
            ${(new Settings('none')).render()}
        `)
    }
}
