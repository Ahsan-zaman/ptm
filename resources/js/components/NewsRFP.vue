<template>
    <div class="container">
        <div class="row">
        <side-bar :links="links" />
        <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-3">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
                <h1 class="h2">Create new RFP</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <button type="button" class="btn btn-sm btn-outline-primary">
                        save in draft
                    </button>
                </div>
            </div>
            <div class="card">
                <div style="min-height:100px" class="card-header d-flex flex-column flex-lg-row justify-content-center align-items-center tab-controlers px-5">
                    <span class="mx-3 text-nowrap font-weight-bold" v-for="(tab, i) in tabs" :key="i" :class="getClass(i)">
                        {{tabText(tab,i)}}
                        <svg class="bi" width="20" height="20" fill="currentColor">
                            <use xlink:href="/assets/icons/bootstrap-icons.svg#chevron-double-right"/>
                        </svg>
                    </span>
                </div>
                <div class="card-body">
                    <transition-group name="slide-fade">
                        <form v-if="active == 0" ref="form1" :key="1" class="row g-3 needs-validation" novalidate>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="rfr" class="form-label">Reason for requisition</label>
                                <select class="form-select" v-model="reasonForRequisition" id="rfr" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Projects</option>
                                <option>Other</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid reason.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="sp" class="form-label">Select project</label>
                                <select class="form-select" id="sp" v-model="sp" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Projects</option>
                                <option>Other</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a project.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="erfr" class="form-label">Enter reason for requisition</label>
                                <input type="text" class="form-control" placeholder="Enter reason" id="erfr" v-model="erfr" required>
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="budget" class="form-label">Budget</label>
                                <select class="form-select" id="budget" v-model="budget" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Get custom budgets</option>
                                <option>Other</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a budget.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="ot" class="form-label">Order type</label>
                                <select class="form-select" id="ot" v-model="ot" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Product</option>
                                <option>Service</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a budget.
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="Specification" class="form-label">Specification</label>
                                <textarea class="form-control" v-model="specification" rows="8" id="Specification" placeholder="Deatails about this RFP" required></textarea>
                                <div class="invalid-feedback">
                                    Please enter a RFX specification(s).
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="address" class="form-label">Address</label>
                                <select class="form-select" id="address" v-model="address" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Get addresses</option>
                                <option>Others</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select address.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="Commodity" class="form-label">Commodity</label>
                                <input type="text" class="form-control" v-model="commodity" placeholder="Enter commodity" id="Commodity" required>
                                <div class="invalid-feedback">
                                    Please provide a commodity.
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <label for="Category" class="form-label">Category</label>
                                <select class="form-select" id="Category" v-model="category" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Manually input later</option>
                                <option>others</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a category.
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" v-model="publicRFX">
                                <label class="form-check-label" for="invalidCheck">
                                    Do you want to make this RFX public?
                                </label>
                                </div>
                            </div>
                        </form>
                        <form v-if="active == 1" ref="form2" :key="2" class="row g-3 needs-validation" novalidate>
                            <div class="col-12 col-md-6">
                                <label for="start" class="form-label">Response start date</label>
                                <input type="date" :min="new Date().toISOString().split('T')[0]" class="form-control" v-model="start" placeholder="Select start date" id="start" required>
                                <div class="invalid-feedback">
                                    Please provide a valid date.
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="end" class="form-label">Response end date</label>
                                <input type="date" :min="start" class="form-control" v-model="end" placeholder="Select end date" id="end" required>
                                <div class="invalid-feedback">
                                    Please provide a valid date.
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="starTime" class="form-label">Response start time</label>
                                <input type="time" class="form-control" v-model="startTime" placeholder="Select time" id="starTime" required>
                                <div class="invalid-feedback">
                                    Please select time.
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <label for="endTime" class="form-label">Response end time</label>
                                <input type="time" class="form-control" v-model="endTime" placeholder="Select time" id="endTime" required>
                                <div class="invalid-feedback">
                                    Please select time.
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="award" class="form-label">Estimated Award Date</label>
                                <input type="date" :min="end" class="form-control" v-model="award" placeholder="Select award date" id="award" required>
                                <div class="invalid-feedback">
                                    Please provide a valid date.
                                </div>
                            </div>
                        </form>
                    </transition-group>
                    <div class="d-flex my-4">
                        <button class="btn btn-outline-primary mr-auto" :disabled="active == 0" @click="active -= 1" type="submit">Previous</button>
                        <button class="btn btn-primary" @click="validate" type="submit">Next</button>
                    </div>
                </div>
            </div>

        </main>
        <alert/>
    </div>
    </div>
</template>

<script>
import SideBar from './SideBar.vue'
import Alert from './Alert'
    export default {
        components:{ SideBar, Alert },
        data(){
            return{
                links : [
                    {
                        name : 'Dashboard',
                        link: '/dashboard',
                        show: true,
                        icon: 'bar-chart-line'
                    },
                    {
                        name : 'Stratagic Sourcing',
                        link: '/strategic-sourcing',
                        show: true,
                        icon: 'file-check'
                    },
                    {
                        name : 'e-Auction',
                        link: '/e-auction',
                        show: true,
                        icon: 'tags'
                    },
                    {
                        name : 'Approval Center',
                        link: '/approval-center',
                        show: true,
                        icon: 'check-circle'
                    },
                    {
                        name : 'Invoice Management',
                        link: '/invoice-management',
                        show: true,
                        icon:'file-spreadsheet'
                    },
                    {
                        name : 'Supplier Management',
                        link: '/supplier-management',
                        show: true,
                        icon: 'people'
                    },
                    {
                        name : 'Settings',
                        link: '/setting',
                        show: false,
                        icon:'gear'
                    },
                ],
                reasonForRequisitions:[
                    ''
                ],
                reasonForRequisition:'',
                sp:'',
                erfr:'',
                budget:'',
                ot:'',
                specification:'',
                address:'',
                commodity:'',
                category:'',
                publicRFX:false,
                tabs : [
                    'Project Info',
                    // 'Select Template',
                    'Time Rule & payment',
                    'Select Supplier',
                    'Summary'
                ],
                active : 0,
                // form2 
                start:"",
                end:"",
                startTime : new Date().getHours() + ":"+ new Date().getMinutes(),
                endTime : new Date().getHours() + ":"+ new Date().getMinutes(),
                award : "",

            }
        },
        mounted(){},
        methods:{
            validate(){
                if(this.active == 0){
                    if(!this.$refs.form1.checkValidity()){
                        this.$refs.form1.classList.add('was-validated')
                    }else{
                        // console.log('this.tabs', this.tabs)
                        if(this.active < this.tabs.length -1){
                            this.active = this.active + 1
                        }
                    }
                }
                else if(this.active == 1){
                    if(!this.$refs.form2.checkValidity()){
                        this.$refs.form2.classList.add('was-validated')
                    }else{
                        // console.log('this.tabs', this.tabs)
                        if(this.active < this.tabs.length -1){
                            this.active = this.active + 1
                        }
                    }
                }
                else if(this.active == 2){
                    // console.log('this.tabs', this.tabs)
                    if(this.active < this.tabs.length -1){
                        this.active = this.active + 1
                    }
                }
            },
            tabText(txt,i){
                if(window.innerWidth < 720){
                    return i+1
                }else{
                    return txt
                }
            },
            getClass(i){
                let str = ""
                if(i == this.active){
                    str = 'active'
                }
                else if(i <= this.active){
                    str += 'done'
                }
                return str
            }
        },
        watch:{
            active : (newVal) => {
                let Tabs = document.querySelectorAll('.tab-controlers span')
                Tabs.forEach((tab,i) => {
                    if(i <= newVal){
                        tab.classList.add('text-success')
                    }
                })
            }
        },
        beforeCreate(){
            if(!UserClass.loggedIn()){
                this.$router.push('/')
            }
        }
    }
</script>
<style>
.nav-scroller {
  position: relative;
  z-index: 2;
  overflow-y: hidden;
}
.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  margin-top: -1px;
  overflow-x: auto;
  color: rgba(255, 255, 255, .75);
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.tab-controlers .done{
    color: var(--bs-success);
}
.tab-controlers .active{
    background-color: var(--bs-success);
    color: #fff;
    padding: .5rem .75rem;
    border-radius: 4px;
}
</style>
