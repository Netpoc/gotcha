<template>
    <v-container>
        <v-navigation-drawer theme="dark" color="#2A3280" permanent>
            <div>
              <v-img max-height="65" :src="require('../assets/white.png')"></v-img>
            </div>
            
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
                <v-chip>Tenant</v-chip>
              </div>
            </div>
    
            <v-list color="transparent">
              <v-list-item                
                prepend-icon="mdi-view-dashboard"                
              ><router-link style="text-decoration: none; color: inherit;" to="/tenant_dashboard">Dashboard</router-link>
              </v-list-item>
              <v-list-item prepend-icon="mdi-cash-sync">
                <router-link style="text-decoration: none; color: inherit;" to="/tenant_payment">Payments</router-link>
              </v-list-item>
              <v-list-item prepend-icon="mdi-home-group">
                <router-link style="text-decoration: none; color: inherit;" to="/tenant_community">Communtiy</router-link>
              </v-list-item>
              <v-list-item prepend-icon="mdi-account-details">
                <router-link style="text-decoration: none; color: inherit;" to="/tenant_profile">Profile</router-link>
              </v-list-item>
              <v-list-item prepend-icon="mdi-magnify">
                <router-link style="text-decoration: none; color: inherit;" to="#">Search</router-link>
              </v-list-item>
            </v-list>
    
            <template v-slot:append>
              <div class="pa-2">
                <v-btn size="small" variant="text" to="/" block>Settings</v-btn>
              </div>
              <div class="pa-2">
                <v-btn size="small" variant="text" to="/" block>Logout</v-btn>
              </div>
            </template>
          </v-navigation-drawer>
    </v-container>
</template>
<script>
export default {
    name: 'OwnerNavDrawer',
    components: {

    },

}
</script>
<style scoped>
router-link{
  text-decoration: none;
}
</style>