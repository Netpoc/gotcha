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
                to="/about"
                prepend-icon="mdi-view-dashboard"
                title="Dashboard"
              ></v-list-item>
              <v-list-item to="payment" prepend-icon="mdi-cash-sync" title="Payments"></v-list-item>
              <v-list-item color="cyan" prepend-icon="mdi-home-group" title="Community"></v-list-item>
              <v-list-item to="manage" prepend-icon="mdi-account-details" title="Manage Users"></v-list-item>
              <v-list-item prepend-icon="mdi-magnify" title="Search"></v-list-item>
            </v-list>
    
            <template v-slot:append>
              <div class="pa-2">
                <v-btn variant="text" block> Settings </v-btn>
              </div>
              <div class="pa-2">
                <v-btn variant="text" to="/" block> Logout </v-btn>
              </div>
            </template>
          </v-navigation-drawer>
          <v-main class="ma-5" style="height: 90vh">
            <v-row>
                <v-col cols="6">
                    <v-card flat>
                        <h1 class="ma-5">Community</h1>
                    <div class="ma-5 d-flex justify-space-between">
                        <v-sheet
                        class="rounded-xl d-flex flex-column justify-center align-center"
                        height="100"
                        width="100"
                        color="blue">
                            <v-btn variant="text"><v-icon>mdi-chat</v-icon></v-btn>
                            <span><small>Chat</small></span>
                        </v-sheet>
                        <v-sheet
                        class="rounded-xl d-flex flex-column justify-center align-center"
                        height="100"
                        width="100"
                        color="blue">
                            <v-btn variant="text"><v-icon>mdi-chat</v-icon></v-btn>
                            <span><small>Chat</small></span>
                        </v-sheet>
                        <v-sheet
                        class="rounded-xl d-flex flex-column justify-center align-center"
                        height="100"
                        width="100"
                        color="blue">
                            <v-btn variant="text"><v-icon>mdi-chat</v-icon></v-btn>
                            <span><small>Chat</small></span>
                        </v-sheet>
                        <v-sheet
                        class="rounded-xl d-flex flex-column justify-center align-center"
                        height="100"
                        width="100"
                        color="blue">
                            <v-btn variant="text"><v-icon>mdi-chat</v-icon></v-btn>
                            <span><small>Chat</small></span>
                        </v-sheet>
                    </div>
                    </v-card>
                    <v-card class="mb-5" color="grey">
                        <div class="ma-5 d-flex justify-space-between">
                            <h3>Recent Posts</h3>
                            <v-btn variant="text">See more</v-btn>
                        </div>
                        <div class="ma-5 d-flex justify-space-between align-center">
                            <div class="d-flex">
                                <v-sheet
                                rounded="lg"
                                color="cyan" 
                                height="50" 
                                width="50">
                                </v-sheet>
                                    <div class="mx-3">
                                        <p>Hole in Bedroom</p>
                                        <div class="d-flex align-center">
                                            <v-sheet color="white" height="20" width="20" rounded="xl">
                                                <v-icon size="x-small">mdi-google</v-icon>
                                            </v-sheet>
                                            <p class="mx-3"><small>Baldwin Cole</small></p>
                                        </div>
                                        
                                    </div>
                            </div>                            
                            <p>2 days ago</p>
                        </div>
                        <div class="ma-5 d-flex justify-space-between align-center">
                            <div class="d-flex">
                                <v-sheet
                                rounded="lg"
                                color="white" 
                                height="50" 
                                width="50">
                                </v-sheet>
                                    <div class="mx-3">
                                        <p>Hole in Bedroom</p>
                                        <div class="d-flex align-center">
                                            <v-sheet color="grey" height="20" width="20" rounded="xl">
        
                                            </v-sheet>
                                            <p class="mx-3"><small>Baldwin Cole</small></p>
                                        </div>
                                        
                                    </div>
                            </div>
                            
                            <p>5 days ago</p>
                        </div>
                        <div class="ma-5 d-flex justify-space-between align-center">
                            <div class="d-flex">
                                <v-sheet
                                rounded="lg"
                                color="cyan" 
                                height="50" 
                                width="50">
                                </v-sheet>
                                    <div class="mx-3">
                                        <p>Hole in Bedroom</p>
                                        <div class="d-flex align-center">
                                            <v-sheet color="grey" height="20" width="20" rounded="xl">
        
                                            </v-sheet>
                                            <p class="mx-3"><small>Baldwin Cole</small></p>
                                        </div>
                                        
                                    </div>
                            </div>
                            
                            <p>6 days ago</p>
                        </div>
                    </v-card>
                    <v-card>
                        <div class="ma-5 d-flex justify-space-between align-center">
                            <h3>Upcoming Events</h3>
                            <v-btn size="small" class="rounded-xl" variant="text">See more</v-btn>
                        </div>
                    </v-card>                    
                </v-col>
                <v-col cols="6">
                    <v-sheet 
                    rounded="xl" 
                    height="250" 
                    color="grey">
                        <div class="pa-5 d-flex justify-space-between">
                            <h3>Approvals</h3>
                            <v-btn variant="text"><v-icon>mdi-arrow-right</v-icon></v-btn>
                        </div>
                    </v-sheet>
                </v-col>
            </v-row>
          </v-main>
    </v-container>
</template>