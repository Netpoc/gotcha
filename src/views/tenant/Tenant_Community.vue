<template>
    <v-container>
        <Nav />
        <v-main>
            <v-row>
                <v-col cols="6">
                    <v-sheet class="pa-5 rounded-xl" color="#2A3280" elevation="8">
                        <div class="ma-5 d-flex justify-space-evenly">
                          <v-sheet class="d-flex ma-3 rounded-xl flex-column align-center justify-center" height="100" width="100" color="#EF3746">
                            <v-icon size="45">mdi-forum</v-icon>
                            <small>Chat</small>
                          </v-sheet>
                          <v-sheet class="d-flex ma-3 rounded-xl flex-column align-center justify-center" height="100" width="100" color="#EF3746">
                            <v-icon size="45">mdi-square-edit-outline</v-icon>
                            <small>Create post</small>
                          </v-sheet>
                          <v-sheet class="d-flex ma-3 rounded-xl flex-column align-center justify-center" height="100" width="100" color="#EF3746">
                            <v-icon size="45">mdi-newspaper-variant-multiple-outline</v-icon>
                            <small>News</small>
                          </v-sheet>
                        </div>
                      </v-sheet>
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
    background: linear-gradient(to left, #ffffff 40%, #657ABC 40%) !important; 
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>