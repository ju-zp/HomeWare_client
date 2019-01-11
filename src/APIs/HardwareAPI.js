class HardWareAPI {
     static init(){
         this.baseURL = "http://127.0.0.1:3002"
         this.switchOnURL = this.baseURL + '/switchOn'
         this.switchOffURL = this.baseURL + '/switchOff'
     }

     static switchOn(){
         fetch(this.switchOnURL)
     }

     static switchOff(){
         fetch(this.switchOffURL)
     }
}

HardWareAPI.init()

export default HardWareAPI