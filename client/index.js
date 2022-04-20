const root = document.getElementById('root')

root.innerHTML = (new App('block')).render()

window.location.hash = '/'

console.log(`[RGS] Server working...`)