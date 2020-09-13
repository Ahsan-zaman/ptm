<template>
    <main class="d-flex flex-column flex-grow-1 justify-content-center" style="background-image: url('https://res.cloudinary.com/ahsan-zaman/image/upload/w_1366,ar_16:9,c_fill,q_50/v1599470366/pexels-skinny-alien-2318554_zr4pyg.webp')">
        <div class="card mb-3 w-100 mx-auto" style="max-width: 25rem;min-width:320px;background-color:rgba(256,256,256,.9)">
            <div class="card-header">
                <h2>Login</h2>
            </div>
            <form ref="form" class="card-body needs-validation" novalidate>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" v-model="email" id="email" placeholder="you@example.com" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Please type in your email
                    </div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <div class="input-group">
                        <input v-model="password" :type="showPass ? 'text' : 'password'" class="form-control" id="Password" placeholder="********">
                        <span @click="showPass = !showPass" class="input-group-text hover">
                            <svg class="bi" width="20" height="20" fill="currentColor">
                                <use :xlink:href="`/assets/icons/bootstrap-icons.svg#${showPass ? 'eye-slash' : 'eye'}`"/>
                            </svg>
                        </span>
                    </div>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <div class="invalid-feedback">
                        Enter your password
                    </div>
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
            </form>
        </div>
        <div align="center">
            <span class="mx-3 text-light">Not a customer?</span>
            <router-link to="/register" class="btn btn-outline-light">Try for free</router-link>
        </div>
    </main>
</template>

<script>
    export default {
        data(){
            return{
                email:"ahsan.web.ml@gmail.com",
                password:"Ahsan@2020",
                rememberMe:false,
                logged : UserClass.loggedIn(),
                showPass:false
            }
        },
        methods:{
            login(e){
                e.preventDefault()
                if(!this.$refs.form.checkValidity()){
                    this.$refs.form.classList.add('was-validated')
                }else{

                    axios.post("/login",{
                        password : this.password,
                        email : this.email,
                        remember_me : this.rememberMe
                    })
                    .then(res => {
                        // console.log(res.data)
                        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.access_token}`;
                        UserClass.storeToken(res.data)
                        this.$router.push('/dashboard')
                    })
                    .catch(err => {
                        EventBus.$emit('alert',{
                            name : "Login error",
                            type : 'danger',
                            desc : err.message,
                            id : Math.random(10000),
                            time : 5000
                        })
                    })
                }
            }
        },
        beforeCreate(){
            if(UserClass.loggedIn()){
                this.$router.push('/dashboard')
            }
        }
    }
</script>
