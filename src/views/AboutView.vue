<template>
  <div class="form-container">
    <div class="form-card">
      <h2>Register</h2>
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
          <label for="email">Email</label>
          <input
            type="email"
            v-model="form.email"
            id="email"
            required
            placeholder="Enter your email"
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

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            v-model="form.confirmPassword"
            id="confirmPassword"
            required
            placeholder="Confirm your password"
          />
        </div>

        <button type="submit">Register</button>
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
        email: '',
        password: '',
        confirmPassword: ''
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
      if (!this.form.username || !this.form.email || !this.form.password || !this.form.confirmPassword) {
        this.message = 'Please fill out all fields';
        this.isError = true;
      } else if (!this.validatePassword(this.form.password)) {
        this.message = 'Password must be at least 8 characters long and contain both letters and numbers';
        this.isError = true;
      } else if (this.form.password !== this.form.confirmPassword) {
        this.message = 'Passwords do not match';
        this.isError = true;
      } else {
        this.message = 'Registration successful!';
        this.isError = false;
        this.$emit('register', this.form);
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
  margin-bottom: 1em; 
}

.form-group {
  margin-bottom: 0.75em; 
  text-align: left;
}

label {
  display: block;
  font-size: 0.9em;
  color: #555;
  margin-bottom: 0.3em;
}

input[type="text"],
input[type="email"],
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
input[type="email"]:focus,
input[type="password"]:focus {
  border-color: #22C55E;
}

button {
  width: 100%;
  padding: 0.75em;
  font-size: 1em;
  color: white;
  background-color: #22C55E;
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
  color: #22C55E;
  margin-top: 1em;
}
</style>
