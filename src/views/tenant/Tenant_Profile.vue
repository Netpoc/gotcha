<template>
    <v-container fluid>
        <Nav />
        <v-main> 
            <h1 class="mx-5">Profile</h1>           
            <v-row justify="space-between">                
                <v-col md="6">
                    <v-card color="#2A3280" class="mx-5 pa-5 d-flex justify-space-evenly rounded-xl" flat>
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
                                <small>Password</small>
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
                                <small>Card</small>
                            </v-sheet>
                        </v-card>
                    </v-card>

                    <div class="ma-5">
                        <div class="d-flex justify-space-between align-center">
                            <h3>Notification Prefrences</h3>
                            <v-btn size="x-small" variant="text" class="rounded-xl"> See more</v-btn>
                        </div>
                        <div>
                            <v-row>
                                <v-col>
                                    <v-checkbox
                                        v-model="checkbox"
                                        :rules="[v => !!v || 'You must agree to continue!']"
                                        label="Do you agree?"
                                        required
                                    ></v-checkbox>
                                    
                                    <v-radio-group
                                        v-model="inline"
                                        inline
                                        >
                                        <v-radio
                                            label="Option 1"
                                            value="radio-1"
                                        ></v-radio>
                                        <v-radio
                                            label="Option 2"
                                            value="radio-2"
                                        ></v-radio>
                                        </v-radio-group>
                                        <v-checkbox
                                        v-model="checkbox"
                                        :rules="[v => !!v || 'You must agree to continue!']"
                                        label="Do you agree?"
                                        required
                                    ></v-checkbox>
                                </v-col>
                                <v-col>
                                    <v-checkbox
                                        v-model="checkbox1"
                                        :rules="[v => !!v || 'You must agree to continue!']"
                                        label="Do you agree?"
                                        required
                                    ></v-checkbox>
                                    <v-checkbox
                                        v-model="checkbox"
                                        :rules="[v => !!v || 'You must agree to continue!']"
                                        label="Do you agree?"
                                        required
                                    ></v-checkbox>
                                    <v-radio-group
                                        v-model="inline1"
                                        inline1
                                        >
                                        <v-radio
                                            label="Option 1"
                                            value="radio-1"
                                        ></v-radio>
                                        <v-radio
                                            label="Option 2"
                                            value="radio-2"
                                        ></v-radio>
                                        </v-radio-group>
                                </v-col>
                            </v-row>

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
            <v-row>
                <v-col>
                    <v-card class="mx-5 pa-5 rounded-xl" color="transparent">
                        <h3>More Settings</h3>
                        <v-row align="top" justify="space-evenly">
                            <v-col md="6">
                                <v-card class="pa-5" flat>
                                    <h4 class="ma-3">Password Modification</h4>
                                <v-text-field
                                    v-model="firstName"
                                    :rules="firstNameRules"
                                    label="Current Password"
                                    type="password"
                                ></v-text-field>
                                <v-text-field
                                    v-model="firstName"
                                    :rules="firstNameRules"
                                    label="New Password"
                                    type="password"
                                ></v-text-field>
                                <v-text-field
                                    v-model="firstName"
                                    :rules="firstNameRules"
                                    label="Re-type New Password"
                                    type="password"
                                ></v-text-field>                                
                                <v-btn color="#EF3746" class="rounded-xl">Save</v-btn>
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card class="pa-5" flat>
                                    <h4 class="ma-3">Update Address</h4>
                                    <v-text-field
                                    v-model="firstName"
                                    :rules="firstNameRules"
                                    label="Address"                                    
                                ></v-text-field>
                                <v-text-field
                                    v-model="firstName"
                                    :rules="firstNameRules"
                                    label="City/State"                                    
                                ></v-text-field>
                                <v-text-field
                                    v-model="firstName"
                                    :rules="firstNameRules"
                                    label="Zip Code"                                   
                                ></v-text-field>
                                <v-btn color="#EF3746" class="rounded-xl">Save</v-btn>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
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
            checkbox: false,
            checkbox1: false,
            column: null,
            inline: null,
            inline1: null
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