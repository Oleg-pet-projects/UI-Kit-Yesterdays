import YButton from './components/y-button.vue';
import YInput from './components/y-input.vue';

export default {
  install: (app: any) => {
    app.component('YButton', YButton);
    app.component('YInput', YInput);
  }
};
