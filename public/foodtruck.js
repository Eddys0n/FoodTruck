(async() =>{
    const menu = document.getElementById('menu')
    const events = document.getElementById('events')
    const menuList = document.getElementById('menuList')
    const eventsList = document.getElementById('eventsList')
    menu.addEventListener('click', async()=> {
        const response = await fetch('/api/v1/menu')
        const json =await response.json()
        const {name, description, price, img} =json
        menuList.textContent = name, description, price, img
    })
})