<template>
  <v-container fluid>
    <Nav />
    <v-main>
      <h1 class="ma-5">Owner Dashboard</h1>
      <v-row align="start">
        <v-col cols="6">
          
          <v-card class="mx-5 pa-5 rounded-xl">
            <v-sheet color="transparent">
              <div class="d-flex justify-space-between align-center">
                <v-sheet class="mx-2 d-flex align-center justify-center rounded-lg" color="#EF3746" height="40" width="40"><v-icon>mdi-credit-card-clock</v-icon></v-sheet>
                <h4>Upcoming Dues</h4>
                <v-spacer></v-spacer>
                <v-btn variant="text" icon><v-icon>mdi-dots-horizontal</v-icon></v-btn>
              </div>

              <div class="ma-3 d-flex justify-space-evenly">
                <v-sheet height="80" width="80" class="d-flex justify-center align-center rounded-xl" color="#2A3280">
                  <p>Levies</p>
                </v-sheet>
                <v-sheet height="80" width="80" class="d-flex justify-center align-center rounded-xl" color="#2A3280">
                  <p>Utility</p>
                </v-sheet>
                <v-sheet height="80" width="80" class="d-flex justify-center align-center rounded-xl" color="#2A3280">
                  <p>Tax</p>
                </v-sheet>
                <v-sheet height="80" width="80" class="d-flex justify-center align-center rounded-xl" color="#2A3280">
                  <p>Others</p>
                </v-sheet>
              </div>

            </v-sheet>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-sheet class="ma-5">
            <div class="d-flex justify-space-between align-center">
              <div class="d-flex align-center">
                <v-sheet class="rounded-lg d-flex align-center justify-center" color="#EF3746" height="40" width="40"><v-icon color="">mdi-town-hall</v-icon></v-sheet>
                <h3 class="mx-2">Community Posts</h3>
              </div>
              
              <v-btn icon variant="text"><v-icon>mdi-arrow-right</v-icon></v-btn>
            </div>
            <div class="ma-5 d-flex justify-space-evenly">
              <div class="d-flex flex-column align-center">
                <v-icon color="#2A3280" size="45">mdi-forum</v-icon>
                <span>Join Chat</span>
              </div>
              <div class="d-flex flex-column align-center">
                <v-icon color="#2A3280" size="45">mdi-square-edit-outline</v-icon>
                <span>Create Post</span>
              </div>
              <div class="d-flex flex-column align-center">
                <v-icon color="#2A3280" size="45">mdi-newspaper-variant-multiple-outline</v-icon>
                <span>News</span>
              </div>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row justify="space-evenly">
        <v-col md="4" class="ml-5">
          <v-card flat class="pa-3" color="transparent">
            <v-card-text>
              <h2>Recent community activities</h2>
              <p>Explore fun activities and events near you today...</p>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="text" rounded="xl">Lets go</v-btn>
            </v-card-actions>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae quaerat tempore veritatis
                nemo ducimus.</p>
            </v-card-text>
            <p class="ma-5"><small>See all</small></p>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="6">
          <v-card flat color="transparent" class="pa-4 d-flex justify-space-between">
            <h3>Recent Activities</h3>
            <v-spacer />
            <a>See More<v-icon>mdi-chevron-right</v-icon></a>
          </v-card>
          <v-card flat color="transparent">
            <v-tabs v-model="tab">
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
                        <v-btn variant="plain" size="small" class="ma-2 pa-2">New</v-btn><v-btn variant="plain"
                          size="small" class="ma-2 pa-2">Resident Request</v-btn>
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
                        <v-btn variant="plain" size="small" class="ma-2 pa-2">New</v-btn><v-btn variant="plain"
                          size="small" class="ma-2 pa-2">Resident Request</v-btn>
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
            <h3>News and Update</h3>
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
import Nav from '../../components/OwnerNavDrawer.vue'
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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to left, #ffffff 40%, #657ABC 40%) !important; 
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
