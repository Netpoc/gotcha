<template>
  <v-container fluid>
    <Nav />
    <v-main>
      <v-row align="top" justify="space-between">
        <!-- Pamyments Heading and Group of Buttons -->
        <v-col cols="6">
          <v-card flat color="transparent" class="ma-5">
            <h1 class="mb-5">Payments</h1>
            <div class="d-flex justify-space-evenly">
              <!--Bills Popup Dialog Box Start-->
              <v-dialog v-model="bills" max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-badge color="error" content="+90">
                    <v-card class="d-flex flex-column justify-center align-center rounded-xl" v-bind="activatorProps"
                      color="#2A3280" flat height="90" width="90">
                      <v-icon size="40">mdi-timer-sand-complete</v-icon>
                      <small class="ma-2">Late Bills</small>
                    </v-card>
                  </v-badge>
                </template>
                <v-card class="pa-5">
                  <h2>Outstanding Bills</h2>
                  <span>Tabulated records of outstanding bills modal.</span>
                </v-card>
              </v-dialog>
              <!--Bills Popup Dialog Box End-->
              <!--Reports Popup Dialog Box Starts-->
              <v-dialog v-model="bills" max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-card class="d-flex flex-column justify-center align-center rounded-xl" v-bind="activatorProps"
                    color="#2A3280" flat height="90" width="90">
                    <v-icon size="40">mdi-chart-box-outline</v-icon>
                    <small class="ma-2">Reports</small>
                  </v-card>
                </template>
                <v-card class="pa-5">
                  <h2>Financial Reports</h2>
                  <span>Tabulated records of downloadable finacial reports.</span>
                </v-card>
              </v-dialog>
              <v-dialog v-model="history" max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-card class="d-flex flex-column justify-center align-center rounded-xl" v-bind="activatorProps"
                    color="#2A3280" flat height="90" width="90">
                    <v-icon size="40">mdi-clipboard-text-clock</v-icon>
                    <small class="ma-2">History</small>
                  </v-card>
                </template>
                <v-card class="pa-5">
                  <h2>Transaction History</h2>
                  <span>Tabulated records of transactions history modal.</span>
                </v-card>
              </v-dialog>
              <v-dialog v-model="methods" max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-card class="d-flex flex-column justify-center align-center rounded-xl" v-bind="activatorProps"
                    color="#2A3280" flat height="90" width="90">
                    <v-icon size="40">mdi-cash-fast</v-icon>
                    <small class="ma-2">Methods</small>
                  </v-card>
                </template>
                <v-card class="pa-5">
                  <h2>Payment Methods Settings</h2>
                  <span>Payment methods options and activations modal</span>
                </v-card>
              </v-dialog>
            </div>
          </v-card>
          <!--Payment Notification Card -->
          <v-card color="transparent" flat>
            <div class="ma-5 d-flex justify-space-between align-center">
              <h3>Payment Notifications</h3>
              <v-btn variant="text" rounded="xl" size="x-small">See more</v-btn>
            </div>
            <div class="ma-5">
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
                  <tr v-for="item in desserts" :key="item.name">
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
          <v-card class="ma-5 rounded-xl">
            <div class="ma-5 d-flex justify-space-between">
              <h3>My Cards</h3>
              <a><v-icon>mdi-arrow-right</v-icon></a>
            </div>
            <v-carousel class="ma-5" :continuous="false" :show-arrows="false" delimiter-icon="mdi-circle" height="200"
              hide-delimiter-background>
              <v-carousel-item v-for="(item, i) in slides" :key="i">
                <v-img
                  src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126090.jpg?t=st=1711225840~exp=1711229440~hmac=5cf1f31f3c017ad7d6c626e6681f9b61cef13f0c1379f4dc200fbe3d66b318ae&w=740"></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-card>

          <v-card class="mx-5" flat>
            <div class="ma-5 d-flex justify-space-between align-center">
              <h4>Schedule Payment</h4>
              <v-dialog v-model="schedule" max-width="800">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn v-bind="activatorProps" variant="text"><v-icon>mdi-plus</v-icon></v-btn>
                </template>
                <v-card class="pa-5">                
                  <v-data-table v-model:expanded="expanded" :headers="dessertHeaders" :items="payments" item-value="name"
                    show-expand>
                    <template v-slot:top>
                      <v-toolbar flat>
                        <v-toolbar-title>Payment Schduling Modal</v-toolbar-title>
                      </v-toolbar>
                    </template>
                    <template v-slot:expanded-row="{ columns, item }">
                      <tr>
                        <td :colspan="columns.length">
                          More info about {{ item.name }}
                          <v-btn size="small" color="#2A3280" class="rounded-lg ma-2"><v-icon>mdi-pencil-outline</v-icon></v-btn>
                          <v-btn size="small" color="#2A3280" class="rounded-lg ma-2"><v-icon color="#EF3746">mdi-delete-outline</v-icon></v-btn>
                        </td>
                      </tr>
                    </template>
                  </v-data-table>
                </v-card>
              </v-dialog>            
            </div>
            <v-list v-for="sch in payments" v-bind:key="name">
              <v-list-item><small>Payment: {{sch.name}}</small> | <small>Amount: ${{sch.amount}}</small> | <small>Due: {{sch.recurrence}}</small></v-list-item>
            </v-list>
          </v-card>  
          
        </v-col>
      </v-row>

      <!--Transaction History-->
      <v-row>
        <v-col>
          <div class="ma-5 d-flex justify-space-between align-center">
            <h4>Transaction History</h4>
            <v-btn rounded="xl" size="x-small" variant="text">See more<v-icon>mdi-chevron-right</v-icon></v-btn>
          </div>
          <div class="ma-5">
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
                <tr v-for="item in trans" :key="item.name">
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
import Nav from "../components/NavDrawer"
export default {
  components: {
    Nav,
  },
  data() {
    return {
      expanded: [],
      dessertHeaders: [
        {
          title: 'Payment ID',
          align: 'start',
          sortable: false,
          key: 'name',
        },
        {title: 'Payment Status', key: 'status'},
        {title: 'Payment Amount ($)', key: 'amount'},
        {title: 'Payment Description', key: 'desc'},
        {title: 'Payment Recurrence', key: 'recurrence'},
        {title: '', key: 'data-table-expand'}
      ],
      payments: [
        {
          name: 'Rent',
          status: 'Pending',
          amount: 5400.00,
          desc: 'Advance rent payment schedule',
          recurrence: 'Monthly'
        },
        {
          name: 'Utility',
          status: 'Pending',
          amount: 400.00,
          desc: 'payment schedule for utilities',
          recurrence: 'Weekly',
        },
        {
          name: 'Council Tax',
          status: 'Failed',
          amount: 180.00,
          desc: 'Advance rent payment schedule',
          recurrence: 'Monthly'
        },
        {
          name: 'Mortgage',
          status: 'Success',
          amount: 8000.00,
          desc: 'Advance rent payment schedule',
          recurrence: 'Monthly'
        },
      ],
      bills: false,
      reports: false,
      history: false,
      methods: false,
      schedule: false,
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
<style scoped></style>