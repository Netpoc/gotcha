<template>
    <v-container fluid class="main">
        <Nav />
        <v-main>
            <h1>Community</h1>
            <v-row justify="space-between">
                <v-col md="6">
                    <v-card color="#2A3280" class="rounded-xl pa-5">
                        <div class="d-flex ma-5 justify-space-evenly">
                            <v-card class="rounded-xl" color="transparent" to="/tenant_chat" flat>
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
                        <div>
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
                                <strong class="mx-2">Birthday!</strong>
                            </div>
                            <small>2 mins ago</small>
                        </div>
                        <div class="pa-3 d-flex justify-space-between align-center">
                            <div>
                                <v-icon size="45">mdi-calendar-month</v-icon>
                                <strong class="mx-2">Birthday!</strong>
                            </div>
                            <small>2 mins ago</small>
                        </div>
                    </div>
                </v-col>
                
                <v-col md="5">
                    <v-card class="pa-5 rounded-xl">
                        <div class="d-flex justify-space-between align-center">
                            <h3>Group Membership</h3>
                            <v-btn variant="text"><v-icon>mdi-arrow-right</v-icon></v-btn>
                        </div>
                        <v-sheet class="rounded-xl" color="#647ABB" height="150">

                        </v-sheet>
                    </v-card>
                </v-col>
            </v-row>
        </v-main>
    </v-container>
</template>
<script>
import Nav from "../../components/TenantNav.vue"
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