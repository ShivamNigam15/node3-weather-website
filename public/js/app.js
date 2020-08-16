fetch('http://puzzle.mead.io/puzzle').then((res) => {
    res.json().then((data) => {
        console.log(data)
    })
})

fetch('/weather?addres=Lucknow').then((res,err) => {
    if(err){
        console.log(err)
    }else{
        res.json().then((data) => {
            console.log(data)
        })
    } 
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')

weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address='+search.value).then((res) => {
            res.json().then((data) => {
                if(data.Error){
                    messageOne.textContent = data.Error;
                }else{
                    console.log(2)
                    messageOne.textContent = 'Address: '+data.address
                    messageTwo.textContent = 'Temperature: '+data.temperature+' <br> Weather Description: '+data.weather_descriptions+' <br> Humidity: '+data.humidity 
                }
                
            }) 
    })

})