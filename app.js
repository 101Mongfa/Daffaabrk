const app = Vue.createApp({
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'password') {
        alert('Login successful!');
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Invalid username or password!';
      }
    },
  },
});

app.mount('#app');
