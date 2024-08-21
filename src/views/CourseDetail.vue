<template>
    <div>
      <h1>{{ course.title }}</h1>
      <p>{{ course.description }}</p>
      <button @click="enroll">Enroll</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CourseDetail',
    data() {
      return {
        course: {
          id: this.$route.params.id,
          title: 'Sample Course',
          description: 'Course description here.',
        },
      };
    },
    methods: {
      enroll() {
        this.$router.push('/dashboard');
      },
    },
  };
  </script>
  