<template>
    <v-layout row wrap>
        <v-flex xs12>
            This is an example of a wrapped component.
        </v-flex>
        <v-flex>
            <v-text-field :name="name" :value="value" @input="(v) => $emit('input', v)"></v-text-field>
        </v-flex>
    </v-layout>
</template>

<script lang="ts" src="./MyTextField.ts"></script>