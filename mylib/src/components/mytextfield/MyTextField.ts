import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';


/**
 *
 */
@Component
export class MyTextField extends Vue {

    //
    @Prop({ required: true })
    name: string;

    //
    @Prop({ required: true })
    value: string;

}

//
export const componentName = (prefix?: string) => `${prefix ? prefix : 'app'}-mytextfield`;

//
export default MyTextField;
