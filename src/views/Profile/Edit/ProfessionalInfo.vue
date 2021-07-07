<template>
  <ion-card>
    <ion-card-header>

      <ion-card-subtitle></ion-card-subtitle>
      <ion-card-title>Professional Information</ion-card-title>

    </ion-card-header>
    <ion-card-content>

      <form @submit.prevent="submitForm">
        <ion-list>

<!--          <ion-item>-->
<!--            <ion-label position="floating">Qualification</ion-label>-->
<!--            <ion-input placeholder="first name" type="text" required v-model="enteredName" />-->
<!--          </ion-item>-->
          <ion-item>
            <ion-label>Qualification</ion-label>
            <ion-select multiple="true" cancel-text="cancel" ok-text="Ok">
              <ion-select-option value="bacon">Bacon</ion-select-option>
              <ion-select-option value="olives">Black Olives</ion-select-option>
              <ion-select-option value="xcheese">Extra Cheese</ion-select-option>
              <ion-select-option value="peppers">Green Peppers</ion-select-option>
              <ion-select-option value="mushrooms">Mushrooms</ion-select-option>
              <ion-select-option value="onions">Onions</ion-select-option>
              <ion-select-option value="pepperoni">Pepperoni</ion-select-option>
              <ion-select-option value="pineapple">Pineapple</ion-select-option>
              <ion-select-option value="sausage">Sausage</ion-select-option>
              <ion-select-option value="Spinach">Spinach</ion-select-option>
            </ion-select>
          </ion-item>


<!--          <ion-item>-->
<!--            <ion-label position="floating">Speciality</ion-label>-->
<!--            <ion-input placeholder="speciality" type="text" required v-model="enteredName" />-->
<!--          </ion-item>-->
          <ion-item>
            <ion-label>Speciality</ion-label>
            <ion-select multiple="true" cancel-text="cancel" ok-text="Ok!">
              <ion-select-option value="bacon">Bacon</ion-select-option>
              <ion-select-option value="olives">Black Olives</ion-select-option>
              <ion-select-option value="xcheese">Extra Cheese</ion-select-option>
              <ion-select-option value="peppers">Green Peppers</ion-select-option>
              <ion-select-option value="mushrooms">Mushrooms</ion-select-option>
              <ion-select-option value="onions">Onions</ion-select-option>
              <ion-select-option value="pepperoni">Pepperoni</ion-select-option>
              <ion-select-option value="pineapple">Pineapple</ion-select-option>
              <ion-select-option value="sausage">Sausage</ion-select-option>
              <ion-select-option value="Spinach">Spinach</ion-select-option>
            </ion-select>
          </ion-item>

<!--          <ion-item>-->
<!--            <ion-label position="floating">IT System</ion-label>-->
<!--            <ion-input placeholder="IT system" type="text" required v-model="enteredName" />-->
<!--          </ion-item>-->

          <ion-item>
            <ion-label>IT System</ion-label>
            <ion-select multiple="true" cancel-text="cancel" ok-text="Ok!">
              <ion-select-option value="bacon">Bacon</ion-select-option>
              <ion-select-option value="olives">Black Olives</ion-select-option>
              <ion-select-option value="xcheese">Extra Cheese</ion-select-option>
              <ion-select-option value="peppers">Green Peppers</ion-select-option>
              <ion-select-option value="mushrooms">Mushrooms</ion-select-option>
              <ion-select-option value="onions">Onions</ion-select-option>
              <ion-select-option value="pepperoni">Pepperoni</ion-select-option>
              <ion-select-option value="pineapple">Pineapple</ion-select-option>
              <ion-select-option value="sausage">Sausage</ion-select-option>
              <ion-select-option value="Spinach">Spinach</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-label position="floating">Smart Card Number</ion-label>
            <ion-input placeholder="card number" type="number" required v-model="enteredMobileNumber" />
          </ion-item>

<!--          <ion-item>-->
<!--            <ion-label position="floating">Skils</ion-label>-->
<!--            <ion-input placeholder="skils" type="email" required v-model="enteredEmail" />-->
<!--          </ion-item>-->



          <ion-item>
            <ion-label>Skils</ion-label>
            <ion-select :interface-options="options" multiple="true">
              <ion-select-option value="brown">Brown</ion-select-option>
              <ion-select-option value="blonde">Blonde</ion-select-option>
              <ion-select-option value="black">Black</ion-select-option>
              <ion-select-option value="red">Red</ion-select-option>
            </ion-select>
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
  name: "ProfessionalInfo"
}
</script>

<style scoped>

</style>