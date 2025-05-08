(async ()=>{

     const nameDiv = document.getElementById('name')
     const locationDiv = document.getElementById('location')
     const dateDiv = document.getElementById('date')
     const timeDiv = document.getElementById('time')

     const { pathname } = window.location
     const [ , searchType, id ] = pathname.split('/')    

     const response = await fetch(`/api/v1/events/${id}`)
     const json = await response.json()

     const { name, location, date, time} = json

     nameDiv.textContent = name
     locationDiv.textContent = location
     dateDiv.textContent = date
     timeDiv.textContent = time

 })()