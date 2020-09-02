<template>
    <div class="row">
        <side-bar :links="links" />
        <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom">
                    <h1 class="h2">Sales Dashboard</h1>
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="btn-group mr-2">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                            <span data-feather="calendar"></span>
                            This week
                        </button>
                    </div>
                </div>
                <div class="nav-scroller bg-white shadow-sm mb-3">
                    <nav class="nav nav-underline">

                        <a class="nav-link" href="#">Home</a>
                        <a class="nav-link" href="#">Accounts</a>
                        <a class="nav-link" href="#">Contacts</a>
                        <a class="nav-link" href="#">Leads</a>
                        <a class="nav-link" href="#">Opertunities</a>
                        <a class="nav-link" href="#">Tasks</a>
                        <a class="nav-link" href="#">Calendar</a>
                        <a class="nav-link" href="#">Dashboards</a>
                        <a class="nav-link" href="#">Notes</a>
                        <a class="nav-link" href="#">Reports</a>
                        <a class="nav-link" href="#">Groups</a>
                        <a class="nav-link" href="#">Forecasts</a>
                    </nav>
                </div>
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Header</th>
                            <th>Header</th>
                            <th>Header</th>
                            <th>Header</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1,001</td>
                            <td>Lorem</td>
                            <td>ipsum</td>
                            <td>dolor</td>
                            <td>sit</td>
                            </tr>
                            <tr>
                            <td>1,002</td>
                            <td>amet</td>
                            <td>consectetur</td>
                            <td>adipiscing</td>
                            <td>elit</td>
                            </tr>
                            <tr>
                            <td>1,003</td>
                            <td>Integer</td>
                            <td>nec</td>
                            <td>odio</td>
                            <td>Praesent</td>
                            </tr>
                            <tr>
                            <td>1,003</td>
                            <td>libero</td>
                            <td>Sed</td>
                            <td>cursus</td>
                            <td>ante</td>
                            </tr>
                            <tr>
                            <td>1,004</td>
                            <td>dapibus</td>
                            <td>diam</td>
                            <td>Sed</td>
                            <td>nisi</td>
                            </tr>
                            <tr>
                            <td>1,005</td>
                            <td>Nulla</td>
                            <td>quis</td>
                            <td>sem</td>
                            <td>at</td>
                            </tr>
                            <tr>
                            <td>1,006</td>
                            <td>nibh</td>
                            <td>elementum</td>
                            <td>imperdiet</td>
                            <td>Duis</td>
                            </tr>
                            <tr>
                            <td>1,007</td>
                            <td>sagittis</td>
                            <td>ipsum</td>
                            <td>Praesent</td>
                            <td>mauris</td>
                            </tr>
                            <tr>
                            <td>1,008</td>
                            <td>Fusce</td>
                            <td>nec</td>
                            <td>tellus</td>
                            <td>sed</td>
                            </tr>
                            <tr>
                            <td>1,009</td>
                            <td>augue</td>
                            <td>semper</td>
                            <td>porta</td>
                            <td>Mauris</td>
                            </tr>
                            <tr>
                            <td>1,010</td>
                            <td>massa</td>
                            <td>Vestibulum</td>
                            <td>lacinia</td>
                            <td>arcu</td>
                            </tr>
                            <tr>
                            <td>1,011</td>
                            <td>eget</td>
                            <td>nulla</td>
                            <td>Class</td>
                            <td>aptent</td>
                            </tr>
                            <tr>
                            <td>1,012</td>
                            <td>taciti</td>
                            <td>sociosqu</td>
                            <td>ad</td>
                            <td>litora</td>
                            </tr>
                            <tr>
                            <td>1,013</td>
                            <td>torquent</td>
                            <td>per</td>
                            <td>conubia</td>
                            <td>nostra</td>
                            </tr>
                            <tr>
                            <td>1,014</td>
                            <td>per</td>
                            <td>inceptos</td>
                            <td>himenaeos</td>
                            <td>Curabitur</td>
                            </tr>
                            <tr>
                            <td>1,015</td>
                            <td>sodales</td>
                            <td>ligula</td>
                            <td>in</td>
                            <td>libero</td>
                            </tr>
                            <tr>
                            <td>1,015</td>
                            <td>sodales</td>
                            <td>ligula</td>
                            <td>in</td>
                            <td>libero</td>
                            </tr>
                            <tr>
                            <td>1,015</td>
                            <td>sodales</td>
                            <td>ligula</td>
                            <td>in</td>
                            <td>libero</td>
                            </tr>
                            <tr>
                            <td>1,015</td>
                            <td>sodales</td>
                            <td>ligula</td>
                            <td>in</td>
                            <td>libero</td>
                            </tr>
                            <tr>
                            <td>1,015</td>
                            <td>sodales</td>
                            <td>ligula</td>
                            <td>in</td>
                            <td>libero</td>
                            </tr>
                            <tr>
                            <td>1,015</td>
                            <td>sodales</td>
                            <td>ligula</td>
                            <td>in</td>
                            <td>libero</td>
                            </tr>
                            <tr>
                            <td>1,015</td>
                            <td>sodales</td>
                            <td>ligula</td>
                            <td>in</td>
                            <td>libero</td>
                            </tr>
                            <tr>
                            <td>1,015</td>
                            <td>sodales</td>
                            <td>ligula</td>
                            <td>in</td>
                            <td>libero</td>
                            </tr>
                            <tr>
                            <td>1,015</td>
                            <td>sodales</td>
                            <td>ligula</td>
                            <td>in</td>
                            <td>libero</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
        <alert/>
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
                        name : 'Sales',
                        link: '/sales',
                        show: true,
                        icon: 'bag-check'
                    },
                    {
                        name : 'Lead Generation',
                        link: '/lead-generation',
                        show: true,
                        icon: 'binoculars'
                    },
                    {
                        name : 'Sales Operations',
                        link: '/sales-operations',
                        show: true,
                        icon: 'clipboard-data'
                    },
                    {
                        name : 'Sales Leadership',
                        link: '/sales-leadership',
                        show: true,
                        icon:'people'
                    },
                    {
                        name : 'Relationship Management',
                        link: '/relationship-management',
                        show: true,
                        icon: 'hand-thumbs-up'
                    },
                    {
                        name : 'Sales Console',
                        link: '/sales-console',
                        show: false,
                        icon:'bar-chart-line'
                    },
                ]
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
</style>
