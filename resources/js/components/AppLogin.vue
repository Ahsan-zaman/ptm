<template>
    <main class="d-flex flex-column flex-grow-1 justify-content-center" style="background-image: url('https://res.cloudinary.com/ahsan-zaman/image/upload/w_1366,ar_16:9,c_fill,q_50/v1599470366/pexels-skinny-alien-2318554_zr4pyg.webp')">
        <div class="card mb-3 w-100 mx-auto" style="max-width: 25rem;min-width:320px;background-color:rgba(256,256,256,.9)">
            <div class="card-header">
                <h2>Login</h2>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="Email" class="form-label">Email</label>
                    <input type="text" class="form-control" v-model="email" id="Email" placeholder="Jhon Doe">
                </div>
                <div class="mb-3">
                    <label for="Password" class="form-label">Password</label>
                    <div class="input-group">
                        <input v-model="password" :type="showPass ? 'text' : 'password'" class="form-control" id="Password" placeholder="Another input placeholder">
                        <span @click="showPass = !showPass" class="input-group-text hover">
                            <svg class="bi" width="20" height="20" fill="currentColor">
                                <use :xlink:href="`/assets/icons/bootstrap-icons.svg#${showPass ? 'eye-slash' : 'eye'}`"/>
                            </svg>
                        </span>
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
            </div>
        </div>
        <div align="center">
            <span class="mx-3 link-light">Not a customer?</span>
            <button class="btn btn-outline-light">Try for free</button>
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
            login(){
                axios.post("/login",{
                    password : this.password,
                    email : this.email,
                    remember_me : this.rememberMe
                })
                .then(res => {
                    console.log(res.data)
                    UserClass.storeToken(res.data)
                    this.$router.push('/dashboard')
                })
                .catch(err => alert(err))
            }
        },
        beforeCreate(){
            if(UserClass.loggedIn()){
                this.$router.push('/dashboard')
            }
        }
    }
</script>
