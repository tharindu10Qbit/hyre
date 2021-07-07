<template>
  <ion-card>
    <ion-card-header>

      <ion-card-subtitle>Availability</ion-card-subtitle>
<!--      <ion-card-title>Work Experience</ion-card-title>-->

    </ion-card-header>
    <ion-card-content>

      <ion-item>
        <ion-label>Qualification: Name</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Speciality: Name</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>IT System: Name</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Skils: Name</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Smart Card Number: Name</ion-label>
      </ion-item>
      <h2></h2>
    </ion-card-content>
  </ion-card>
</template>

<script>

import {IonLabel,IonItem} from '@ionic/vue';
export default {
  name: "Availability",
  components:{
    IonLabel,IonItem
  }
}
</script>

<style scoped>

</style>