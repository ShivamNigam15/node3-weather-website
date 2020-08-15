const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2hpdmFtbmlnYW0iLCJhIjoiY2s5YWd0OGxxMGN3dDNtbzBxNDhlZWp3MyJ9.88MABMgukL6r2FR8gypJDg&limit=1'

    request({url:url,json:true},(error, {body}) =>{
        if(error){
            callback('Unable to connect',undefined)
        }else if(body.features.length ===0 ){
            callback('Unable to find', undefined)
        }else{
            callback(undefined,{
                latitude : body.features[0].center[0],
                longitude : body.features[0].center[1],
                place_name : body.features[0].place_name
            })
        }
    })

}

module.exports = geoCode