<template>
    <v-container fluid class="main">
        <Nav />
        <v-main>
            <v-row align="start">
                <v-col cols="6">
                    <h1 class="ma-5">Accounts</h1>
                    <v-card class="pa-5 d-flex justify-space-evenly rounded-xl">
                        <v-sheet class="rounded-xl d-flex flex-column align-center justify-center" height="100"
                            width="100" color="#24BAAB">
                            <v-icon>mdi-card</v-icon>
                            <p>Pay</p>
                        </v-sheet>
                        <v-sheet class="rounded-xl d-flex flex-column align-center justify-center" height="100"
                            width="100" color="#24BAAB">
                            <v-icon size="40">mdi-wallet-outline</v-icon>
                            <p>Wallet</p>
                        </v-sheet>
                        <v-sheet class="rounded-xl d-flex flex-column align-center justify-center" height="100"
                            width="100" color="#24BAAB">
                            <v-icon size="40">mdi-file-sign</v-icon>
                            <p>Report</p>
                        </v-sheet>
                        <v-sheet class="rounded-xl d-flex flex-column align-center justify-center" height="100"
                            width="100" color="#24BAAB">
                            <v-icon>mdi-card</v-icon>
                            <p>Misc</p>
                        </v-sheet>
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-sheet class="mx-5 rounded-xl" color="grey" height="300">
                        <div class="pa-5 d-flex justify-space-between">
                            <h3>My Cards</h3>
                            <v-btn icon><v-icon>mdi-arrow-right</v-icon></v-btn>
                        </div>
                        <v-sheet color="cyan" height="250">

                        </v-sheet>
                    </v-sheet>
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
    data() {
        return {

        }
    }
}
</script>