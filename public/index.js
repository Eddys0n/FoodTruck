(async ()=>{

    const events = document.getElementById('events')
   

    const response = await fetch(`/api/v1/events`)
    const json = await response.json()

    json.forEach(event => {
        const nameDiv = document.createElement('a')        
        const dateDiv = document.createElement('div')
        const container = document.createElement('div')

        const { _id,name, date } = event

        nameDiv.textContent = name
        dateDiv.textContent = date

        nameDiv.href = `/events/${_id}`
        container.appendChild(nameDiv)
        container.appendChild(dateDiv)

        events.appendChild(container)
       
    });

    const menu = document.getElementById('menu')
   

    const responseMenu = await fetch(`/api/v1/menu`)
    const jsonMenu = await responseMenu.json()

    jsonMenu.forEach(menuItem => {
        const nameMenu = document.createElement('a')        
        const descriptionMenu = document.createElement('div')
        const precioMenu = document.createElement('div')
        const imagenMenu = document.createElement('img')
        const containerMenu = document.createElement('div')

        const { name, description, price, img } = menuItem

        nameMenu.textContent = name
        descriptionMenu.textContent = description
        precioMenu.textContent = price
        imagenMenu.src = img
        imagenMenu.width = 756
        imagenMenu.height = 700
        
        containerMenu.appendChild(nameMenu)
        containerMenu.appendChild(descriptionMenu)
        containerMenu.appendChild(precioMenu)
        containerMenu.appendChild(imagenMenu)

        menu.appendChild(containerMenu)            
       
    });

})()