<template>
    <div class="form-container">
      <div class="form-card">
        <h2>Login</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              v-model="form.username"
              id="username"
              required
              placeholder="Enter your username"
            />
          </div>
  
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="form.password"
              id="password"
              required
              placeholder="Enter your password"
            />
          </div>
  
          <button type="submit">Login</button>
        </form>
  
        <p v-if="message" :class="{ error: isError, success: !isError }">{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        message: '',
        isError: false
      };
    },
    methods: {
      validatePassword(password) {
        const hasNumber = /\d/;
        const hasLetter = /[a-zA-Z]/;
        return password.length >= 8 && hasNumber.test(password) && hasLetter.test(password);
      },
      submitForm() {
        if (!this.form.username || !this.form.password) {
          this.message = 'Please enter both username and password';
          this.isError = true;
        } else if (!this.validatePassword(this.form.password)) {
          this.message = 'Password must be at least 8 characters long and contain both letters and numbers';
          this.isError = true;
        } else {
          this.message = 'Login successful!';
          this.isError = false;
          alert(this.message);
          this.$emit('login', this.form);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    display: flex;
    justify-content: center;
  }
  
  .form-card {
    background-color: #fff;
    padding: 1.5em; 
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 500px; 
    max-width: 1000px; 
    text-align: center;
  }
  
  h2 {
    color: #333;
    font-weight: bold;
    margin-bottom: 1em; 
  }
  
  .form-group {
    margin-bottom: 0.75em; 
    text-align: left;
  }
  
  label {
    display: block;
    font-size: 0.9em;
    font-weight: bold;
    color: #555;
    margin-bottom: 0.3em;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 0.75em;
    border-radius: 4px;
    border: 1px solid #ddd;
    outline: none;
    font-size: 1em;
    transition: border-color 0.3s ease;
  }
  
  input[type="text"]:focus,
  input[type="password"]:focus {
    border-color: #3ca563;
  }
  
  button {
    width: 100%;
    padding: 0.75em;
    font-size: 1em;
    color: white;
    background-color: #3ca563;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 1em;
  }
  
  button:hover {
    background-color: #16a34a;
  }
  
  p.error {
    color: red;
    margin-top: 1em;
  }
  
  p.success {
    color: #3ca563;
    margin-top: 1em;
  }
  </style>
  