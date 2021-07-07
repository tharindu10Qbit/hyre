
<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>

        <ion-buttons  size="small" slot="start" color="dark">
          <ion-back-button> </ion-back-button>
        </ion-buttons>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>


    <ion-content>



      <ion-card>
        <ion-card-header>

          <ion-item>
            <ion-label position="floating">Full Name</ion-label>
            <ion-input  placeholder="fullname"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating">UserName</ion-label>
            <ion-input  placeholder="username"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input  placeholder="email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating" >Password</ion-label>
            <ion-input placeholder="password" type="password"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="floating" >Confirme Password</ion-label>
            <ion-input placeholder="password" type="password"></ion-input>
          </ion-item>

<!--          <ion-row class="ion-justify-content-end ion-text-end ion-margin-top">-->
<!--            <ion-col>-->
<!--              <span>-->
<!--                <a class="link dark" expand="block" href="/reset/password">-->
<!--                  Forgot Password ?-->
<!--                </a>-->
<!--              </span>-->
<!--            </ion-col>-->
<!--          </ion-row>-->

        </ion-card-header>

        <div id="button">


<!--          <ion-button  routerLink="/Folder" expand="full" shape="round" color="light" size="large" type="submit">-->
<!--            LOG IN-->
<!--          </ion-button>-->

          <ion-button expand="block"  color="dark" size="large">
            REGISTER
          </ion-button>

          <ion-item  class="ion-text-center">
            <ion-label>OR</ion-label>
          </ion-item>

          <ion-item class="ion-text-center">

            <span class="already"> Already have an account? <a class="link dark" href="/login">
                  Sign In
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
  IonFooter, IonHeader,IonCard,
  IonCardHeader,
  IonItem,IonInput,IonLabel,

    IonBackButton
} from '@ionic/vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SignUp',
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
    IonBackButton,



    IonPage,

  }
});
</script>

<style scoped>


</style>