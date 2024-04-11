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
                <v-chip>Admin</v-chip>
              </div>
            </div>
    
            <v-list color="transparent">
              <v-list-item
                to="/tenant_dashboard"
                prepend-icon="mdi-view-dashboard"
                title="Dashboard"
              ></v-list-item>
              <v-list-item to="/account_view" prepend-icon="mdi-cash-sync" title="Payments"></v-list-item>
              <v-list-item to="/tenant_community" prepend-icon="mdi-home-group" title="Community"></v-list-item>
              <v-list-item to="/tenant_profile" prepend-icon="mdi-account-details" title="Profile"></v-list-item>
              <v-list-item to="search" prepend-icon="mdi-magnify" title="Search"></v-list-item>
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