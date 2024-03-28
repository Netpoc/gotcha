<template>
    <v-container fluid>
        <v-navigation-drawer theme="dark" color="#2A3280" permanent>
            <div class="mb-5">
              <v-img max-height="65" :src="require('../../assets/white.png')"></v-img>
            </div>
            <v-divider></v-divider>
            <div class="d-flex flex-column align-center ma-5">
              <div>
                <v-avatar color="grey" size="100">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                    cover
                  ></v-img>
                </v-avatar>
              </div>
              <div>
                <p>Sample User</p>
                <v-chip>Admin</v-chip>
              </div>
            </div>
    
            <v-list color="transparent">
              <v-list-item
                to="/about"
                prepend-icon="mdi-view-dashboard"
                title="Dashboard"
              ></v-list-item>
              <v-list-item prepend-icon="mdi-cash-sync" title="Payments"></v-list-item>
              <v-list-item prepend-icon="mdi-home-group" title="Community"></v-list-item>
              <v-list-item prepend-icon="mdi-account-details" title="Manage Users"></v-list-item>
              <v-list-item prepend-icon="mdi-magnify" title="Search"></v-list-item>
            </v-list>
    
            <template v-slot:append>
              <div class="pa-2">
                <v-btn variant="text" to="/" block> Settings </v-btn>
              </div>
              <div class="pa-2">
                <v-btn variant="text" to="/" block> Logout </v-btn>
              </div>
            </template>
          </v-navigation-drawer>
          <v-main class="ma-5" style="height: 90vh">
            <v-row align="top" justify="space-between">
                <!-- Pamyments Heading and Group of Buttons -->
                <v-col cols="6">
                  <v-card flat class="pa-5">
                    <h1 class="mb-5">Payments</h1>
                    <div class="d-flex justify-space-between">
                        <v-sheet
                        class="rounded-xl d-flex align-center justify-center"
                        :height="100" 
                        :width="100" 
                        color="#E97080">
                          <div class="d-flex flex-column justify-center align-center">
                            <v-icon size="x-large">mdi-cash-sync</v-icon>
                            <p><small>Expiring Bills</small></p>
                          </div>
                        </v-sheet>
                        <v-sheet
                        class="rounded-xl d-flex align-center justify-center"
                        :height="100" 
                        :width="100" 
                        color="#E97080">
                          <div class="d-flex flex-column justify-center align-center">
                            <v-icon size="x-large">mdi-wallet-outline</v-icon>
                            <p><small>Reports</small></p>
                        </div>
                        </v-sheet>
                        <v-sheet
                        class="rounded-xl d-flex align-center justify-center"
                        :height="100" 
                        :width="100" 
                        color="#657ABC">
                          <div class="d-flex flex-column justify-center align-center">
                            <v-icon size="x-large">mdi-file-chart-outline</v-icon>
                            <p><small>Pre-Authorize</small></p>
                        </div>
                        </v-sheet>
                        <v-sheet
                        class="rounded-xl d-flex align-center justify-center"
                        :height="100" 
                        :width="100" 
                        color="#657ABC">
                          <div class="d-flex flex-column justify-center align-center">
                            <v-icon size="x-large">mdi-file-chart-outline</v-icon>
                            <p><small>Pre-Authorize</small></p>
                        </div>
                        </v-sheet>
                    </div>
                  </v-card>
                  <!--Payment Notification Card -->
                  <v-card flat>
                    <div class="ma-5 d-flex justify-space-between align-center">
                      <h3>Payment Notifications</h3>
                      <v-btn rounded="xl" size="x-small">See more</v-btn>
                    </div>
                    <div>
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
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card class="ma-5">             
                    <div class="ma-5 d-flex justify-space-between">
                        <h3>My Cards</h3>
                        <a><v-icon>mdi-arrow-right</v-icon></a>
                    </div>          
                    <v-carousel
                      class="ma-5"
                      :continuous="false"
                      :show-arrows="false"
                      delimiter-icon="mdi-circle"
                      height="200"
                      hide-delimiter-background
                    >
                      <v-carousel-item
                        v-for="(item, i) in slides"
                        :key="i"
                      >
                      <v-img src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126090.jpg?t=st=1711225840~exp=1711229440~hmac=5cf1f31f3c017ad7d6c626e6681f9b61cef13f0c1379f4dc200fbe3d66b318ae&w=740"></v-img>
                      </v-carousel-item>
                    </v-carousel>
                  </v-card>
                  <div class="ma-5 d-flex justify-space-between align-center">
                    <h4>Schedule Payment</h4>
                    <v-btn variant="text"><v-icon>mdi-plus</v-icon></v-btn>
                  </div>
                </v-col>
            </v-row>
            <!--Transaction History-->  
            <v-row>
              <v-col>
                <div class="d-flex justify-space-between align-center">
                  <h4>Transaction History</h4>
                  <v-btn rounded="xl" size="x-small" variant="text">See more<v-icon>mdi-chevron-right</v-icon></v-btn>
                </div>
                <div>
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
                    <tbody>
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
  export default {
    data () {
      return {
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
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
    },
  }
</script>