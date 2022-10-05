const root = document.getElementById('root')

root.innerHTML = new App().render()

const router = () => new Router().init()

router()