<template>
    <div class="container-fluid">
        <div class="row">
            <side-bar :links="links" />
            <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <div>
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 border-bottom">
                        <h1 class="h2">Stratagic Sourcing</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">

                        <button @click="$router.push('/strategic-sourcing/new')" type="button" class="btn btn-sm btn-primary">
                            <svg class="bi" width="18" height="18" fill="currentColor">
                                <use xlink:href="/assets/icons/bootstrap-icons.svg#plus"/>
                            </svg>
                            New RFP
                        </button>
                        </div>
                    </div>
                    <div>
                        <div class="row align-items-start p-2">
                        <div class="col-12 col-md-6">
                            <div class="row">
                                <div class="col-4">
                                    <div class="bg-red rounded-lg shadow">
                                        <span class="d-block text-center py-2" style="background-color:rgba(0,0,0,.1)">Sourcing</span>
                                        <h3 class="p-3 text-center">
                                            1 <span class="d-none d-sm-block">Project</span>
                                        </h3>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="bg-yellow rounded-lg shadow">
                                        <span class="d-block text-center py-2" style="background-color:rgba(0,0,0,.1)">Awarded</span>
                                        <h3 class="p-3 text-center">
                                            0 <span class="d-none d-sm-block">Awarded</span>
                                        </h3>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="bg-green rounded-lg shadow">
                                        <span class="d-block text-center py-2" style="background-color:rgba(0,0,0,.1)">Completed</span>
                                        <h3 class="p-3 text-center">
                                            0 <span class="d-none d-sm-block">Completed</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="my-2 shadow rounded">
                                <highcharts :options="barChart"></highcharts>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="p-2 rounded shadow">
                                <highcharts :options="chartOptions"></highcharts>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import SideBar from './SideBar.vue'
import {Chart} from 'highcharts-vue'
// import Highcharts from 'highcharts'
// import exportingInit from 'highcharts/modules/exporting'
    export default {
        components:{ SideBar, highcharts: Chart },
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
                chartOptions: {
                    chart: {
                        // type: 'column',
                        backgroundColor: "#f8fafc",
                        plotBorderWidth: 0,
                        type: 'pie',
                        colors: ['#3490dc', '#6c757d', '#38c172', '#ffed4a', '#e3342f', '#4dc0b5', '#f66d9b', '#9561e2', '#6574cd']
                    },
                    credits: {
                        enabled: false,
                        // href : "https://twin.twinsa.net",
                        // text : 'Twin SA',
                        // style:{
                        //     // color : "pink",
                        //     fontSize : '1.2em'
                        // }
                    },
                    title: {
                        // text: 'Monthly sales report. January, 2020'
                        text: ''
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    accessibility: {
                        point: {
                            valueSuffix: '%'
                        }
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true
                        }
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: [
                            {
                                name: 'Chrome',
                                y: 61.41,
                                // sliced: true,
                                // selected: true
                            }, 
                            {
                                name: 'Internet Explorer',
                                y: 11.84
                            }, 
                            {
                                name: 'Firefox',
                                y: 10.85
                            },
                            {
                                name: 'Other',
                                y: 2.61
                            }
                        ]
                    }]
                },
                barChart:{
                    chart: {
                        type: 'column',
                        colors: ['#3490dc', '#6c757d', '#38c172', '#ffed4a', '#e3342f', '#4dc0b5', '#f66d9b', '#9561e2', '#6574cd']
                    },
                    credits: {
                        enabled: false,
                    },
                    title: {
                        text: 'Browser market shares. January, 2018'
                    },
                    // subtitle: {
                    //     text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
                    // },
                    accessibility: {
                        announceNewData: {
                            enabled: true
                        }
                    },
                    xAxis: {
                        type: 'category'
                    },
                    yAxis: {
                        title: {
                            text: 'Number of RFX'
                        }

                    },
                    legend: {
                        enabled: true,
                        // backgroundColor : "Yellowish background"
                    },
                    plotOptions: {
                        series: {
                            borderWidth: 0,
                            dataLabels: {
                                enabled: true,
                                format: '{point.y:.1f}%'
                            },
                            showInLegend: true
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                    },
                    series: [
                        {
                            name: "Sourcing",
                            colorByPoint: true,
                            data: [
                                {
                                    name: "Sourcing",
                                    y: 62.74,
                                },
                                {
                                    name: "Awarded",
                                    y: 10.57,
                                },
                                {
                                    name: "Completed",
                                    y: 10.58,
                                }
                            ]
                        }
                    ],
                }
            }
        },
        beforeCreate(){
            if(!UserClass.loggedIn()){
                this.$router.push('/')
            }
        }
    }
</script>
