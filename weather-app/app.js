// const request =require('request')

const request = require("request")

// const url='http://api.weatherstack.com/current?access_key=cff559ee9a763c5c8f91a7ab39af1d9e&query=37.8267,-122.4233&units=f'

// request({url:url,json:true},(error,response)=>{
//     // console.log(response)
//     // const data=JSON.parse(response.body);
//     // console.log(data.current)
//     // console.log(response.body.current)
//     console.log("it is currently "+ response.body.current.temperature+" degrees out. there is a " +response.body.current.feelslike +"% chance of rain")
// })

  
//geocoding:
//geocoding -> address-> lat-long

// const geocoding ="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXR1bGNoYXVoYW43IiwiYSI6ImNsNXBqYWV0cTBhcXczZG4ydjc1M3oyM3oifQ.f4e0vHnT9VOtOeWfAuREPg"

// request({url:geocoding,json:true},(error,response)=>{

//     try {
//         for(let i=0;i<response.body.features.length;i++){
//             console.log(response.body.features[i].geometry.coordinates[0]+" "+response.body.features[i].geometry.coordinates[1])
//             }
        
//     } catch (err) {
//         console.log("Unable to connect to weather service.")
//     }
   
// })

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYXR1bGNoYXVoYW43IiwiYSI6ImNsNXBqYWV0cTBhcXczZG4ydjc1M3oyM3oifQ.f4e0vHnT9VOtOeWfAuREPg'

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback ('Unable to connect to location services')
        }else if(response.body.features.length===0){
            console.log("Unable to find location. try another search")

        }else{
            console.log(response)
        }
    })
}
geocode('philadelphai',(error,data)=>{
    console.log("Error: ",error);
    console.log("data: " , data);
})