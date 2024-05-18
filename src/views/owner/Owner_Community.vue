<template>
    <v-container fluid>
        <Nav />
        <v-main class="ma-5">
            <h1 class="mx-5">Community</h1>
            <v-row align="top" justify="space-between">
                <v-col md="6">
                    <v-card flat class="rounded-xl mx-5">
                        <div class="d-flex pa-5 justify-space-evenly">
                            <v-card class="rounded-xl" color="transparent" to="/owner_chat" flat>
                            <v-sheet color="#EF3746" class="rounded-xl d-flex justify-center" height="100" width="100">
                                <div class="d-flex flex-column justify-center align-center">
                                    <v-icon color="#2A3280" size="45">mdi-forum</v-icon>
                                    <small>Chat</small>
                                </div>
                            </v-sheet>
                            </v-card>
                            <v-card class="rounded-xl" color="transparent" to="/tenant_chat" flat>
                            <v-sheet color="#EF3746" class="rounded-xl d-flex justify-center" height="100" width="100">
                                <div class="d-flex flex-column justify-center align-center">
                                    <v-icon color="#2A3280" size="45">mdi-square-edit-outline</v-icon>
                                    <small>Create Post</small>
                                </div>
                            </v-sheet>
                            </v-card>
                            <v-card class="rounded-xl" color="transparent" to="/tenant_chat" flat>
                            <v-sheet color="#EF3746" class="rounded-xl d-flex justify-center" height="100" width="100">
                                <div class="d-flex flex-column justify-center align-center">
                                    <v-icon color="#2A3280" size="45">mdi-newspaper-variant-multiple-outline</v-icon>
                                    <small>News</small>
                                </div>
                            </v-sheet>
                            </v-card>
                        </div>
                        <div class="pa-5">
                            <div class="d-flex justify-space-between">
                                <h3>Recent Posts</h3>
                                <v-btn variant="text" size="x-small">See more</v-btn>
                            </div>
                            <div class="ma-5 d-flex align-center justify-space-between">
                                <div class="d-flex align-center">
                                    <v-sheet height="55" width="55" class="rounded-lg" color="grey">

                                    </v-sheet>
                                    <div class="mx-2">
                                        <strong>Summer party with the williams...</strong>
                                        <div class="d-flex align-center">
                                            <v-sheet 
                                            height="25" 
                                            width="25" 
                                            class="rounded-xl d-flex justify-center align-center">
                                                <v-icon size="small">mdi-account</v-icon>                                            
                                            </v-sheet>
                                            <small class="mx-2">Willams Olsen</small>
                                        </div>
                                    </div>
                                </div>
                                <small>2 days ago</small>
                            </div>

                            <div class="ma-5 d-flex align-center justify-space-between">
                                <div class="d-flex align-center">
                                    <v-sheet height="55" width="55" class="rounded-lg" color="grey">

                                    </v-sheet>
                                    <div class="mx-2">
                                        <strong>Summer party with the williams...</strong>
                                        <div class="d-flex align-center">
                                            <v-sheet 
                                            height="25" 
                                            width="25" 
                                            class="rounded-xl d-flex justify-center align-center">
                                                <v-icon size="small">mdi-account</v-icon>                                            
                                            </v-sheet>
                                            <small class="mx-2">Willams Olsen</small>
                                        </div>
                                    </div>
                                </div>
                                <small>2 days ago</small>
                            </div>

                            <div class="ma-5 d-flex align-center justify-space-between">
                                <div class="d-flex align-center">
                                    <v-sheet height="55" width="55" class="rounded-lg" color="grey">

                                    </v-sheet>
                                    <div class="mx-2">
                                        <strong>Summer party with the williams...</strong>
                                        <div class="d-flex align-center">
                                            <v-sheet 
                                            height="25" 
                                            width="25" 
                                            class="rounded-xl d-flex justify-center align-center">
                                                <v-icon size="small">mdi-account</v-icon>                                            
                                            </v-sheet>
                                            <small class="mx-2">Willams Olsen</small>
                                        </div>
                                    </div>
                                </div>
                                <small>2 days ago</small>
                            </div>
                            
                        </div>
                    </v-card>

                    <div class="ma-5">
                        <div class="d-flex justify-space-between">
                            <h3>Upcoming Events</h3>
                            <v-btn variant="text" size="small">See more</v-btn>
                        </div>
                        <div class="pa-3 d-flex justify-space-between align-center">
                            <div>
                                <v-icon size="45">mdi-calendar-month</v-icon>
                                <strong class="mx-2">Birthday!</strong>
                            </div>
                            <small>2 mins ago</small>
                        </div>
                        <div class="pa-3 d-flex justify-space-between align-center">
                            <div>
                                <v-icon size="45">mdi-calendar-month</v-icon>
                                <strong class="mx-2">Community Meeting</strong>
                            </div>
                            <small>2 mins ago</small>
                        </div>
                        <div class="pa-3 d-flex justify-space-between align-center">
                            <div>
                                <v-icon size="45">mdi-calendar-month</v-icon>
                                <strong class="mx-2">Carnival</strong>
                            </div>
                            <small>2 mins ago</small>
                        </div>
                    </div>
                </v-col>
                
                <v-col md="5">
                    <v-card class="pa-5 rounded-xl">                        
                                <div class="mb-4 d-flex justify-space-between align-center">
                                    <div class="d-flex align-center">
                                        <v-sheet class="rounded-lg mx-3 d-flex align-center justify-center" color="#EF3746" height="40" width="40">
                                        <v-icon size="30">mdi-crowd</v-icon>                                        
                                        </v-sheet>
                                        <h3>Group Membership</h3>
                                        
                                    </div>
                                    
                                    
                                    <v-btn variant="text"><v-icon>mdi-arrow-right</v-icon></v-btn>
                                </div>
                                <v-sheet class="rounded-xl" color="#647ABB" height="150">
        
                                </v-sheet>                        
                    </v-card>
                    <v-card class="pa-5 mt-5" flat>
                        <v-row justify="space-around">
                            <v-col cols="5">
                                <v-card flat class="d-flex flex-column align-center">
                                    <v-sheet color="cyan" height="120" width="100%" class="rounded-xl">

                                    </v-sheet>
                                    <span class="ma-2">
                                        Explore fun activities and events near you today...
                                    </span>
                                </v-card>
                            </v-col>
                            <v-col cols="5">
                                <v-card flat class="d-flex flex-column align-center">
                                    <v-sheet color="cyan" height="120" width="100%" class="rounded-xl">

                                    </v-sheet>
                                    <span class="ma-2">
                                        Explore fun activities and events near you today...
                                    </span>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>

                    <v-card flat>
                        <h3>News & Updates</h3>
                        <div class="mt-5 d-flex align-center justify-space-between">
                            <div>
                                <p>Pest control service available</p>
                            <div>
                                <v-btn class="mr-2" size="x-small">New</v-btn>
                                <v-btn size="x-small">Advertisement</v-btn>
                            </div>
                            <div class="mt-2 d-flex align-center">
                                <v-sheet height="25" width="25" class="rounded-xl" color="grey">
                                    <v-icon>mdi-account</v-icon>                                    
                                </v-sheet>
                                <small class="mx-2">Admin</small>
                            </div>
                            </div>
                            <small>1 min ago</small>
                        </div>
                        <div class="mt-5 d-flex align-center justify-space-between">
                            <div>
                                <p>Pest control service available</p>
                            <div>
                                <v-btn class="mr-2" size="x-small">New</v-btn>
                                <v-btn size="x-small">Advertisement</v-btn>
                            </div>
                            <div class="mt-2 d-flex align-center">
                                <v-sheet height="25" width="25" class="rounded-xl" color="grey">
                                    <v-icon>mdi-account</v-icon>                                    
                                </v-sheet>
                                <small class="mx-2">Admin</small>
                            </div>
                            </div>
                            <small>1 min ago</small>
                        </div>
                        <div class="mt-5 d-flex align-center justify-space-between">
                            <div>
                                <p>Pest control service available</p>
                            <div>
                                <v-btn class="mr-2" size="x-small">New</v-btn>
                                <v-btn size="x-small">Advertisement</v-btn>
                            </div>
                            <div class="mt-2 d-flex align-center">
                                <v-sheet height="25" width="25" class="rounded-xl" color="grey">
                                    <v-icon>mdi-account</v-icon>                                    
                                </v-sheet>
                                <small class="mx-2">Admin</small>
                            </div>
                            </div>
                            <small>1 min ago</small>
                        </div>
                    </v-card>

                </v-col>
            </v-row>
        </v-main>
    </v-container>
</template>
<script>
import Nav from "../../components/OwnerNavDrawer.vue"
export default {
    components: {
        Nav
    },
    data () {
        return {

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
    background: linear-gradient(to left, #ffffff 40%, #647ABB 40%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>