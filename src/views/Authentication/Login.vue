<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>

        <ion-title>Sign In</ion-title>
      </ion-toolbar>

    </ion-header>


    <ion-content>


      <ion-card>
        <ion-card-header>

          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input placeholder="email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input placeholder="password" type="password"></ion-input>
          </ion-item>

          <ion-row class="ion-justify-content-end ion-text-end ion-margin-top">
            <ion-col>
              <span>
                <a class="link dark" expand="block" href="/resetPassword">
                  Forgot Password ?
                </a>
              </span>
            </ion-col>
          </ion-row>

        </ion-card-header>

        <div id="button">
          <ion-button router-link="/profile" expand="block" color="light" size="large" type="submit">
            LOG IN
          </ion-button>

          <ion-item  class="ion-text-center">
            <ion-label>OR</ion-label>
          </ion-item>

          <ion-item class="ion-text-center">

            <span class="already"> Don't have an account? <a class="link dark" href="/signUp">
                  Sign Up
                </a></span>

          </ion-item>

        </div>
      </ion-card>

    </ion-content>


    <ion-footer>
      <ion-toolbar>


      </ion-toolbar>
    </ion-footer>


  </ion-page>


</template>

<script lang="ts">
import {
  IonContent,
  IonButton,
  IonPage,
  IonTitle, IonToolbar,
  IonFooter, IonHeader, IonCard,
  IonCardHeader, IonCardTitle,
  IonItem, IonInput, IonLabel,
  IonCol, IonRow,

} from '@ionic/vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Login',
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonCard,

    IonCardHeader,

    IonToolbar,
    IonFooter,

    IonButton,
    IonItem,
    IonInput,
    IonLabel,
    IonCol, IonRow,


    IonPage,

  }
});
</script>

<style scoped>


.auth-form ion-grid,
.auth-form ion-row {
  height: 100%;
  justify-content: center;
}

.already {
  display: block;
  text-align: center;
  padding-bottom: 10px;
}


</style>