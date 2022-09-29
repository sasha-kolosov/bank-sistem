class App {
    render() {
        if(window.localStorage.getItem('user') === null) {
            return (`
                ${ new Login().render() }
                ${ new Register().render() }
            `)
        } else {
            return (`
                <h1>Hello ${JSON.parse(window.localStorage.getItem('user')).name}</h1>
            `)
        }
    }
}