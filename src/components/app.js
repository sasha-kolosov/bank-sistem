class App {
    render() {
        if(window.localStorage.getItem('user') === null) {
            return (`
                ${ new Message().render() }
                ${ new Login().render() }
                ${ new Register().render() }
            `)
        } else {
            return (`
                ${ new Message().render() }
                <h1>Hello ${JSON.parse(window.localStorage.getItem('user')).name}</h1>
            `)
        }
    }
}