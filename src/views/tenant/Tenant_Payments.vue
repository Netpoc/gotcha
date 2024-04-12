<template>
    <v-container fluid>
        <Nav />
        <v-main>
            <v-row justify="space-between">
                <v-col cols="6">
                    <!--Top Navigation-->
                    <div class="ma-5">
                        <h1>Payments</h1>
                        <div class="pa-5 d-flex justify-space-between">
                            <v-card class="rounded-xl">
                                <v-sheet class="d-flex flex-column align-center justify-center" width="100" height="100" color="red rounded-xl">
                                    <v-icon>
                                        mdi-wallet
                                    </v-icon>
                                    <small>Pay</small>
                                </v-sheet>
                            </v-card>
                            <v-card class="rounded-xl">
                                <v-sheet class="d-flex flex-column align-center justify-center" width="100" height="100" color="red rounded-xl">
                                    <v-icon>
                                        mdi-wallet
                                    </v-icon>
                                    <small>Wallet</small>
                                </v-sheet>
                            </v-card>
                            <v-card class="rounded-xl">
                                <v-sheet class="d-flex flex-column align-center justify-center" width="100" height="100" color="red rounded-xl">
                                    <v-icon>
                                        mdi-wallet
                                    </v-icon>
                                    <small>Reports</small>
                                </v-sheet>
                            </v-card>
                        </div>
                    </div>
                    <div class="d-flex justify-space-between ma-5">
                        <h3>Payment Notifications</h3>
                        <v-btn size="small" variant="text">See More</v-btn>
                    </div>
                    <div class="ma-5">
                        <v-table>
                          <thead>
                            <tr>
                              <th class="text-left">
                                <strong>Name</strong>
                              </th>
                              <th class="text-left">
                                <strong>Type</strong>
                              </th>
                              <th class="text-left">
                                <strong>Due Date</strong>
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
                <v-col cols="5">
                    <v-sheet color="grey" class="rounded-xl pa-5">
                        <div class="d-flex align-center justify-space-between">
                            <h3>My Cards</h3>
                            <v-btn variant="text"><v-icon>mdi-arrow-right</v-icon></v-btn>
                        </div>
                        <v-card class="rounded-xl">
                            <v-sheet class="ma-5">
                                <v-img :src="require('../../assets/gotcha.png')"</v-img>
                            </v-sheet>
                        </v-card>
                    </v-sheet>
                    <v-sheet class="d-flex justify-space-between ma-5">
                        <h3>Schedule Payments</h3>
                        <v-btn variant="text"><v-icon>mdi-plus</v-icon></v-btn>
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
        ],

        }
    }
}
</script>
<style scoped>

</style>