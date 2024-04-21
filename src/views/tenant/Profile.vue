<template>
    <v-container fluid>
        <Nav />
        <v-main> 
            <h1>Profile</h1>           
            <v-row>                
                <v-col md="5">
                    <v-card color="transparent" class="pa-5 d-flex justify-space-evenly" flat>
                        <v-sheet color="#EF3746" height="100" width="100" class="rounded-xl d-flex flex-column align-center justify-center">
                            <v-icon>
                                mdi-card
                            </v-icon>
                            <small>Edit Profile</small>
                        </v-sheet>
                        <v-sheet color="#EF3746" height="100" width="100" class="rounded-xl d-flex flex-column align-center justify-center">
                            <v-icon>
                                mdi-card
                            </v-icon>
                            <small>Account</small>
                        </v-sheet>
                        <v-sheet color="#EF3746" height="100" width="100" class="rounded-xl d-flex flex-column align-center justify-center">
                            <v-icon>
                                mdi-card
                            </v-icon>
                            <small>Community</small>
                        </v-sheet>
                    </v-card>

                    <div>
                        <h3></h3>
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