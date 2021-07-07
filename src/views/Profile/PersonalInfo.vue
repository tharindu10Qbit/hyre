<template>


  <ion-card>
    <ion-card-header>
      <div>
        <ion-avatar class="ion-margin-start">
          <img src="https://www.irishrsa.ie/wp-content/uploads/2017/03/default-avatar.png"/>

        </ion-avatar>
        <ion-item>
          <ion-label>
            <h1>Tharindu Tharaka</h1>

          </ion-label>

        </ion-item>

      </div>

    </ion-card-header>


    <ion-card-content>

      <ion-grid>
        <ion-row>
          <ion-col>

            <p>tharindu@10Qbit.com</p>
          </ion-col>
          <ion-col>
            <div> <p>07712356789</p></div>

          </ion-col>

        </ion-row>
      </ion-grid>


      <ion-card-title></ion-card-title>
    </ion-card-content>
  </ion-card>


</template>

<script>
// import Availability from "./Availability";
import {
  IonCard,
  IonCardTitle, IonCardHeader, IonCardContent, IonAvatar
} from "@ionic/vue";


export default {
  name: "PersonalInfo",
  emits: ['save-memory'],

  components: {

    IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonAvatar,
  },

  data() {
    return {}
  }

}
</script>

<style scoped>

</style>