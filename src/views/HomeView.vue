<template>    
    <v-container fluid>
      <!--The Main Home Page Tool Bar-->
      <v-toolbar color="transparent">
        <v-toolbar-title>Gotcha</v-toolbar-title>
          <v-btn variant="text">Home</v-btn>
          <v-divider vertical></v-divider>
          <v-btn variant="text">About Us</v-btn>
          <v-divider vertical></v-divider>
          <v-btn variant="text">Facilities</v-btn>
          <v-divider vertical></v-divider>
          <v-btn variant="text">Services</v-btn>
          <v-divider vertical></v-divider>
          <v-btn variant="text">Contact</v-btn>
      <!--The Main Home Page Tool Bar Ends-->    
      </v-toolbar>
      <v-row>
        <v-col md="8">
          <v-card class="ma-5">
            <div class="ma-5 d-flex flex-column align-center">
              <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis modi repellendus dolorum aspernatur repellat magnam, eos nostrum maiores, temporibus hic illo ab pariatur maxime laudantium illum magni quia ullam. Fuga maxime accusantium ab.</p>
            </div>
          </v-card>
            
        </v-col>
        <v-col md="4">
          <v-card elevation="16" class="ma-5 pa-5 rounded-xl">
            <div class="ma-5 d-flex flex-column align-center">
              <h2>Login</h2>
            </div>
            <v-form class="mb-5" ref="form">
              <v-text-field                
                label="Email or Username"
                required
              ></v-text-field>
        
              <v-text-field                
                label="Password"
                required
                type="password"
              ></v-text-field>
        
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
                <p class="ma-5">Forgot password or username?</p>
                

              </div>
            </v-form>
            <v-divider></v-divider>

            <div class="ma-5 d-flex justify-center">
              <v-btn><v-icon>mdi-facebook</v-icon></v-btn>
              <v-btn><v-icon>mdi-gmail</v-icon></v-btn>
            </div>
            
          </v-card>
        </v-col>
      </v-row> 
    </v-container>
</template>
