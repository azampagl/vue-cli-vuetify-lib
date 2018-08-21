<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
        <v-layout row wrap>
            <v-flex xs12>
                <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
                <app-mytextfield name="email" v-model="email"></app-mytextfield>
                The email value is {{ email }}.
            </v-flex>            
        </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Components as MyLibComponents } from 'mylib';

    @Component({
        components: {
            [MyLibComponents.MyTextField.componentName()]: MyLibComponents.MyTextField.default
        }
    })
    export default class Home extends Vue {

        email: string = '';

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
