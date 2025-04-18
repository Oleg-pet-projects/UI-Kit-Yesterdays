import FlipCard from '@/components/flip-card.vue';

export default {
  install: (app: any) => {
    app.component('YFlipCard', FlipCard);
  }
};
