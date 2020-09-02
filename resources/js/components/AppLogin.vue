<template>
    <main>
        <br><br><br>
        <div class="card mb-3 w-100 mx-auto" style="max-width: 25rem;min-width:320px">
            <div class="card-header">
                Login
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="Email" class="form-label">Email</label>
                    <input type="text" class="form-control" v-model="email" id="Email" placeholder="Jhon Doe">
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <input v-model="password" type="password" class="form-control" id="Password" placeholder="Another input placeholder">
                </div>
                <button @click="login" class="btn btn-block btn-primary mb-3">Login</button>
                <div class="mb-3">
                    <label for="gridCheck">
                        Remember me
                    </label>
                    <input v-model="rememberMe" type="checkbox" id="gridCheck">
                </div>

                <div class="d-flex">
                    <a href="#">Forget your password?</a>
                    <a class="ml-auto" href="#">Use custom domain</a>
                </div>
            </div>
        </div>
        <div align="center">
            <span class="mx-3">Not a customer?</span>
            <button class="btn btn-outline-primary">Try for free</button>
        </div>
    </main>
</template>

<script>
    export default {
        data(){
            return{
                email:"",
                password:"",
                rememberMe:false,
                logged : UserClass.loggedIn()
            }
        },
        methods:{
            login(){
                axios.post("/login",{
                    password : this.password,
                    email : this.email,
                    remember_me : this.rememberMe
                })
                .then(res => {
                    console.log(res.data)
                    UserClass.storeToken(res.data)
                    this.$router.push('/sales')
                })
                .catch(err => alert(err))
            }
        },
        beforeCreate(){
            if(UserClass.loggedIn()){
                this.$router.push('/sales')
            }
        }
    }
</script>
