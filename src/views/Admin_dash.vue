<template>
  <v-container class="main" fluid>    
      <v-navigation-drawer theme="dark" color="#2A3280" permanent>
        <div class="mb-5">
          <v-img max-height="80" src="../assets/tester.png"></v-img>
        </div>
        <v-divider></v-divider>
        <div class="d-flex flex-column align-center ma-5">
          <div>
            <v-avatar color="grey" size="100">
              <v-img
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                cover
              ></v-img>
            </v-avatar>
          </div>
          <div>
            <p>Sample User</p>
            <v-chip>Admin</v-chip>
          </div>
        </div>

        <v-list color="transparent">
          <v-list-item
            to="/"
            prepend-icon="mdi-view-dashboard"
            title="Dashboard"
          ></v-list-item>
          <v-list-item prepend-icon="mdi-account-box" title="Payments"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Community"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Manage Users"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Search"></v-list-item>
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn variant="text" to="/" block> Settings </v-btn>
          </div>
          <div class="pa-2">
            <v-btn variant="text" to="/" block> Logout </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main class="ma-5" style="height: 90vh">
      <v-row align="center">
          <v-col cols="6">
            <v-card color="#2A3280" class="ma-5">
              <h1 class="mb-5">Admin Dashboard</h1>
              <v-sheet class="mx-auto rounded-xl" color="transparent" elevation="8">
                <v-card
                  flat
                  color="transparent"
                  class="pa-4 d-flex justify-space-between"
                >
                  <span>Activities Due</span>
                  <v-spacer></v-spacer>
                  <a><v-icon>mdi-dots-horizontal</v-icon></a>
                </v-card>

                <v-slide-group
                  v-model="model"
                  class="pa-4"
                  selected-class="bg-primary"
                  show-arrows
                >
                  <v-slide-group-item
                    v-for="n in 6"
                    :key="n"
                    v-slot="{ isSelected, toggle, selectedClass }"
                  >
                    <v-card
                      :class="['ma-4', selectedClass, 'rounded-xl']"
                      color="grey-lighten-1"
                      height="80"
                      width="80"
                      @click="toggle"
                    >
                      <div class="d-flex fill-height align-center justify-center">
                        <v-scale-transition>
                          <v-icon
                            v-if="isSelected"
                            color="white"
                            icon="mdi-close-circle-outline"
                            size="48"
                          ></v-icon>
                        </v-scale-transition>
                      </div>
                    </v-card>
                  </v-slide-group-item>
                </v-slide-group>

                <v-expand-transition>
                  <v-sheet v-if="model != null" height="150">
                    <div class="d-flex fill-height align-center justify-center">
                      <h3 class="text-h6">Selected {{ model }}</h3>
                    </div>
                  </v-sheet>
                </v-expand-transition>
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
        <v-row>
          <v-col md="4" class="ml-5">
            <v-card flat height="250" class="pa-3">
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
          <v-col md="4">
            <v-card class="rounded-xl">
              <v-img height="250" src="../assets/logo.png" cover></v-img>
              <v-card-item>
                <v-card-title>Cafe Badilico</v-card-title>

                <v-card-subtitle>
                  <span class="me-1">Local Favorite</span>

                  <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                </v-card-subtitle>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col md="3">
            <v-card class="rounded-xl" color="#2A3280" min-height="250"> </v-card>
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
            <v-card class="pa-4 d-flex justify-space-between">              
                <span>Recent</span>
                <v-spacer />                
                <a href="#">See More<v-icon>mdi-chevron-right</v-icon></a>             
            </v-card>
            <v-card>
              <v-tabs
                v-model="tab"
                bg-color="primary"
              >
                <v-tab value="one">Item One</v-tab>
                <v-tab value="two">Item Two</v-tab>
                <v-tab value="three">Item Three</v-tab>
              </v-tabs>

              <v-card-text>
                <v-window v-model="tab">
                  <v-window-item value="one">
                    One
                  </v-window-item>

                  <v-window-item value="two">
                    Two
                  </v-window-item>

                  <v-window-item value="three">
                    Three
                  </v-window-item>
                </v-window>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>                   
      </v-main>      
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      tab: null,
    }),
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
