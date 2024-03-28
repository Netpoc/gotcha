<template>
    <v-container fluid>
        <Nav />
        <v-main>
            <v-row>
                <v-col cols="6">
                    <v-card class="ma-5">
                        <h3 class="ma-5">Manage Users</h3>
                        <div class="d-flex justify-space-between ma-5">
                            <v-sheet color="#ff5400" class="rounded-xl d-flex flex-column justify-center align-center" height="100" width="100">
                                <v-icon class="ma-1">mdi-google</v-icon>
                                <small>Add User</small>
                            </v-sheet>
                            <v-sheet class="rounded-xl d-flex flex-column justify-center align-center" height="100" width="100" color="grey">
                                <v-icon class="ma-1">mdi-google</v-icon>
                                <small>Add User</small>
                            </v-sheet>
                            <v-sheet class="rounded-xl d-flex flex-column justify-center align-center" height="100" width="100" color="grey">
                                <v-icon class="ma-1">mdi-google</v-icon>
                                <small>Add User</small>
                            </v-sheet>
                            <v-sheet class="rounded-xl d-flex flex-column justify-center align-center" height="100" width="100" color="grey">
                                <v-icon class="ma-1">mdi-google</v-icon>
                                <small>Add User</small>
                            </v-sheet>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>        
                <v-col>
                    <div>
                        <h3 class="ma-5">All Users</h3>
                    </div>
                    <div class="d-flex justify-center align-center">
                        <v-card-text>
                            <v-text-field
                              :loading="loading"
                              append-inner-icon="mdi-account-filter-outline"
                              density="compact"
                              label="Search templates"
                              variant="solo"
                              hide-details
                              single-line
                              @click:append-inner="onClick"
                            ></v-text-field>
                          </v-card-text>
                          
                          <v-btn>Add User</v-btn>
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
                                  Actions
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
                                <td><div>
                                    <v-btn variant="text"><v-icon>mdi-account-cancel</v-icon></v-btn>
                                    <v-divider vertical></v-divider>
                                    <v-btn variant="text"><v-icon>mdi-account-edit</v-icon></v-btn>
                                    <v-divider vertical></v-divider>
                                    <v-btn variant="text"><v-icon>mdi-account-remove</v-icon></v-btn>
                                </div></td>
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
import Nav from "../components/NavDrawer.vue"
export default {    
    components: {
        Nav
    },
    data () {
        return {
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