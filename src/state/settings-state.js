function settings() {
    if(window.localStorage.getItem('user') !== null) {
        const config = CONFIG.elements().settings
        config.settingsLogoutButton.addEventListener('click', () => {
            window.localStorage.removeItem('user')
            {
                root.innerHTML = new App().render()
                { new Router().init() }
                CONFIG.elements()
                {
                    login()
                    register()
                }
            }
            new Message('You logout').init()
        })
    }
}