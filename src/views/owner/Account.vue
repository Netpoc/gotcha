<template>
    <v-container fluid>
        <Nav />
        <v-main>
            <v-row>
                <v-col cols="6">
                    <h2>Payments</h2>
                    <v-card color="#C0E5E2" class="ma-5 d-flex justify-space-evenly">
                        <v-sheet
                        class="rounded-xl d-flex flex-column align-center justify-center" 
                        height="100" 
                        width="100" 
                        color="#24BAAB">
                            <v-icon>mdi-card</v-icon>
                            <p>Pay</p>
                        </v-sheet>
                        <v-sheet
                        class="rounded-xl d-flex flex-column align-center justify-center" 
                        height="100" 
                        width="100" 
                        color="#24BAAB">
                            <v-icon size="40">mdi-wallet-outline</v-icon>
                            <p>Wallet</p>
                        </v-sheet>
                        <v-sheet
                        class="rounded-xl d-flex flex-column align-center justify-center" 
                        height="100" 
                        width="100" 
                        color="#24BAAB">
                            <v-icon size="40">mdi-file-sign</v-icon>
                            <p>Pay</p>
                        </v-sheet>
                        <v-sheet
                        class="rounded-xl d-flex flex-column align-center justify-center" 
                        height="100" 
                        width="100" 
                        color="#24BAAB">
                            <v-icon>mdi-card</v-icon>
                            <p>Pay</p>
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