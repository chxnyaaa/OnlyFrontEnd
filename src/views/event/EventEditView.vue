<template>
  <div class="container">
    <form class="cheer-up-form" @submit.prevent="onSubmit">
      <h3>Leave a Cheer-Up Comment</h3>

      <label for="name">Name:</label>
      <input id="name" v-model="form.name" class="input-field" />

      <label for="comment">Comment:</label>
      <textarea id="comment" v-model="form.comment" class="input-field"></textarea>

      <input class="button" type="submit" value="Submit" />
    </form>

    <div v-if="comments.length" class="comments-section">
      <h3>Comments</h3>
      <div v-for="(comment, index) in comments" :key="index" class="comment">
        <p><strong>{{ comment.name }}</strong>: {{ comment.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'CheerUpForm',
  setup() {
    const form = reactive({
      name: '',
      comment: ''
    });

    const comments = ref([]);

    function onSubmit() {
      if (form.name === '' || form.comment === '') {
        alert('Please fill out both fields before submitting.');
        return;
      }

      comments.value.push({
        name: form.name,
        comment: form.comment
      });

      form.name = '';
      form.comment = '';
    }

    return {
      form,
      comments,
      onSubmit
    };
  }
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.cheer-up-form {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f4f9f4;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

.cheer-up-form h3 {
  color: #3ca563;
  margin-bottom: 16px;
}

.cheer-up-form label {
  margin-top: 12px;
  font-weight: bold;
  color: #333;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}

.button {
  margin-top: 20px;
  padding: 10px;
  background-color: #3ca563;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #339552;
}

.comments-section {
  margin-top: 30px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.comments-section h3 {
  color: #3ca563;
  margin-bottom: 16px;
}

.comment {
  padding: 12px;
  margin-top: 10px;
  border-bottom: 1px solid #eee;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05);
}

.comment p {
  color: #555;
  margin: 0;
}
</style>
