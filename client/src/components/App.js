class App extends Components {
    render() {
        return (`
            ${(new Header('block')).render()}
            ${(new Home('block')).render()}
            ${(new Cards('none')).render()}
            ${(new Currencies('none')).render()}
            ${(new Settings('none')).render()}
        `)
    }
}
