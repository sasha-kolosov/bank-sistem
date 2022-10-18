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
                ${ new Header().render() }
                <div class="router-container">
                    <div page="home"><h1>Home</h1></div>
                    <div page="finance"><h1>Finance</h1></div>
                    <div page="credits"><h1>Credits</h1></div>
                    <div page="deposits"><h1>Deposits</h1></div>
                    <div page="shares"><h1>Shares</h1></div>
                    ${ new Settings().render() }
                    ${ new HeaderMedia().render() }
                </div>
            `)
        }
    }
}