import { defineStore } from 'pinia';

export default defineStore('account', {
  state: () => {
    return {
      account: '10086',
      token: 'qwe000asd',
    };
  },
});
