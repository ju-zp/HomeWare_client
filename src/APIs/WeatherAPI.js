class WeatherAPI {
    static init(){
        this.baseURL = 'https://api.darksky.net/forecast/ff8f969b32a86f1e9f024852877c01e0'
        this.APIkey = 'ff8f969b32a86f1e9f024852877c01e0/'
        this.weatherURL = `${this.baseURl}${this.APIkey}` 
        this.latitude = '51.525503'
        this.longitude = '-0.0822229'
    }

    static getWeather(){
        console.log(fetch(`${this.baseURL}/${this.latitude},${this.longitude}`))
            
    }
}

WeatherAPI.init()

export default WeatherAPI
