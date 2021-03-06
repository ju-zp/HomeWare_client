class API {
    static init(){
        this.baseURL = 'http://localhost:3001'
        this.signupURL = this.baseURL + '/signup'
        this.loginURL = this.baseURL + '/login'
        this.validateURL = this.baseURL + '/validate'
        this.createUserURL = this.baseURL + '/create'
        this.deleteUserURL = this.baseURL + '/destroy'
        this.editHomeURL = this.baseURL + '/homeEdit'
        this.editBoardURL = this.baseURL + '/boardsEdit'
        this.setLightURL = this.baseURL + '/setLight'
        this.reading = this.baseURL + '/reading'
        this.saveColorURL = this.baseURL + '/color'
        this.getColorsURL = this.baseURL + '/colors'
        this.getEnvironmentURL = this.baseURL + '/environment'
        this.getUsersURL = this.baseURL + '/users'
        this.getTemperatureDataURL = this.baseURL + '/temperatures'
        this.getWeatherURL = this.baseURL + '/weather'
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

    static createUser(user, username) {
        return fetch(this.createUserURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({user: user, username: username})
        }).then(resp => resp.json())
    } 

    static deleteUser(username) {
        return fetch(this.deleteUserURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username})
        }).then(resp => resp.json())
    }

    static editHome(name, username){
        return fetch(this.editHomeURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({home: name, username})
        }).then(resp => resp.json())
    }

    static editBoard(name, board){
        return fetch(this.editBoardURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, board})
        }).then(resp => resp.json())
    }

    static setLight(state) {
        return fetch(this.setLightURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({state})
        })
    }

    static sendReading(username, temp) {
        fetch(this.reading, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({ username: username, reading: temp})
        }).then(resp => resp.json())
    }

    static saveColor(color, username){
        return fetch(this.saveColorURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({color, username})
        }).then(resp => resp.json())
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

    static getTemperatureData(username){
        return fetch(this.getTemperatureDataURL)
            .then(resp => resp.json())
    }

    static getWeather(){
        return fetch(this.getWeatherURL)
            .then(resp => resp.json())
    }
}

API.init()

export default API