<template>
    <div>
      <h1>All Courses</h1>
      <div v-for="course in courses" :key="course.id">
        <router-link :to="`/courses/${course.id}`">{{ course.title }}</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Courses',
    data() {
      return {
        courses: [
          { id: 1, title: 'Course 1' },
          { id: 2, title: 'Course 2' },
        ],
      };
    },
  };
  </script>
  