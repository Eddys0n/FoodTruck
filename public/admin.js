(async ()=>{

    const menuForm = document.getElementById('menuForm')
    const eventForm = document.getElementById('eventForm')
    const menuDescription = document.getElementById('menuDescription')    
    const menuName = document.getElementById('menuName')
    const menuPrice = document.getElementById('menuPrice')
    const menuImage = document.getElementById('menuImage')
    const eventName = document.getElementById('eventName')
    const eventLocation = document.getElementById('eventLocation')
    const eventDate = document.getElementById('eventDate')
    const eventTime = document.getElementById('eventTime')

    
    menuForm.addEventListener('submit', ()=>{
        const newMenu = {
            name: menuName.value,
            description: menuDescription.value,
            price: menuPrice.value,
            img: menuImage.value
          };
        fetch('/api/v1/menu', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMenu)
          })
    })

    eventForm.addEventListener('submit', ()=>{
        const newEvent = {
            name: eventName.value,
            location: eventLocation.value,
            date: eventDate.value,
            time: eventTime.value
          };
          console.log(newEvent)
        fetch('/api/v1/events', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEvent)
          })
    })
   

})()