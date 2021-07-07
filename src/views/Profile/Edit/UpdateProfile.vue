<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Edit Profile</ion-title>
      </ion-toolbar>

      <ion-segment :value="selectedSegment" @ionChange="segmentChanged">
        <ion-segment-button value="Personal">Personal </ion-segment-button>
        <ion-segment-button value="Professional">Professional</ion-segment-button>
        <ion-segment-button value="Availability">Availability</ion-segment-button>
      </ion-segment>

    </ion-header>

    <ion-content fullscreen>

      <div v-if="selectedSegment==='Personal'">
        <personal-info></personal-info>
      </div>

      <div v-if="selectedSegment==='Professional'">
        <ProfessionalInfo></ProfessionalInfo>
      </div>

      <div v-if="selectedSegment==='Availability'">
        <Availability></Availability>
      </div>










    </ion-content>

  </ion-page>
</template>

<script>

import Availability from "./Availability";
import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";

import {

  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonMenuButton,IonSegment, IonSegmentButton, IonToolbar
} from '@ionic/vue';

import {
  add,

} from 'ionicons/icons';

import {useRouter} from "vue-router";

export default {
  name: "UpdateProfile",
  components: {
    Availability,
    ProfessionalInfo,
    PersonalInfo,
    IonContent,
    IonHeader,
    IonTitle,
    IonMenuButton,
    IonPage,IonSegment, IonSegmentButton, IonToolbar
  },
  data(){
    return{
      selectedSegment:"Personal"
    }
  },

  methods: {
    segmentChanged(e) {
      this.selectedSegment = e.detail.value;
      // console.log('Segment changed');
    }
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

<!--import { IonSegment, IonSegmentButton, IonToolbar } from '@ionic/vue';-->
<!--import { defineComponent } from 'vue';-->

<!--export default defineComponent({-->
<!--components: { IonSegment, IonSegmentButton, IonToolbar },-->
<!--methods: {-->
<!--segmentChanged(ev: CustomEvent) {-->
<!--console.log('Segment changed', ev);-->
<!--}-->
<!--}-->
<!--});-->