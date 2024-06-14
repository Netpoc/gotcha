<template>
  <v-container fluid>
    <Nav />
    <v-main>
      <h1 class="mx-5">Admin Dashboard</h1>
      <v-row justify="space-evenly">
        <v-col md="6">
          <v-card flat color="transparent" class="rounded-xl ma-5">
            <v-card
              flat
              color="#FAFAFA"
              class="d-flex align-center justify-space-between rounded-xl"
            >
              <v-sheet
                color="#ef3746"
                height="40"
                width="40"
                class="mx-3 d-flex align-center justify-center rounded-lg"
              >
                <v-icon>mdi-gauge</v-icon>
              </v-sheet>
              <small>Activities Due</small>
              <v-spacer></v-spacer>
              <v-btn variant="text" icon
                ><v-icon size="x-small">mdi-dots-horizontal</v-icon></v-btn
              >
            </v-card>

            <div class="d-flex justify-space-evenly pa-5">
              <v-dialog v-model="rent" max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-badge color="success" content="+90">
                    <v-card
                      class="d-flex flex-column justify-center align-center rounded-xl"
                      v-bind="activatorProps"
                      color="#2A3280"
                      flat
                      height="90"
                      width="90"
                    >
                      <small>Transactions</small>
                    </v-card>
                  </v-badge>
                </template>
                <v-card class="pa-5">
                  <h2>Payment Method</h2>
                  <!--Payment Option Starts-->
                  <div class="mt-3 d-flex justify-space-evenly align-center">
                    <v-sheet
                      class="d-flex rounded-xl flex-column justify-center align-center"
                      color="#2A3280"
                      height="100"
                      width="100"
                    >
                      <v-icon size="50" color="#ef3746">mdi-wallet</v-icon>
                      <small>Card</small>
                    </v-sheet>
                    <v-sheet
                      class="d-flex rounded-xl flex-column justify-center align-center"
                      color="#2A3280"
                      height="100"
                      width="100"
                    >
                      <v-icon size="50">mdi-bank</v-icon>
                      <small>Bank</small>
                    </v-sheet>
                    <v-sheet
                      class="d-flex rounded-xl flex-column justify-center align-center"
                      color="#2A3280"
                      height="100"
                      width="100"
                    >
                      <v-icon size="50">mdi-wallet-bifold</v-icon>
                      <small>e-Wallet</small>
                    </v-sheet>
                  </div>
                  <!--Payment Option Ends-->
                  <v-card class="mt-5" flat>
                    <v-row>
                      <v-col>
                        <v-text-field
                          label="Card Number"
                          required
                          append-icon="mdi-card"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          label="MM/YY"
                          append-icon="mdi-calendar"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          label="MM/YY"
                          append-icon="mdi-calendar"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-sheet
                          min-height="150"
                          color="grey"
                          class="d-flex pa-5 rounded-xl justify-center align-center"
                        >
                          <v-file-input
                            :rules="rules"
                            accept="image/png, image/jpeg, image/bmp"
                            label="Upload proof of payment"
                            placeholder="Upload proof of payment"
                            prepend-icon="mdi-camera"
                          ></v-file-input>
                        </v-sheet>
                      </v-col>
                    </v-row>
                  </v-card>
                  <template v-slot:actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      class="rounded-xl"
                      variant="outlined"
                      @click="dialog = false"
                    >
                      Cancel
                    </v-btn>

                    <v-btn class="rounded-xl" @click="dialog = false">
                      Save
                    </v-btn>
                  </template>
                </v-card>
              </v-dialog>
              <v-dialog v-model="alerts" max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-card
                    class="d-flex flex-column justify-center align-center rounded-xl"
                    v-bind="activatorProps"
                    color="#2A3280"
                    flat
                    height="90"
                    width="90"
                  >
                    <small>Alerts</small>
                  </v-card>
                </template>
                <v-card class="pa-5">
                  <h2>Utitlities Payments Reports</h2>
                </v-card>
              </v-dialog>
              <v-dialog v-model="reports" max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-badge size="x-large" color="error" content="23">
                    <v-card
                      class="d-flex flex-column justify-center align-center rounded-xl"
                      v-bind="activatorProps"
                      color="#2A3280"
                      flat
                      height="90"
                      width="90"
                    >
                      <small>Reports</small>
                    </v-card>
                  </v-badge>
                </template>
                <v-card class="pa-5">
                  <h2>Permits Payments Reports</h2>
                </v-card>
              </v-dialog>
              <v-card
                to="#"
                height="90"
                width="90"
                color="#2A3280"
                class="rounded-xl d-flex align-center justify-center"
              >
                <small>Settings</small>
              </v-card>
            </div>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card class="ma-5 rounded-xl" color="grey-light" flat>
            <div class="pa-5 d-flex justify-space-between align-center">
              <div class="d-flex align-center">
                <v-sheet
                  color="#ef3746"
                  height="40"
                  width="40"
                  class="ma-2 rounded-lg d-flex justify-center align-center"
                >
                  <v-icon>mdi-home-city</v-icon>
                </v-sheet>
                <div class="d-flex flex-column">
                  <span>36</span>
                  <small>Properties</small>
                </div>
              </div>
              <v-btn class="rounded-lg" size="small" variant="text"
                ><v-icon>mdi-arrow-right</v-icon></v-btn
              >
            </div>
            <v-row>
              <!--Property Occupancy-->
              <v-col>
                <v-sheet
                  color="#2A3280"
                  height="100"
                  class="ma-5 d-flex justify-space-evenly rounded-xl"
                >
                  <div class="d-flex flex-column justify-center align-center">
                    <h2>8</h2>
                    <p>Vacant</p>
                  </div>
                  <v-divider vertical></v-divider>
                  <div class="d-flex flex-column justify-center align-center">
                    <h2>8</h2>
                    <p>Occupied</p>
                  </div>
                  <v-divider vertical></v-divider>
                  <div class="d-flex flex-column justify-center align-center">
                    <h2>8</h2>
                    <p>Unlisted</p>
                  </div>
                </v-sheet>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="space-evenly">
        <v-col md="4" class="ml-5">
          <v-card flat class="pa-3" color="transparent">
            <div>
              <v-row>
                <v-col>
                  <div>
                    <h2>Recent community activities</h2>
                    <p>Explore fun activities and events near you today...</p>
                  </div>

                  <div class="d-flex align-end">
                    <v-btn rounded="xl">Lets go</v-btn>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="rounded-xl">
            <div class="ma-5">
              <v-img
                height="150"
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
              ></v-img>
            </div>
            <v-card-text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam saepe, officia et totam nihil
            </v-card-text>
            <p class="ma-5"><small>See all</small></p>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card class="rounded-xl" color="#2A3280">
            <div class="ma-5">
              <v-img
                height="150"
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                cover
              ></v-img>
            </div>
            <v-card-text>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique recusandae quaerat tempore veritatis nemo ducimus.
              </p>
            </v-card-text>
            <p class="ma-5"><small>See all</small></p>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="6">
          <v-card
            color="#2A3280"
            class="pa-4 align-center d-flex justify-space-between"
          >
            <h3>Recent Tasks</h3>
            <v-spacer />
            <v-btn size="x-small" variant="text" href="#"
              >See More<v-icon>mdi-chevron-right</v-icon></v-btn
            >
          </v-card>
          <v-card color="transparent" flat>
            <v-tabs v-model="tab">
              <v-tab value="one">Incoming Requests</v-tab>
              <v-tab value="two">Assigned to me</v-tab>
            </v-tabs>

            <v-card-text>
              <v-window v-model="tab">
                <v-window-item value="one">
                  <div class="ma-5">
                    <div>
                      <p>Hole in Bedroom well at 150 Gordon Crescent...</p>
                    </div>
                    <div class="d-flex justify-space-between">
                      <div>
                        <v-btn variant="plain" size="small" class="ma-2 pa-2"
                          >New</v-btn
                        ><v-btn variant="plain" size="small" class="ma-2 pa-2"
                          >Resident Request</v-btn
                        >
                      </div>
                      <div class="d-flex align-center">3days ago</div>
                    </div>
                    <div>
                      <v-avatar size="x-small">
                        <v-icon icon="mdi-account-circle"></v-icon>
                      </v-avatar>
                      <small>Phil Norlan</small>
                    </div>
                    <v-divider class="mt-3"></v-divider>
                  </div>
                  <div class="ma-5">
                    <div>
                      <p>Hole in Bedroom well at 150 Gordon Crescent...</p>
                    </div>
                    <div class="d-flex justify-space-between">
                      <div>
                        <v-btn variant="plain" size="small" class="ma-2 pa-2"
                          >New</v-btn
                        ><v-btn variant="plain" size="small" class="ma-2 pa-2"
                          >Resident Request</v-btn
                        >
                      </div>
                      <div class="d-flex align-center">3days ago</div>
                    </div>
                    <div>
                      <v-avatar size="x-small">
                        <v-icon icon="mdi-account-circle"></v-icon>
                      </v-avatar>
                      <small>Phil Norlan</small>
                    </div>
                    <v-divider class="mt-3"></v-divider>
                  </div>
                </v-window-item>

                <v-window-item value="two"> Two </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="6">
          <div class="pa-4 d-flex justify-space-between">
            <h3 class="mx-5">Expiring Leases</h3>
            <v-spacer />
            <v-btn size="x-small" variant="text" href="#"
              >See More<v-icon>mdi-chevron-right</v-icon></v-btn
            >
          </div>
          <div class="ma-5">
            <Bar :data="data" :options="options" />
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>
<script>
import Nav from "../components/NavDrawer.vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Bar,
    Nav,
  },
  data() {
    return {
      rent: false,
      alerts: false,
      permits: false,
      reports: false,
      data: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }],
      },
      options: {
        responsive: true,
      },
    };
  },
};
</script>
<style scoped></style>
