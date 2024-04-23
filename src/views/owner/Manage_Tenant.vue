<template>
    <v-container fluid>
        <Nav />
        <v-main>
            <h1 class="ma-5">Tenants Management</h1>
            <v-row justify="space-evenly">
                <v-col md="5">
                    <v-card class="pa-5 d-flex justify-space-around rounded-xl">
                        <v-sheet class="rounded-xl d-flex flex-column align-center justify-center" color="grey" height="100" width="100">
                            <v-icon size="45">
                                mdi-message-text
                            </v-icon>
                            <small>New Message</small>
                        </v-sheet>
                        <v-sheet class="rounded-xl d-flex flex-column align-center justify-center" color="grey" height="100" width="100">
                            <v-icon size="45">
                                mdi-account-cog-outline
                            </v-icon>
                            <small>Manage</small>
                        </v-sheet>
                        <v-sheet class="rounded-xl d-flex flex-column align-center justify-center" color="grey" height="100" width="100">
                            <v-icon size="45">
                                mdi-message-text
                            </v-icon>
                            <small>Pre-Authorize</small>
                        </v-sheet>
                    </v-card>
                </v-col>
                <v-col md="7">
                    <v-card class="pa-5 rounded-xl">
                        <div class="d-flex justify-space-between align-center">
                            <div class="d-flex align-center">
                                <v-icon size="45">
                                    mdi-home-city
                                </v-icon>
                                <div class="mx-2">
                                    <h3>36</h3>
                                    <small>Propeerties</small>                                
                                </div>
                            </div>
                            <v-btn size="x-small" variant="text">See all <v-icon>mdi-arrow-right</v-icon></v-btn>
                        </div>
                        <v-sheet height="100" color="blue" class="ma-5 d-flex align-center rounded-xl justify-space-between">
                            <div class="ma-5 d-flex flex-column align-center">
                                <span>8</span>
                                <small>Vacant</small>
                            </div>
                            <v-divider
                            class="ms-3"
                            inset
                            vertical
                            ></v-divider>
                            <div class="ma-5 d-flex flex-column align-center">
                                <span>22</span>
                                <small>Occupied</small>
                            </div>
                            <v-divider
                            class="ms-3"
                            inset
                            vertical
                            ></v-divider>
                            <div class="ma-5 d-flex flex-column align-center">
                                <span>6</span>
                                <small>Unlisted</small>
                            </div>
                        </v-sheet>
                    </v-card>
                </v-col>
            </v-row>
        </v-main>
    </v-container>
</template>
<script>
import Nav from '../../components/OwnerNavDrawer.vue'
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