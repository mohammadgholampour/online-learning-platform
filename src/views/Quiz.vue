<template>
    <div>
      <h1>Quiz</h1>
      <div v-for="(question, index) in quizQuestions" :key="index">
        <p>{{ question.text }}</p>
        <div v-for="option in question.options" :key="option">
          <input type="radio" :name="'question-' + index" :value="option" />
          <label>{{ option }}</label>
        </div>
      </div>
      <button @click="submitQuiz">Submit Quiz</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Quiz',
    data() {
      return {
        quizQuestions: [
          {
            text: 'Question 1?',
            options: ['Option 1', 'Option 2', 'Option 3'],
          },
          {
            text: 'Question 2?',
            options: ['Option 1', 'Option 2', 'Option 3'],
          },
        ],
      };
    },
    methods: {
      submitQuiz() {
        // Logic to submit quiz and analyze results
      },
    },
  };
  </script>
  