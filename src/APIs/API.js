class API {
    static init(){
        this.baseURL = 'http://localhost:3001'
        this.signupURL = this.baseURL + '/signup'
        this.loginURL = this.baseURL + '/login'
        this.validateURL = this.baseURL + '/validate'
        this.reading = this.baseURL + '/reading'
        this.saveColorURL = this.baseURL + '/color'
        this.getColorsURL = this.baseURL + '/colors'
        this.getEnvironmentURL = this.baseURL + '/environment'
        this.getUsersURL = this.baseURL + '/users'
        this.getTemperatureDataURL = this.baseURL + '/temperatures'
    }

    static signup(user) {
        return fetch(this.signupURL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }

    static login(user) {
        return fetch(this.loginURL,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }

    static validate (username) {
        return fetch(this.validateURL, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ username: username })
        }).then(resp => resp.json())
    }

    static sendReading(username, temp) {
        fetch(this.reading, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({ username: username, reading: temp})
        }).then(resp => console.log(resp.json()))
    }

    static saveColor(color, username){
        fetch(this.saveColorURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({color, username})
        })
    }

    static getColors(username){
        return fetch(this.getColorsURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username})
        }).then(resp => resp.json())
    }

    static getEnvironment(username){
        return fetch(this.getEnvironmentURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username})
        }).then(resp => resp.json())
    }

    static getUsers(home){
        return fetch(this.getUsersURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({home})
        })
    }

    static getTemperatureData(){
        return fetch(this.getTemperatureDataURL)
    }
}

API.init()

export default API