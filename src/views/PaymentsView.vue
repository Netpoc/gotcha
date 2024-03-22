<template>
    <v-container fluid>
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
              <v-list-item prepend-icon="mdi-cash-sync" title="Payments"></v-list-item>
              <v-list-item prepend-icon="mdi-home-group" title="Community"></v-list-item>
              <v-list-item prepend-icon="mdi-account-details" title="Manage Users"></v-list-item>
              <v-list-item prepend-icon="mdi-magnify" title="Search"></v-list-item>
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
                <v-col cols="5">
                  <v-card flat class="pa-5">
                    <h1 class="mb-5">Payments</h1>
                    <div class="d-flex justify-space-between">
                        <div>
                            <v-icon>mdi-google</v-icon>
                            <p>Pay</p>
                        </div>
                        <div>
                            <v-icon>mdi-account</v-icon>
                            <p>Wallet</p>
                        </div>
                        <div>
                            <v-icon>mdi-account-details</v-icon>
                            <p>Reports</p>
                        </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card>             
                  
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