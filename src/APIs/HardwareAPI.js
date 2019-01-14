class HardWareAPI {
    static init(){
        this.baseURL = 'http://127.0.0.1:3002'
        this.welcomeURL = this.baseURL + '/welcome'
        this.switchOnURL = this.baseURL + '/switchOn'
        this.switchOffURL = this.baseURL + '/switchOff'
        this.setColorURL = this.baseURL + '/setColor'
        this.tempReadingURL = this.baseURL + '/temperature'
    }

    static welcome(){
        fetch(this.welcomeURL)
    }

    static switchOn(){
        fetch(this.switchOnURL)
    }

    static switchOff(){
        fetch(this.switchOffURL)
    }

    static setColor(color){
        fetch(this.setColorURL, {
            method: "PATCH",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(color) 
        })
    }

    static getTemperature(){
        return fetch(this.tempReadingURL)
            .then(data => data.json())
    }
}

HardWareAPI.init()

export default HardWareAPI