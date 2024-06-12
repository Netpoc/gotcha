<template>
  <v-container fluid>
    <Nav />
    <v-main class="ma-5">
      <h1 class="mx-5">Occupant Dashboard</h1>
      <v-row align="top" justify="space-between">
        <v-col cols="6">
          <v-card color="transparent" class="rounded-xl mx-5" flat>
            <v-sheet class="pa-3 rounded-xl" elevation="8">
              <div class="d-flex justify-space-between align-center">
                <v-sheet
                  color="#ef3746"
                  height="40"
                  width="40"
                  class="mx-3 d-flex align-center justify-center rounded-lg"
                >
                  <v-icon>mdi-gauge</v-icon>
                </v-sheet>
                <p>Frequent Activity</p>
                <v-spacer></v-spacer>
                <v-btn size="small" variant="text"
                  ><v-icon>mdi-dots-horizontal</v-icon></v-btn
                >
              </div>
              <div class="ma-5 d-flex justify-space-evenly">
                <!--Rents Option Modal/Dialog-->
                <v-dialog v-model="rent" max-width="500">
                  <template v-slot:activator="{ props: activatorProps }">
                    <v-card
                      class="d-flex ma-3 rounded-xl flex-column align-center justify-center"
                      v-bind="activatorProps"
                      color="#2A3280"
                      height="100"
                      width="100"
                      flat
                    >
                      <v-icon color="#ef3746" size="45"
                        >mdi-cash-multiple</v-icon
                      >
                      <small>Rents</small>
                    </v-card>
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
                <!--Rents Ends-->
                <!--Utility -->
                <v-dialog v-model="utility" max-width="500">
                  <template v-slot:activator="{ props: activeUtility }">
                    <v-card
                      class="d-flex ma-3 rounded-xl flex-column align-center justify-center"
                      v-bind="activeUtility"
                      flat
                      height="100"
                      width="100"
                      color="#2A3280"
                    >
                      <v-icon color="#ef3746" size="45"
                        >mdi-invoice-text-multiple-outline</v-icon
                      >
                      <small>Utility</small>
                    </v-card>
                  </template>
                  <v-card>
                    <h1>Utility Payments</h1>
                  </v-card>
                </v-dialog>
                <!--Utility Ends-->

                <!--Inbox Option-->
                <v-card
                  class="d-flex ma-3 rounded-xl flex-column align-center justify-center"
                  height="100"
                  width="100"
                  color="#2A3280"
                  to="#"
                  flat
                >
                  <v-icon color="#ef3746" size="45">mdi-inbox</v-icon>
                  <small>Indox</small>
                </v-card>

                <v-card
                  class="d-flex ma-3 rounded-xl flex-column align-center justify-center"
                  height="100"
                  width="100"
                  color="#2A3280"
                  to="#"
                >
                  <v-icon color="#ef3746" size="45"
                    >mdi-newspaper-variant-multiple-outline</v-icon
                  >
                  <small>Others</small>
                </v-card>
              </div>
            </v-sheet>
          </v-card>
        </v-col>
        <v-col cols="5">
          <v-card min-height="200" class="rounded-xl">
            <div class="d-flex justify-space-between ma-5">
              <div class="d-flex align-center">
                <v-sheet
                  class="mr-2 rounded-lg d-flex align-center justify-center"
                  height="40"
                  width="40"
                  color="#EF3746"
                >
                  <v-icon>mdi-human-greeting-proximity</v-icon>
                </v-sheet>
                <h3>Community Posts</h3>
              </div>
              <v-btn size="small" variant="text"
                ><v-icon>mdi-arrow-right</v-icon></v-btn
              >
            </div>

            <v-row>
              <v-col cols>
                <div class="d-flex justify-space-evenly">
                  <v-card
                    class="rounded-xl"
                    color="transparent"
                    to="/tenant_chat"
                    flat
                  >
                    <v-sheet
                      height="100"
                      width="100"
                      color="transparent"
                      class="d-flex rounded-xl flex-column align-center justify-center"
                    >
                      <v-icon color="#EF3746" size="45"> mdi-forum </v-icon>
                      <small>Chat</small>
                    </v-sheet>
                  </v-card>
                  <v-card
                    class="rounded-xl"
                    color="transparent"
                    to="/tenant_chat"
                    flat
                  >
                    <v-sheet
                      height="100"
                      width="100"
                      color="transparent"
                      class="d-flex rounded-xl flex-column align-center justify-center"
                    >
                      <v-icon color="#EF3746" size="45">
                        mdi-square-edit-outline
                      </v-icon>
                      <small>Create Post</small>
                    </v-sheet>
                  </v-card>

                  <v-card
                    class="rounded-xl"
                    color="transparent"
                    to="/tenant_chat"
                    flat
                  >
                    <v-sheet
                      height="100"
                      width="100"
                      color="transparent"
                      class="d-flex rounded-xl flex-column align-center justify-center"
                    >
                      <v-icon color="#EF3746" size="45"> mdi-newspaper </v-icon>
                      <small>News</small>
                    </v-sheet>
                  </v-card>
                </div>
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
      <v-row align="top" justify="space-evenly">
        <v-col md="6">
          <div class="pa-4 d-flex align-center justify-space-between">
            <v-sheet
              color="#EF3746"
              class="mr-2 d-flex align-center justify-center rounded-lg"
              height="40"
              width="40"
            >
              <v-icon>mdi-history</v-icon>
            </v-sheet>
            <h3>Recent Activities</h3>
            <v-spacer />
            <v-btn size="x-small" variant="text"
              >See More<v-icon>mdi-chevron-right</v-icon></v-btn
            >
          </div>
          <div class="pa-3">
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">
                    <strong>Description</strong>
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
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                  <td>{{ item.date }}</td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </v-col>
        <v-col md="5">
          <div class="ma-4 d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <v-sheet
                color="#EF3746"
                height="40"
                width="40"
                class="mr-2 rounded-lg d-flex align-center justify-center"
              >
                <v-icon>mdi-home-group</v-icon>
              </v-sheet>
              <h3>Community Posts</h3>
            </div>

            <v-btn size="x-small" variant="text"
              >See More<v-icon>mdi-chevron-right</v-icon></v-btn
            >
          </div>
          <div class="ma-5">
            <h4>Holes in bedroom wall at 10 Gordon Cres.</h4>
            <div class="d-flex justify-space-between align-center">
              <div class="mb-2">
                <v-btn class="mr-2" size="x-small">New</v-btn>
                <v-btn size="x-small">Redsident Request</v-btn>
              </div>
              <small>1d ago</small>
            </div>
            <div class="d-flex align-center">
              <v-sheet
                class="mr-2 rounded-xl d-flex align-center justify-center"
                height="25"
                width="25"
                color="cyan"
              >
                <v-icon size="x-small">mdi-account</v-icon>
              </v-sheet>
              <small>Baldwin Cole</small>
            </div>
          </div>
          <div class="ma-5">
            <h4>Holes in bedroom wall at 10 Gordon Cres.</h4>
            <div class="d-flex justify-space-between align-center">
              <div class="mb-2">
                <v-btn class="mr-2" size="x-small">New</v-btn>
                <v-btn size="x-small">Redsident Request</v-btn>
              </div>
              <small>1d ago</small>
            </div>
            <div class="d-flex align-center">
              <v-sheet
                class="rounded-xl mr-2 d-flex align-center justify-center"
                height="25"
                width="25"
                color="cyan"
              >
                <v-icon size="x-small">mdi-account</v-icon>
              </v-sheet>
              <small>Sean Cole</small>
            </div>
          </div>
          <div class="ma-5">
            <h4>Holes in bedroom wall at 10 Gordon Cres.</h4>
            <div class="d-flex justify-space-between align-center">
              <div class="mb-2">
                <v-btn class="mr-2" size="x-small">New</v-btn>
                <v-btn size="x-small">Redsident Request</v-btn>
              </div>
              <small>1d ago</small>
            </div>
            <div class="d-flex align-center">
              <v-sheet
                class="rounded-xl mr-2 d-flex align-center justify-center"
                height="25"
                width="25"
                color="cyan"
              >
                <v-icon size="x-small">mdi-account</v-icon>
              </v-sheet>
              <small>Shehu Garba</small>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>
<script>
import Nav from "../../components/TenantNav.vue";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      rent: false,
      utility: false,
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
    };
  },
};
</script>
<style scoped>
.main {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to left, #ffffff 40%, #647abb 40%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.center {
  display: inline-block;
  height: 250px;
  width: 15%;
  margin: 0 auto;
  border: 1px solid black;
}
</style>
