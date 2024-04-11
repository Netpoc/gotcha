<template>
  <v-container class="main" fluid>    
      <Nav />
      <v-main class="ma-5">
      <v-row align="center">
          <v-col cols="6">
            <v-card color="transparent" class="ma-5" flat>
              <h1>Occupant Dashboard</h1>
              <v-sheet class="pa-5 rounded-xl" color="yellow" elevation="8">
                <div class="ma-5 d-flex justify-space-evenly">
                  <v-sheet class="d-flex ma-3 rounded-xl flex-column align-center justify-center" height="100" width="100" color="#EF3746">
                    <v-icon size="45">mdi-forum</v-icon>
                    <small>Chat</small>
                  </v-sheet>
                  <v-sheet class="d-flex ma-3 rounded-xl flex-column align-center justify-center" height="100" width="100" color="#EF3746">
                    <v-icon size="45">mdi-square-edit-outline</v-icon>
                    <small>Create post</small>
                  </v-sheet>
                  <v-sheet class="d-flex ma-3 rounded-xl flex-column align-center justify-center" height="100" width="100" color="#EF3746">
                    <v-icon size="45">mdi-newspaper-variant-multiple-outline</v-icon>
                    <small>News</small>
                  </v-sheet>
                </div>
              </v-sheet>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              prepend-icon="mdi-account"
              subtitle="Properties"
              title="36"
              class="rounded-xl ma-5 pa-3"
              color="#24BAAB"
              min-height="250"
            >
              <template v-slot:append>
                <a>See all <v-icon>mdi-arrow-right</v-icon></a>
              </template>

              <v-row>
                <v-col>

                <v-card class="ma-5 pa-5 d-flex justify-space-between rounded-xl">
                  <div>
                    <p>8</p>
                    <p>Vacant</p>
                  </div>
                  <v-divider vertical></v-divider>
                  <div>
                    <p>8</p>
                    <p>Vacant</p>
                  </div>
                  <v-divider vertical></v-divider>
                  <div>
                    <p>8</p>
                    <p>Vacant</p>
                  </div>
                </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
      </v-row>
        <v-row justify="space-evenly">
          <v-col md="4" class="ml-5">
            <v-card flat class="pa-3" color="transparent">
              <div>
                <v-row>
                  <v-col>
                <div>
                  <h2>Recent community activities</h2>
                  <p>Explore fun activities and events near you today...</p>
                </div>                
  
                <div class="d-flex align-end">
                  <v-btn rounded="xl">Lets go</v-btn>
                </div>
                </v-col> 
              </v-row>
              </div>           
            </v-card>
          </v-col>
          <v-col md="3">
            <v-card class="rounded-xl">
              <div class="ma-5">
                <v-img height="150" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>
              </div>              
              <v-card-text>        
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam saepe, 
                officia et totam nihil 
              </v-card-text>
              <p class="ma-5"><small>See all</small></p>
            </v-card>
          </v-col>
          <v-col md="3">
            <v-card class="rounded-xl" color="#2A3280">
              <div class="ma-5">
                <v-img height="150" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>
              </div>
              <v-card-text>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae quaerat tempore veritatis nemo ducimus.</p>
              </v-card-text>
              <p class="ma-5"><small>See all</small></p>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6">
            <v-card flat class="pa-4 d-flex justify-space-between">  
                <h3>Recent Tasks</h3>
                <v-spacer />                
                <a>See More<v-icon>mdi-chevron-right</v-icon></a>
            </v-card>
            <v-card flat>
              <v-tabs
                v-model="tab"                
              >
                <v-tab value="one">Incoming Requests</v-tab>
                <v-tab value="two">Assigned to me</v-tab>                
              </v-tabs>

              <v-card-text>
                <v-window v-model="tab">
                  <v-window-item value="one">
                    <div class="ma-5">
                      <div>
                        <p>Hole in Bedroom well at 150 Gordon Crescent...</p>
                      </div>
                      <div class="d-flex justify-space-between">
                        <div>
                          <v-btn variant="plain" size="small" class="ma-2 pa-2">New</v-btn><v-btn variant="plain" size="small" class="ma-2 pa-2">Resident Request</v-btn>
                        </div>                       
                        <div class="d-flex align-center">3days ago</div>
                      </div>
                      <div>
                        <v-avatar size="x-small">
                          <v-icon icon="mdi-account-circle"></v-icon> 
                        </v-avatar>
                       <small>Phil Norlan</small> 
                      </div>
                      <v-divider class="mt-3"></v-divider> 
                    </div>
                    <div class="ma-5">
                      <div>
                        <p>Hole in Bedroom well at 150 Gordon Crescent...</p>
                      </div>
                      <div class="d-flex justify-space-between">
                        <div>
                          <v-btn variant="plain" size="small" class="ma-2 pa-2">New</v-btn><v-btn variant="plain" size="small" class="ma-2 pa-2">Resident Request</v-btn>
                        </div>                       
                        <div class="d-flex align-center">3days ago</div>
                      </div>
                      <div>
                        <v-avatar size="x-small">
                          <v-icon icon="mdi-account-circle"></v-icon> 
                        </v-avatar>
                       <small>Phil Norlan</small> 
                      </div>
                      <v-divider class="mt-3"></v-divider> 
                    </div>              
                  </v-window-item>

                  <v-window-item value="two">
                    Two
                  </v-window-item>
                </v-window>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="6">
            <div class="pa-4 d-flex justify-space-between">              
                <h3>Expiring Leases</h3>
                <v-spacer />                
                <a href="#">See More<v-icon>mdi-chevron-right</v-icon></a>             
            </div>
            <div class="ma-5">
              <Bar :data="data" :options="options" />
            </div>
          </v-col>
        </v-row>                   
      </v-main>      
  </v-container>
</template>
<script>
  import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import Nav from '../../components/TenantNav.vue'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {  
  name: 'App',
  components: {
    Bar,
    Nav
  },
  data() {
    return {
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }]
      },
      options: {
        responsive: true
      }
    }
  }
}
</script>
<style scoped>
.main {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to left, #ffffff 40%, #2a3280 40%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.center {
  display: inline-block;
  height: 250px;
  width: 15%;
  margin: 0 auto;
  border: 1px solid black;
}
</style>
