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
                    ${ new Home().render() }
                    ${ new Finance().render() }
                    <div page="credits"><h1>Credits</h1></div>
                    <div page="deposits"><h1>Deposits</h1></div>
                    <div page="shares"><h1>Shares</h1></div>
                    ${ new Settings().render() }
                    ${ new HeaderMedia().render() }
                    ${ new Cards().render() }
                    ${ new Bookkeeping().render() }
                    ${ new Analytics().render() }
                </div>
            `)
        }
    }
}