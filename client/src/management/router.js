{
    const items = document.getElementsByTagName('router')

    for(let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', () => {
            let rout = new Router({
                arr: config.route,
                id: i
            })
            let hash = new Hash({
                arr: config.hash,
                id: i
            })
            rout.route()
            hash.changeHash()
        })
    }
}