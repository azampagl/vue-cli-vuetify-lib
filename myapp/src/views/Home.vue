<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <app-mytextfield name="email" v-model="email"></app-mytextfield>
        The email value is {{ email }}.
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import { Components as MyLibComponents } from 'mylib';

    @Component({
        components: {
            [MyLibComponents.MyTextField.componentName()]: MyLibComponents.MyTextField.default
            HelloWorld,
        },
    })
    export default class Home extends Vue {

        email: string = '';

    }
</script>
