<template>
    <v-container class="main" fluid>
        <Nav />
        <v-main> 
            <h1>Profile</h1>           
            <v-row justify="space-between">                
                <v-col md="6">
                    <v-card color="#2A3280" class="ma-5 pa-5 d-flex justify-space-evenly rounded-xl" flat>
                        <v-card class="rounded-xl" to="#" color="transparent">
                            <v-sheet color="#EF3746" height="100" width="100" class="rounded-xl d-flex flex-column align-center justify-center">
                                <v-icon size="45">
                                    mdi-account-edit
                                </v-icon>
                                <small>Edit Profile</small>
                            </v-sheet>
                        </v-card>
                        <v-card class="rounded-xl" to="#" color="transparent">
                            <v-sheet color="#EF3746" height="100" width="100" class="rounded-xl d-flex flex-column align-center justify-center">
                                <v-icon size="45">
                                    mdi-shield-key
                                </v-icon>
                                <small>Account</small>
                            </v-sheet>
                        </v-card>
                        <v-card class="rounded-xl" to="#" color="transparent">
                            <v-sheet color="#EF3746" height="100" width="100" class="rounded-xl d-flex flex-column align-center justify-center">
                                <v-icon size="45">
                                    mdi-home-group
                                </v-icon>
                                <small>Community</small>
                            </v-sheet>
                        </v-card>
                        <v-card class="rounded-xl" to="#" color="transparent">
                            <v-sheet color="#EF3746" height="100" width="100" class="rounded-xl d-flex flex-column align-center justify-center">
                                <v-icon size="45">
                                    mdi-home-group
                                </v-icon>
                                <small>Others</small>
                            </v-sheet>
                        </v-card>
                    </v-card>

                    <div>
                        <div class="d-flex justify-space-between align-center">
                            <h3>Recent transactions</h3>
                            <v-btn size="x-small" variant="text" class="rounded-xl"> See more</v-btn>
                        </div>
                        <div>

                        </div>
                    </div>
                </v-col>
                <v-col md="5">                    
                    <v-card class="pa-5 rounded-xl">
                        <div class="d-flex justify-space-between">
                            <h3>My Cards</h3>
                            <v-btn variant="text"><v-icon>mdi-arrow-right</v-icon></v-btn>
                        </div>
                        
                    
                    <div class="d-flex justify-center">
                        <v-sheet class="rounded-xl" color="grey" height="170" width="250">

                        </v-sheet>
                    </div>
                    </v-card>
                    <div class="ma-5">
                        <div class="d-flex justify-space-between align-center">
                            <h3>Manage Visitors</h3>
                            <v-btn variant="text"><v-icon>mdi-plus</v-icon></v-btn>
                        </div>
                        <div class="d-flex justify-center align-center">
                            <small>No visitors</small>
                        </div>
                    </div>
                    <div class="ma-5">
                        <div class="d-flex justify-space-between align-center">
                            <h3>Manage Vehicles</h3>
                            <v-btn variant="text"><v-icon>mdi-plus</v-icon></v-btn>
                        </div>
                        <div class="d-flex justify-center align-center">
                            <small>No visitors</small>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-main>
    </v-container>
</template>
<script>
import Nav from '../../components/TenantNav.vue'

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