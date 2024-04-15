<template>
    <v-container fluid>
        <Nav />
        <v-main>
            <v-row justify="space-evenly">
                <v-col cols="4">
                  <h1>Chat Room</h1>
                    <v-sheet class="pa-5 rounded-xl" color="#2A3280" elevation="8">
                        <div class="ma-5 d-flex justify-space-evenly">
                          <v-sheet class="d-flex ma-3 rounded-xl flex-column align-center justify-center" height="100" width="100" color="#EF3746">
                            <v-icon size="45">mdi-forum</v-icon>
                            <small>Chat</small>
                          </v-sheet>
                          <v-sheet class="d-flex ma-3 rounded-xl flex-column align-center justify-center" height="100" width="100" color="#EF3746">
                            <v-icon size="45">mdi-square-edit-outline</v-icon>
                            <small>Post</small>
                          </v-sheet>
                          <v-sheet class="d-flex ma-3 rounded-xl flex-column align-center justify-center" height="100" width="100" color="#EF3746">
                            <v-icon size="45">mdi-newspaper-variant-multiple-outline</v-icon>
                            <small>News</small>
                          </v-sheet>
                        </div>
                      </v-sheet>
                      <!--Online Chat-->
                      <div class="mt-5">
                        <h3>Online</h3>
                        <v-card class="rounded-xl pa-2">
                          <v-sheet color="grey" class="d-flex pa-1  rounded-xl justify-space-between align-center">
                            <div class="d-flex justify-space-between align-center ma-3">
                              <v-icon class="ma-2">mdi-account</v-icon>
                            <div class="d-flex flex-column justify-center">
                              <strong>Abdul Christopher</strong>
                              <span>Hello...</span>
                            </div>
                            </div>
                            <small>12:30AM</small>
                          </v-sheet>
                          <div class="d-flex justify-space-between align-center ma-3">
                            <div class="d-flex align-center">
                              <v-icon class="ma-2">mdi-account</v-icon>
                              <div class="d-flex flex-column">
                                <strong>Christopher Kolade</strong>
                                <span>How are you doing?</span>
                              </div>                              
                            </div>
                            <small>8:00AM</small>
                          </div>
                          <div class="d-flex justify-space-between align-center ma-3">
                            <div class="d-flex align-center">
                              <v-icon class="ma-2">mdi-account</v-icon>
                              <div class="d-flex flex-column">
                                <strong>Christopher Kolade</strong>
                                <span>How are you doing?</span>
                              </div>                              
                            </div>
                            <small>6:13PM</small>
                          </div>
                          <div class="d-flex justify-space-between align-center ma-3">
                            <div class="d-flex align-center">
                              <v-icon class="ma-2">mdi-account</v-icon>
                              <div class="d-flex flex-column">
                                <strong>Christopher Kolade</strong>
                                <span>How are you doing?</span>
                              </div>                              
                            </div>
                            <small>2:43PM</small>
                          </div>
                          
                        </v-card>
                      </div>
                      <!--Offline Chat-->
                      <div class="mt-5">
                        <h3>Offline Chat</h3>
                        <v-card class="rounded-xl pa-2">
                          <v-sheet color="grey" class="d-flex pa-3 rounded-xl">
                            <v-icon>mdi-account</v-icon>
                            <div class="d-flex flex-column justify-center">
                              <strong>Abdul Christopher</strong>
                              <span>Hello...</span>
                            </div>
                            <small class="d-flex">12:30AM</small>
                          </v-sheet>
                          <div class="d-flex justify-space-between align-center">
                            <div class="d-flex align-center">
                              <v-icon class="ma-2">mdi-account</v-icon>
                              <div class="d-flex flex-column">
                                <strong>Christopher Kolade</strong>
                                <span>How are you doing?</span>
                              </div>                              
                            </div>
                            <small>8:00AM</small>
                          </div>
                          <div class="d-flex justify-space-between align-center">
                            <div class="d-flex align-center">
                              <v-icon class="ma-2">mdi-account</v-icon>
                              <div class="d-flex flex-column">
                                <strong>Bankole</strong>
                                <span>How are you doing?</span>
                              </div>                              
                            </div>
                            <small>6:13PM</small>
                          </div>
                          <div class="d-flex justify-space-between align-center">
                            <div class="d-flex align-center">
                              <v-icon class="ma-2">mdi-account</v-icon>
                              <div class="d-flex flex-column">
                                <strong>Cynthia</strong>
                                <span>How are you doing?</span>
                              </div>                              
                            </div>
                            <small>2:43PM</small>
                          </div>
                          <div class="d-flex justify-space-between align-center">
                            <div class="d-flex align-center">
                              <v-icon class="ma-2">mdi-account</v-icon>
                              <div class="d-flex flex-column">
                                <strong>Sean</strong>
                                <span>How are you doing?</span>
                              </div>                              
                            </div>
                            <small>6:13PM</small>
                          </div>
                        </v-card>
                      </div>
                </v-col>
                <v-col cols="7">
                  <v-text-field label="Search" prepend="mdi-magnify">

                  </v-text-field>
                  <v-card class="pa-5 rounded-xl">
                    <div class="d-flex">
                      <v-icon>mdi-account</v-icon>
                      <h3>Abdul Christopher</h3>
                    </div>
                    <v-sheet class="pa-5" height="500" color="grey">
                      <div class="ma-3">
                        <v-sheet class="pa-5 rounded-xl" color="cyan" width="300">
                          <span>hi</span>
                        </v-sheet>
                      </div>
                      <div class="ma-3 d-flex justify-end">
                        <v-sheet class="pa-5 rounded-xl" color="yellow" width="300">
                          <span>hi</span>
                        </v-sheet>
                      </div>
                      <div class="ma-3">
                        <v-sheet class="pa-5 rounded-xl" color="cyan" width="300">
                          <span>hi</span>
                        </v-sheet>
                      </div>
                      <div class="ma-3 d-flex justify-end">
                        <v-sheet class="pa-5 rounded-xl" color="cyan" width="300">
                          <span>hi</span>
                        </v-sheet>
                      </div>
                      <div class="ma-3">
                        <v-sheet class="pa-5 rounded-xl" color="cyan" width="300">
                          <span>hi</span>
                        </v-sheet>
                        <small>2mins ago</small>
                      </div>

                    </v-sheet>
                    <div class="d-flex justify-center align-center">
                      <v-row>
                        <v-col cols="10">
                          <div class="ma-3">
                            <v-textarea variant="outlined" rows="1" auto-grow label="Write a message..."></v-textarea>
                          </div>                          
                        </v-col>
                        <v-col cols="2">
                          <div class="d-flex align-center justify-center">
                            <v-btn variant="text" icon><v-icon>mdi-image</v-icon></v-btn>
                            <v-btn variant="text" icon><v-icon>mdi-microphone</v-icon></v-btn>
                            <v-btn variant="text" icon><v-icon>mdi-send</v-icon></v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
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