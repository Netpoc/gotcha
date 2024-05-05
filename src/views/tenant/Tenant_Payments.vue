<template>
    <v-container class="main" fluid>
        <Nav />
        <v-main class="ma-5">
          <h1>Payments</h1>
            <v-row align="top" justify="space-between">
                <v-col cols="6">
                    <!--Top Navigation-->
                    <v-card color="#2A3280" class="rounded-xl pa-5">
                                          
                        <div class="pa-5 d-flex justify-space-between">
                            <v-card to="#" class="rounded-xl">
                                <v-sheet class="d-flex flex-column align-center justify-center" width="100" height="100" color="red rounded-xl">
                                    <v-icon size="45">
                                        mdi-credit-card-fast
                                    </v-icon>
                                    <small>Pay</small>
                                </v-sheet>
                            </v-card>
                            <v-card to="#" class="rounded-xl">
                                <v-sheet class="d-flex flex-column align-center justify-center" width="100" height="100" color="red rounded-xl">
                                    <v-icon size="45">
                                        mdi-wallet
                                    </v-icon>
                                    <small>Wallet</small>
                                </v-sheet>
                            </v-card>
                            <v-card to="#" class="rounded-xl">
                                <v-sheet class="d-flex flex-column align-center justify-center" width="100" height="100" color="red rounded-xl">
                                    <v-icon size="45">
                                        mdi-invoice-text-send
                                    </v-icon>
                                    <small>Reports</small>
                                </v-sheet>
                            </v-card>
                            <v-card to="#" class="rounded-xl">
                              <v-sheet class="d-flex flex-column align-center justify-center" width="100" height="100" color="red rounded-xl">
                                  <v-icon size="45">
                                      mdi-wallet
                                  </v-icon>
                                  <small>Reports</small>
                              </v-sheet>
                          </v-card>
                        </div>
                    
                    </v-card>
                    <!--Navigation End-->
                    <!--Payment Notifications-->
                    <div class="d-flex justify-space-between mt-5">
                        <h3>Payment Notifications</h3>
                        <v-btn size="small" variant="text">See More</v-btn>
                    </div>
                    <div class="mt-5">
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
                    <!--Notification Ends-->
                </v-col> 
                <v-col cols="5">
                    <v-card color="grey" class="rounded-xl">
                        
                        <v-sheet color="transparent">
                          <div class="d-flex align-center justify-space-between">
                            <h3 class="ma-5">My Cards</h3>
                            <v-btn variant="text"><v-icon>mdi-arrow-right</v-icon></v-btn>
                        </div>
                          <v-carousel :show-arrows="false" height="250" cycle hide-delimiter-background>
                            <v-carousel-item
                              :src="(require('../../assets/contactless.png'))"
                              contain
                            ></v-carousel-item>
                          
                            <v-carousel-item
                              :src="(require('../../assets/credit-card.png'))"
                              contain
                            ></v-carousel-item>
                          
                            <v-carousel-item
                              :src="(require('../../assets/credit.png'))"
                              contain
                            ></v-carousel-item>
                          </v-carousel>
                        </v-sheet>
                        
                    </v-card>
                    <v-sheet class="d-flex justify-space-between ma-5">
                        <h3>Schedule Payments</h3>
                        <v-btn variant="text"><v-icon>mdi-plus</v-icon></v-btn>
                    </v-sheet>
                </v-col>               
            </v-row>
            <v-row>
              <v-col>
                <div class="d-flex justify-space-between align-center">
                  <h4>Transaction History</h4>
                  <v-btn rounded="xl" size="x-small" variant="text">See more<v-icon>mdi-chevron-right</v-icon></v-btn>
                </div>
                <div class="mt-5">
                  <v-table>
                    <thead class="my-header-style">
                      <tr>
                        <th class="text-left my-header-style">
                          Name
                        </th>
                        <th class="text-left">
                          Type
                        </th>
                        <th class="text-left">
                          Card
                        </th>
                        <th class="text-left">
                          Date
                        </th>
                        <th class="text-left">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody class="my-header-style">
                      <tr
                        v-for="item in trans"
                        :key="item.name"
                      >
                        <td>{{ item.name }}</td>
                        <td>{{ item.type }}</td>
                        <td>{{ item.card }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.amount }}</td>
                      </tr>
                    </tbody>
                  </v-table>
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
        trans: [
          {
            name: 'Electricity',
            type: 'Utility',
            card: '*** 3452',
            date: '12 Jan 2024',
            amount: 2434
          },
          {
            name: 'Electricity',
            type: 'Utility',
            card: '*** 5672',
            date: '3 May 2024',
            amount: 2913
          },
          {
            name: 'Electricity',
            type: 'Utility',
            card: '*** 2334',
            date: '1 Jun 2024',
            amount: 2434
          },
          {
            name: 'Electricity',
            type: 'Utility',
            card: '*** 9470',
            date: '12 Jan 2024',
            amount: 1200
          }
        ],

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
  background: linear-gradient(to left, #ffffff 40%, #647ABB 40%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.my-header-style {
  background: #00000000;
}
</style>