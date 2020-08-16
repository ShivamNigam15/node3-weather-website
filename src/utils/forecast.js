const request = require('request')

const foreCast = (latitude, longitude, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=17612e3029a750cb95f9c94c3f63809c&query='+latitude+','+longitude
     request({url , json:true},(error, {body}) => {
        if(error){
            callback(error,undefined)
        }else if(typeof latitude === 'string' || typeof longitude === 'string'){
            callback('String cannot be passed',undefined)
        }else{
            forecastData = {
                temperature : body.current.temperature,
                weather_descriptions : body.current.weather_descriptions,
                humidity : body.current.humidity
            }
            callback(undefined,forecastData)
        }
     })
}

module.exports = foreCast