<template>


  <ion-card>

    <ion-card-header>

<!--      <ion-card-subtitle>Edit Profile Picture</ion-card-subtitle>-->
                <ion-card-title>Working Days</ion-card-title>

    </ion-card-header>

    <ion-card-content>

      <form @submit.prevent="submitForm">
    <ion-item>
      <ion-label>Monday</ion-label>
      <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
    </ion-item>
      <ion-item>
        <ion-label>Tuesday</ion-label>
        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>Wednesday</ion-label>
        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>Thursday </ion-label>
        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>Friday</ion-label>
        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
      </ion-item>
      <ion-card-subtitle>WeekEnd Availability</ion-card-subtitle>
      <ion-item>
        <ion-label>Saturday</ion-label>
        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>Sunday</ion-label>
        <ion-checkbox color="primary" checked slot="start"></ion-checkbox>
      </ion-item>

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


    <ion-card>

      <ion-card-header>

        <!--      <ion-card-subtitle>Edit Profile Picture</ion-card-subtitle>-->
        <ion-card-title>Working Hours</ion-card-title>

      </ion-card-header>

      <ion-card-content>

        <form @submit.prevent="submitForm">

        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-label>Week Days</ion-label>
            </ion-col>

            <ion-col>
                <ion-label>Start Time</ion-label>

            </ion-col>
            <ion-col>
                <ion-label>End Time</ion-label>

            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-label>Monday</ion-label>
            </ion-col>

            <ion-col>

              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
            <ion-col>

              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-label>Tuesday</ion-label>
            </ion-col>

            <ion-col>

              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
            <ion-col>

              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-label>Wednesday</ion-label>
            </ion-col>

            <ion-col>

              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
            <ion-col>

              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-label>Thursday</ion-label>
            </ion-col>

            <ion-col>

              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
            <ion-col>

              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-label>Friday</ion-label>
            </ion-col>

            <ion-col>

              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
            <ion-col>

              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col>
              <ion-label>Saturday</ion-label>
            </ion-col>

            <ion-col>

              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
            <ion-col>

              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
          </ion-row>

          <ion-row>

            <ion-col>
              <ion-label>Sunday</ion-label>
            </ion-col>
            <ion-col>
              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>
            <ion-col>
              <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
            </ion-col>

          </ion-row>


        </ion-grid>

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
import { } from '@ionic/vue';


export default({

  name: "Availability",
  components: {},


  // setup() {
  //   const form = [
  //     { val: 'Pepperoni', isChecked: true },
  //     { val: 'Sausage', isChecked: false },
  //     { val: 'Mushroom', isChecked: false }
  //   ];
  //
  //   return { form };
  // }



});
</script>