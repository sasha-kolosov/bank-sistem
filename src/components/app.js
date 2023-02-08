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
                    ${ new Credits().render() } 
                    ${ new Deposits().render() }
                    ${ new Shares().render() }
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