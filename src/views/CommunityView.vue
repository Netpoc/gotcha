<template>
  <v-container fluid>
    <Nav />
    <v-main>
      <!--FIRST TOP SECTION-->
      <v-row justify="space-between">
        <v-col cols="6">
          <v-card flat color="transparent" class="ma-5">
            <!--Group of buttons-->
            <h1 class="ma-5">Community</h1>
            <div class="ma-5 d-flex justify-space-between">
              <v-card class="rounded-xl d-flex flex-column justify-center align-center" height="100" width="100"
                color="#ef3746">
                <v-icon color="#2A3280" size="40">mdi-forum-outline</v-icon>
                <span><small>Forum</small></span>
              </v-card>
              <v-card class="rounded-xl d-flex flex-column justify-center align-center" height="100" width="100"
                color="#2A3280">
                <v-icon size="40">mdi-square-edit-outline</v-icon>
                <span><small>Post</small></span>
              </v-card>
              <v-card class="rounded-xl d-flex flex-column justify-center align-center" height="100" width="100"
                color="#2A3280">
                <v-icon size="40">mdi-chat</v-icon>
                <span><small>Chat</small></span>
              </v-card>
              <v-card class="rounded-xl d-flex flex-column justify-center align-center" height="100" width="100"
                color="#2A3280">
                <v-icon size="40">mdi-account-cog</v-icon>
                <span><small>Manage</small></span>
              </v-card>
            </div>
          </v-card>
          <!--Recent Posts Card Content-->
          <v-card class="rounded-xl ma-5" color="#2A3280">
            <div class="ma-5 d-flex justify-space-between">
              <h3>Recent Posts</h3>
              <v-btn size="x-small" variant="text">See more</v-btn>
            </div>
            <div class="ma-5 d-flex justify-space-between align-center">
              <div class="d-flex">
                <v-sheet rounded="lg" color="cyan" height="50" width="50">
                </v-sheet>
                <div class="mx-3">
                  <p>Hole in Bedroom</p>
                  <div class="d-flex align-center">
                    <v-sheet color="white" height="20" width="20" rounded="xl" class="d-flex align-center justify-center">
                      <v-icon size="x-small">mdi-account</v-icon>
                    </v-sheet>
                    <p class="mx-3"><small>Baldwin Cole</small></p>
                  </div>

                </div>
              </div>
              <p><small>2 days ago</small> </p>
            </div>
            <div class="ma-5 d-flex justify-space-between align-center">
              <div class="d-flex">
                <v-sheet rounded="lg" color="cyan" height="50" width="50">
                </v-sheet>
                <div class="mx-3">
                  <p>Hole in Bedroom</p>
                  <div class="d-flex align-center">
                    <v-sheet color="white" height="20" width="20" rounded="xl" class="d-flex align-center justify-center">
                      <v-icon size="x-small">mdi-account</v-icon>
                    </v-sheet>
                    <p class="mx-3"><small>Baldwin Cole</small></p>
                  </div>

                </div>
              </div>

              <small>5 days ago</small>
            </div>
            <div class="ma-5 d-flex justify-space-between align-center">
              <div class="d-flex">
                <v-sheet rounded="lg" color="cyan" height="50" width="50">
                </v-sheet>
                <div class="mx-3">
                  <p>Hole in Bedroom</p>
                  <div class="d-flex align-center">
                    <v-sheet color="white" height="20" width="20" rounded="xl" class="d-flex align-center justify-center">
                      <v-icon size="x-small">mdi-account</v-icon>
                    </v-sheet>
                    <p class="mx-3"><small>Baldwin Cole</small></p>
                  </div>

                </div>
              </div>

              <small>6 days ago</small>
            </div>
          </v-card>
          <v-card flat class="ma-5" color="transparent">
            <!--Upcoming Events-->
            <div class="ma-5 d-flex justify-space-between align-center">
              <h3>Upcoming Events</h3>
              <v-btn size="small" class="rounded-xl" variant="text">See more</v-btn>
            </div>
            <div>
              <div class="ma-3 d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                  <v-sheet class="d-flex justify-center align-center" color="cyan" height="30" width="30">
                    <v-icon>mdi-calendar-month</v-icon>
                  </v-sheet>
                  <p class="ma-3">Birthday!</p>
                </div>
                <span><small>23 Mar</small></span>
              </div>
              <div class="ma-3 d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                  <v-sheet class="d-flex justify-center align-center" color="cyan" height="30" width="30">
                    <v-icon>mdi-calendar-month</v-icon>
                  </v-sheet>
                  <p class="ma-3">Community Meeting</p>
                </div>
                <span><small>23 Mar</small></span>
              </div>
              <div class="ma-3 d-flex justify-space-between align-center">
                <div class="d-flex align-center">
                  <v-sheet class="d-flex justify-center align-center" color="cyan" height="30" width="30">
                    <v-icon>mdi-calendar-month</v-icon>
                  </v-sheet>
                  <p class="ma-3">Carnival</p>
                </div>
                <span><small>23 Mar</small></span>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6">
          <!--Approval Card-->
          <v-card class="ma-5 rounded-xl">
            <v-sheet rounded="xl" height="250">
              <div class="pa-5 d-flex justify-space-between">
                <h3>Approvals</h3>
                <v-btn variant="text"><v-icon>mdi-arrow-right</v-icon></v-btn>
              </div>
            </v-sheet>
          </v-card>
          <div class="ma-5">
            <div class="ma-5 d-flex justify-space-between align-center">
              <h3>General Anouncement</h3>
              <v-btn variant="text"><v-icon>mdi-plus</v-icon></v-btn>
            </div>
            <v-sheet class="d-flex justify-center align-center ma-5" height="100">
              <small>No news</small>
            </v-sheet>
          </div>
          <div class="ma-5">
            <div class="ma-5 d-flex justify-space-between align-center">
              <h3>Inbox</h3>
              <v-btn rounded="xl" size="x-small">See More <v-icon>mdi-chevron-right</v-icon></v-btn>
            </div>
            <v-card flat>
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
                          <v-btn variant="plain" size="small" class="ma-2 pa-2">New</v-btn><v-btn variant="plain"
                            size="small" class="ma-2 pa-2">Resident Request</v-btn>
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
                          <v-btn variant="plain" size="small" class="ma-2 pa-2">New</v-btn><v-btn variant="plain"
                            size="small" class="ma-2 pa-2">Resident Request</v-btn>
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

                  <v-window-item value="two">
                    Two
                  </v-window-item>
                </v-window>
              </v-card-text>
            </v-card>
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