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
                    <div class="ma-3">
                        <v-table>
                            <thead>
                              <tr>
                                <th class="text-left">
                                  Name
                                </th>
                                <th class="text-left">
                                  Type
                                </th>
                                <th class="text-left">
                                  Due Date
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="item in desserts"
                                :key="item.name"
                              >
                                <td>{{ item.name }}</td>
                                <td>{{ item.calories }}</td>
                                <td>{{ item.date }}</td>
                              </tr>
                            </tbody>
                          </v-table>
                    </div>
                    
                </v-col>
                <v-col md="6">
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
                    <v-card class="pa-5 mt-5" flat>
                        <v-row justify="space-around">
                            <v-col cols="5">
                                <v-card flat class="d-flex flex-column align-center">
                                    <v-sheet color="cyan" height="120" width="100%" class="rounded-xl">

                                    </v-sheet>
                                    <span class="ma-2">
                                        Explore fun activities and events near you today...
                                    </span>
                                </v-card>
                            </v-col>
                            <v-col cols="5">
                                <v-card flat class="d-flex flex-column align-center">
                                    <v-sheet color="cyan" height="120" width="100%" class="rounded-xl">

                                    </v-sheet>
                                    <span class="ma-2">
                                        Explore fun activities and events near you today...
                                    </span>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="7">
                    <v-card class="rounded-xl" color="#F0516E">
                        <div class="pa-5 d-flex justify-space-between align-center">
                            <h3>Recent Annoucements</h3>
                            <v-btn variant="text" size="x-small" class="rounded-xl">See more <v-icon>mdi-arrow-</v-icon> </v-btn>
                        </div>
                        <v-tabs fixed-tabs>
                            <v-tab value="one">Public Room</v-tab>
                            <v-tab value="two">Owners</v-tab>
                            <v-tab value="three">Management</v-tab>
                        </v-tabs>
                        <v-card-text>
                            <v-window v-model="tab">
                                <v-window-item value="one">
                                    <div class="d-flex align-center justify-space-between ma-3">
                                        <div class="d-flex flex-column">
                                            <span>Hole in Bedroom wall at 150 Gordon Crescent...</span>
                                            <div>
                                                <v-btn variant="text" size="x-small">New</v-btn>
                                                <v-btn variant="text" size="x-small">Resident request</v-btn>
                                            </div>
                                            <div class="d-flex align-center mt-2">
                                                <v-sheet height="25" width="25" class="rounded-xl d-flex align-center justify-center">
                                                    <v-icon>mdi-account</v-icon>
                                                </v-sheet>
                                                <small class="mx-1">Baldwin Chris</small>
                                            </div>
                                        </div>
                                        <small>2 mins ago</small>
                                    </div>
                                </v-window-item>
                            </v-window>
                        </v-card-text>
                        <v-card-text>
                            <v-window v-model="tab">
                                <v-window-item value="one">
                                    <div class="d-flex align-center justify-space-between ma-3">
                                        <div class="d-flex flex-column">
                                            <span>Hole in Bedroom wall at 150 Gordon Crescent...</span>
                                            <div>
                                                <v-btn variant="text" size="x-small">New</v-btn>
                                                <v-btn variant="text" size="x-small">Resident request</v-btn>
                                            </div>
                                            <div class="d-flex align-center mt-2">
                                                <v-sheet height="25" width="25" class="rounded-xl d-flex align-center justify-center">
                                                    <v-icon>mdi-account</v-icon>
                                                </v-sheet>
                                                <small class="mx-1">Baldwin Chris</small>
                                            </div>
                                        </div>
                                        <small>2 mins ago</small>
                                    </div>
                                </v-window-item>
                            </v-window>
                        </v-card-text>
                        <v-card-text>
                            <v-window v-model="tab">
                                <v-window-item value="one">
                                    <div class="d-flex align-center justify-space-between ma-3">
                                        <div class="d-flex flex-column">
                                            <span>Hole in Bedroom wall at 150 Gordon Crescent...</span>
                                            <div>
                                                <v-btn variant="text" size="x-small">New</v-btn>
                                                <v-btn variant="text" size="x-small">Resident request</v-btn>
                                            </div>
                                            <div class="d-flex align-center mt-2">
                                                <v-sheet height="25" width="25" class="rounded-xl d-flex align-center justify-center">
                                                    <v-icon>mdi-account</v-icon>
                                                </v-sheet>
                                                <small class="mx-1">Baldwin Chris</small>
                                            </div>
                                        </div>
                                        <small>2 mins ago</small>
                                    </div>
                                </v-window-item>
                            </v-window>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col md="4">
                    <v-card>
                        
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
            desserts: [
          {
            name: 'Electricity',
            calories: 'Utility',
            date: '12 Jan 2024'
          },
          {
            name: 'Ice cream sandwich',
            calories: 'Tax',
            date: '19 Jun 2024'
          },
          {
            name: 'Eclair',
            calories: 'Utility',
            date: '05 Mar 2024'
          },
          {
            name: 'Cupcake',
            calories: 'Rent',
            date: '25 Apr 2024'
          }
        ]            
        }
    }
}
</script>