<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Profile</ion-title>
      </ion-toolbar>

    </ion-header>

    <ion-content fullscreen>

      <personal-info></personal-info>
      <professional-info></professional-info>
      <availability></availability>



<!--      <ion-item>-->
<!--        <ion-label>Toggle</ion-label>-->
<!--        <ion-toggle slot="end" checked></ion-toggle>-->
<!--      </ion-item>-->

<!--      <ion-item>-->
<!--        <ion-checkbox slot="start" checked></ion-checkbox>-->
<!--        <ion-label>Checkbox</ion-label>-->
<!--      </ion-item>-->


      <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button color="primary"
                        @click="() => router.push(`/updateProfile`)"
        >
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>

  </ion-page>
</template>

<script>

import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import Availability from "./Availability";

import {

  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonMenuButton,IonIcon
} from '@ionic/vue';

import {
  add,

} from 'ionicons/icons';

import {useRouter} from "vue-router";

export default {
  name: "profileIndex",
  components: {
    ProfessionalInfo,
    PersonalInfo,
    Availability,
    IonContent,
    IonHeader,
    IonTitle,
    IonMenuButton,
    IonPage,
    IonIcon
  },
  setup() {
    const router = useRouter();
    return {
      add,
      router,
    };
  },
}
</script>

<style scoped>

</style>