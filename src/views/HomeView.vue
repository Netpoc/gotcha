<template>    
    <v-container fluid>
      <v-toolbar>
        <v-toolbar-title>Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        <v-img src="../assets/gotcha.png"></v-img>
      </v-toolbar>
      <v-row>
        <v-col md="8">
          <v-carousel>
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              cover
            ></v-carousel-item>
          
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
              cover
            ></v-carousel-item>
          
            <v-carousel-item
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col md="4">
          <v-card elevation="16" class="ma-5 pa-5">
            <v-form ref="form">
              <v-text-field
                
                label="Name"
                required
              ></v-text-field>
        
              <v-select
                
                :rules="[v => !!v || 'Item is required']"
                label="Item"
                required
              ></v-select>
        
              <v-checkbox
                
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>
        
              <div class="d-flex flex-column">
                <v-btn
                  class="mt-4"
                  color="success"
                  block
                  to="about"
                >
                  Validate
                </v-btn>
        
                <v-btn
                  class="mt-4"
                  color="error"
                  block
                  
                >
                  Reset Form
                </v-btn>
        
                <v-btn
                  class="mt-4"
                  color="warning"
                  block                  
                >
                  Reset Validation
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
      
    </v-container>
</template>
<style scoped>

</style>