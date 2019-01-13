class API {
    static init(){
        this.baseURL = 'http://localhost:3001'
        this.signupURL = this.baseURL + '/signup'
        this.loginURL = this.baseURL + '/login'
        this.validateURL = this.baseURL + '/validate'
        this.signoutURL = this.baseURL + '/logout'
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

    static signout(username) {
        fetch(this.signoutURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username: username })
        })

    }
}

API.init()

export default API