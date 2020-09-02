class UserClass{
    storeToken({access_token,expires_at,token_type}){
        localStorage.setItem("token", access_token);
        localStorage.setItem("expires_at", expires_at);
        localStorage.setItem("token_type", token_type);
    }
    getToken(){
        return localStorage.getItem("token");
    }
    clearToken(){
        localStorage.removeItem("token");
        localStorage.removeItem("token_type");
        localStorage.removeItem("expires_at");
    }
    loggedIn() {
        const storedToken = this.getToken();
        if(storedToken){
            return true
        }else{
            return false
        }
    }
    logout(){
        window.axios
        .post("/logout")
        .then(res => {
            this.clearToken()
        })
        .catch(err => {
            this.clearToken()
        });
    }
}

export default (UserClass = new UserClass());