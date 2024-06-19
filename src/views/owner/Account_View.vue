<template>
  <v-container fluid>
    <Nav />
    <v-main>
      <h1 class="ma-5">Accounts</h1>
      <v-row align="start" justify="space-around">
        <v-col cols="5">
          <v-card flat class="pa-5 d-flex justify-space-between rounded-xl">
            <v-card class="rounded-xl" to="#">
              <v-sheet class="rounded-xl d-flex flex-column align-center justify-center" height="100" width="100"
                color="#2A3280">
                <v-icon size="30">mdi-cash-fast</v-icon>
                <p>Pay</p>
              </v-sheet>
            </v-card>
            <v-card class="rounded-xl" flat to="#">
              <v-sheet class="rounded-xl d-flex flex-column align-center justify-center" height="100" width="100"
                color="#2A3280">
                <v-icon size="30">mdi-wallet-outline</v-icon>
                <small>Wallet</small>
              </v-sheet>
            </v-card>
            <v-card class="rounded-xl" flat to="#">
              <v-sheet class="rounded-xl d-flex flex-column align-center justify-center" height="100" width="100"
                color="#2A3280">
                <v-icon size="30">mdi-file-sign</v-icon>
                <small>Report</small>
              </v-sheet>
            </v-card>
            <v-card class="rounded-xl" flat to="#">
              <v-sheet class="rounded-xl d-flex flex-column align-center justify-center" height="100" width="100"
                color="#2A3280">
                <v-icon size="30">mdi-tune-vertical</v-icon>
                <small>Misc</small>
              </v-sheet>
            </v-card>
          </v-card>
          <div class="ma-5">
            <div class="d-flex align-center justify-space-between">
              <div class="d-flex align-center">
                <v-sheet color="#ef3746" height="40" width="40"
                class="mr-2 d-flex rounded-lg align-center justify-center">
                <v-icon>mdi-bank-transfer</v-icon>
              </v-sheet>
              <h3>Recent Transactions</h3>
              </div>
              <v-spacer />
              <v-btn variant="text" class="rounded-xl" size="x-small">See more</v-btn>
            </div>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Type</th>
                  <th class="text-left">Due Date</th>
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
        </v-col>
        <v-col cols="6">
          <v-card class="rounded-xl" flat height="300">
            <div class="pa-5 d-flex align-center justify-space-between">
              <div class="d-flex align-center">
                <v-sheet color="#ef3746" height="40" width="40"
                  class="mx-3 d-flex rounded-lg align-center justify-center">
                  <v-icon>mdi-integrated-circuit-chip</v-icon>
                </v-sheet>
                <h3>My Cards</h3>
              </div>
              <v-btn variant="text" icon><v-icon>mdi-arrow-right</v-icon></v-btn>
            </div>
            <v-sheet class="ma-5 rounded-xl" height="250">
            </v-sheet>
          </v-card>
          <div class="ma-5">
            <v-sheet class="rounded-xl">
              <div class="pa-5 d-flex justify-space-between">
                <div class="d-flex align-center">
                  <v-sheet color="#EF3746" width="40" height="40" class="mr-2 rounded-lg align-center">
                    <v-icon>mdi-cash-clock</v-icon>
                  </v-sheet>
                  <h3>Schedule Payments</h3>
                </div>
                <v-btn icon class="rounded-xl" variant="text"><v-icon>mdi-plus</v-icon></v-btn>
              </div>
              <div class="d-flex justify-center">
                <span>No Payment</span>
              </div>
            </v-sheet>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="mx-5 pa-5" flat>
            <div class="d-flex align-center justify-space-between">
              <div class="d-flex align-center">
                <v-sheet height="40" width="40" color="#ef3746"
                  class="mx-2 rounded-lg d-flex align-center justify-center">
                  <v-icon>mdi-finance</v-icon>
                </v-sheet>
                <h3>Transaction History</h3>
              </div>
              <v-btn variant="text" size="x-small" class="rounded-xl">See more</v-btn>
            </div>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Type</th>
                  <th class="text-left">Card</th>
                  <th class="text-left">Date</th>
                  <th class="text-left">Amount</th>
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
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>
<script>
import Nav from "../../components/OwnerNavDrawer.vue";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      desserts: [
        {
          name: "Electricity",
          calories: "Utility",
          date: "12 Jan 2024",
        },
        {
          name: "Ice cream sandwich",
          calories: "Tax",
          date: "19 Jun 2024",
        },
        {
          name: "Eclair",
          calories: "Utility",
          date: "05 Mar 2024",
        },
        {
          name: "Cupcake",
          calories: "Rent",
          date: "25 Apr 2024",
        },
      ],
      trans: [
        {
          name: "Electricity",
          type: "Utility",
          card: "*** 3452",
          date: "12 Jan 2024",
          amount: 2434,
        },
        {
          name: "Electricity",
          type: "Utility",
          card: "*** 5672",
          date: "3 May 2024",
          amount: 2913,
        },
        {
          name: "Electricity",
          type: "Utility",
          card: "*** 2334",
          date: "1 Jun 2024",
          amount: 2434,
        },
        {
          name: "Electricity",
          type: "Utility",
          card: "*** 9470",
          date: "12 Jan 2024",
          amount: 1200,
        },
      ],
    };
  },
};
</script>
