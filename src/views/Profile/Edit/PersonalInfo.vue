<template>
        <ion-card>
          <ion-card-header>

            <ion-card-subtitle>Edit Profile Picture</ion-card-subtitle>
  <!--          <ion-card-title>Personal Information</ion-card-title>-->

          </ion-card-header>

          <ion-card-content>

            <ion-grid>
              <ion-row>

                <ion-col>
                  <div>
                    <ion-avatar>
                      <img src="https://www.irishrsa.ie/wp-content/uploads/2017/03/default-avatar.png">
                    </ion-avatar>
                  </div>
                </ion-col>

                <ion-col>
                  <div>

                    <ion-button type="submit"  expand="block" >Uploard</ion-button>
  <!--                  <availability></availability>-->
                  </div>
                </ion-col>

              </ion-row>
            </ion-grid>



          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>

            <ion-card-subtitle></ion-card-subtitle>
            <ion-card-title>Personal Information</ion-card-title>

          </ion-card-header>
          <ion-card-content>

            <form @submit.prevent="submitForm">
              <ion-list>

                <ion-item>
                  <ion-label position="floating">First Name</ion-label>
                  <ion-input placeholder="first name" type="text" required v-model="enteredName" />
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Last Name</ion-label>
                  <ion-input placeholder="last name" type="text" required v-model="enteredName" />
                </ion-item>
                <ion-item>
                  <ion-label position="floating">Role</ion-label>
                  <ion-input placeholder="role" type="text" required v-model="enteredName" />
                </ion-item>

                <ion-item>
                  <ion-label position="floating">Telephone</ion-label>
                  <ion-input placeholder="contect number" type="number" required v-model="enteredMobileNumber" />
                </ion-item>

                <ion-item>
                  <ion-label position="floating">Email</ion-label>
                  <ion-input placeholder="email" type="email" required v-model="enteredEmail" />
                </ion-item>

                <ion-item>
                  <ion-label position="floating">NI Number</ion-label>
                  <ion-input placeholder="ID number" type="text" required v-model="enteredNINum" />
                </ion-item>

                <ion-item>
                  <ion-label position="stacked">Home Address</ion-label>
                  <ion-input placeholder="Address Line 1"></ion-input>
                  <ion-input placeholder="Address Line 2"></ion-input>
                  <ion-input placeholder="City"></ion-input>
                  <ion-input placeholder="State"></ion-input>
                  <ion-input placeholder="Zip Code"></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label position="stacked">Bank Details</ion-label>
                  <ion-input placeholder="Bank Name" type="text"></ion-input>
                  <ion-input placeholder="Account Number" type="number"></ion-input>
                </ion-item>

              </ion-list>

              <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-button size="large" type="submit" expand="block" color="light"  >save</ion-button>
                </ion-col>
                <ion-col>
                  <ion-button size="large" type="reset" expand="block" color="dark" >cancel</ion-button>
                </ion-col>

              </ion-row>
                </ion-grid>




            </form>

          </ion-card-content>
        </ion-card>





</template>

<script>
export default {
  name: "PersonalInfo"
}
</script>

<style scoped>

</style>