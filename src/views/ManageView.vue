<template>
    <v-container fluid>
        <Nav />
        <v-main>
            <v-row>
                <v-col cols="6">
                    <v-card class="ma-5">
                        <h3 class="ma-5">Manage Users</h3>
                        <div class="d-flex justify-space-between ma-5">
                            <v-sheet class="rounded-xl d-flex flex-column justify-center align-center" height="100" width="100" color="grey">
                                <v-icon class="ma-1">mdi-google</v-icon>
                                <small>Add User</small>
                            </v-sheet>
                            <v-sheet class="rounded-xl d-flex flex-column justify-center align-center" height="100" width="100" color="grey">
                                <v-icon class="ma-1">mdi-google</v-icon>
                                <small>Add User</small>
                            </v-sheet>
                            <v-sheet class="rounded-xl d-flex flex-column justify-center align-center" height="100" width="100" color="grey">
                                <v-icon class="ma-1">mdi-google</v-icon>
                                <small>Add User</small>
                            </v-sheet>
                            <v-sheet class="rounded-xl d-flex flex-column justify-center align-center" height="100" width="100" color="grey">
                                <v-icon class="ma-1">mdi-google</v-icon>
                                <small>Add User</small>
                            </v-sheet>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-main>
    </v-container>
</template>
<script>
import Nav from "../components/NavDrawer.vue"
export default {    
    components: {
        Nav
    }
    
}
</script>