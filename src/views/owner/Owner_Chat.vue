<template>
    <v-container fluid>
        <Nav />
        <v-main>
           <div class="d-flex ">
            <h1 class="mx-5">Chat Room</h1>
            <v-spacer></v-spacer>
            <v-text-field prepend="mdi-magnify">
            </v-text-field>
           </div>
            <v-row align="top" justify="space-evenly">
                <v-col md="5">                  
                    <v-card class="mx-5" flat>
                      <v-sheet class="pa-5 rounded-xl" color="#2A3280" elevation="4">
                        <div class="ma-5 d-flex justify-space-evenly">
                          <v-card flat to="#" color="transparent" class="rounded-xl">
                            <v-sheet class="d-flex ma-3 rounded-xl flex-column align-center justify-center" height="100" width="100" color="#EF3746">
                              <v-icon size="45">mdi-forum</v-icon>
                              <small>Chat</small>
                            </v-sheet>
                          </v-card>
                          <v-card flat to="#" color="transparent" class="rounded-xl">
                            <v-sheet class="d-flex ma-3 rounded-xl flex-column align-center justify-center" height="100" width="100" color="#EF3746">
                              <v-icon size="45">mdi-square-edit-outline</v-icon>
                              <small>Post</small>
                            </v-sheet>
                          </v-card>  
                          <v-card flat to="#" color="transparent" class="rounded-xl">
                            <v-sheet class="d-flex ma-3 rounded-xl flex-column align-center justify-center" height="100" width="100" color="#EF3746">
                              <v-icon size="45">mdi-newspaper-variant-multiple-outline</v-icon>
                              <small>News</small>
                            </v-sheet>
                          </v-card>                  
                          
                        </div>
                      </v-sheet>
                      <!--Online Chat-->
                      <div class="mt-5">
                        <h3>Online</h3>
                        <v-card class="rounded-xl pa-2">                          
                          <v-sheet v-bind="props" color="grey" class="d-flex pa-2  rounded-xl justify-space-between align-center">
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
                        <v-card class="rounded-xl pa-4">                          
                          <div class="d-flex justify-space-between align-center ma-2">
                            <div class="d-flex align-center">
                              <v-icon class="ma-2">mdi-account</v-icon>
                              <div class="d-flex flex-column">
                                <strong>Christopher Kolade</strong>
                                <span>How are you doing?</span>
                              </div>                              
                            </div>
                            <small>8:00AM</small>
                          </div>
                          <div class="d-flex justify-space-between align-center ma-2">
                            <div class="d-flex align-center">
                              <v-icon class="ma-2">mdi-account</v-icon>
                              <div class="d-flex flex-column">
                                <strong>Bankole</strong>
                                <span>How are you doing?</span>
                              </div>                              
                            </div>
                            <small>6:13PM</small>
                          </div>
                          <div class="d-flex justify-space-between align-center ma-2">
                            <div class="d-flex align-center">
                              <v-icon class="ma-2">mdi-account</v-icon>
                              <div class="d-flex flex-column">
                                <strong>Cynthia</strong>
                                <span>How are you doing?</span>
                              </div>                              
                            </div>
                            <small>2:43PM</small>
                          </div>
                          <div class="d-flex justify-space-between align-center ma-2">
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
                    </v-card>
                </v-col>
                <v-col md="7">
                  
                  <v-card color="#2A3280" class="rounded-xl">
                    <div class="ma-5 d-flex">
                      <v-icon>mdi-account</v-icon>
                      <h3>Abdul Christopher</h3>
                    </div>
                    <v-sheet class="ma-5 pa-5" height="500">
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
                    <div class="pa-5 d-flex justify-center align-center">
                      <v-row>
                        <v-col>
                          <div class="d-flex">
                            
                              <v-textarea variant="outlined" rows="1" auto-grow label="Write a message..."></v-textarea>
                            
                            <div class="d-flex align-middle justify-center">
                              <v-btn variant="text" icon><v-icon>mdi-image</v-icon></v-btn>
                              <v-btn variant="text" icon><v-icon>mdi-microphone</v-icon></v-btn>
                              <v-btn variant="text" icon><v-icon>mdi-send</v-icon></v-btn>
                            </div>
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