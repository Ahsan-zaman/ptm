<template>
    <main class="d-flex flex-column flex-grow-1 justify-content-center" style="background-image: url('https://res.cloudinary.com/ahsan-zaman/image/upload/w_1366,ar_16:9,c_fill,q_50/v1599470366/pexels-skinny-alien-2318554_zr4pyg.webp')">
        <div class="container py-5">
            <div class="card my-3 w-100 mx-auto" style="background-color:rgba(256,256,256,.9)">
                <div class="card-header">
                    <h2>New registration</h2>
                </div>
                <form ref="form" class="card-body row needs-validation" novalidate>
                    <h3 class="col-12">
                        Company details
                    </h3>
                    <div class="col-12 col-md-6 mb-3">
                        <label for="c_name" class="form-label">Company name</label>
                        <input type="text" class="form-control" v-model="company_name" id="c_name" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Please enter company name
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <label for="c_name_n" class="form-label">Company name (native)</label>
                        <input type="c_name_n" class="form-control" v-model="company_name_native" id="c_name_n" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Please enter company name in native language
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <label for="cr" class="form-label">Business Registration Number</label>
                        <input type="number" class="form-control" v-model="cr" id="cr" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Please type in your Business Registration Number (CR)
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <label for="vat_number" class="form-label">Tax number</label>
                        <input type="number" class="form-control" v-model="vat_number" id="vat_number" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Please type in your Tax registration number (VAT)
                        </div>
                    </div>
                    <h3 class="col-12">
                        Contact details
                    </h3>
                    <div class="col-12 col-md-6 mb-3">
                        <label for="name" class="form-label">POC Name</label>
                        <input type="text" class="form-control" v-model="name" id="name" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Please enter POC name
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <label for="email" class="form-label">POC Email</label>
                        <input type="email" class="form-control" v-model="email" id="email" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Please enter POC valid email
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                        <div class="col-12 col-md-6 mb-3">
                            <label for="mobile" class="form-label">POC Number</label>
                            <input type="number" class="form-control" v-model="mobile" id="mobile" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Please enter POC mobile number
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <label for="office_phone" class="form-label">Office phone</label>
                        <input type="number" class="form-control" v-model="office_phone" id="office_phone" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Please enter office phone number
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-3">
                        <label for="office_address" class="form-label">Office address</label>
                        <input type="address" class="form-control" v-model="office_address" id="office_address" required>
                        <div class="valid-feedback">
                            Looks good!
                        </div>
                        <div class="invalid-feedback">
                            Please enter office address
                        </div>
                    </div>
                    <h3 class="col-12">
                        Account Details
                    </h3>
                    <div class="col-12 mb-3">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <label for="rfr" class="form-label">Account type</label>
                                <select class="form-select" v-model="acc_type" id="rfr" required>
                                    <option selected disabled>Choose...</option>
                                    <option>Supplier</option>
                                    <option>Purchaser</option>
                                </select>
                                <div class="valid-feedback">
                                    Looks good.
                                </div>
                                <div class="invalid-feedback">
                                    Please select an account type.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="row">
                        <div class="col-12 col-md-6 mb-3">
                            <label for="password" class="form-label">Password</label>
                            <div class="input-group">
                                <input v-model="password" minlength="8" :type="showPass ? 'text' : 'password'" class="form-control" id="Password">
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
                                Password must be at least 8 characters
                            </div>
                        </div>
                        <div class="col-12 col-md-6 mb-3">
                            <label for="password_confirmation" class="form-label">Confirm password</label>
                            <div class="input-group">
                                <input class="form-control" :type="showPass2 ? 'text' : 'password'" v-model="password_confirmation" id="password_confirmation" required>
                                <span @click="showPass2 = !showPass2" class="input-group-text hover">
                                    <svg class="bi" width="20" height="20" fill="currentColor">
                                        <use :xlink:href="`/assets/icons/bootstrap-icons.svg#${showPass2 ? 'eye-slash' : 'eye'}`"/>
                                    </svg>
                                </span>
                            </div>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                            <div class="invalid-feedback">
                                Your Passwords don't match
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="col-12 col-md-4 col-lg-2 ml-auto">
                        <button @click="register" class="btn btn-block btn-primary mb-3">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data(){
            return{
                email:"",
                showPass2: false,
                showPass: false,
                password:"",
                rememberMe:false,
                logged : UserClass.loggedIn(),
                showPass:false
            }
        },
        methods:{
            register(e){
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
