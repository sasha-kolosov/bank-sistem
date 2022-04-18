class App extends Components {
    code() {
        return (`
            ${(new Header(1)).render()}
            ${(new Home(2)).render()}
            ${(new Cards(3)).render()}
            ${(new Currencies(4)).render()}
            ${(new Settings(5)).render()}
        `)
    }
}
