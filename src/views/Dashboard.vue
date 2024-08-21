<template>
    <div>
      <h1>Your Dashboard</h1>
      <div v-for="course in myCourses" :key="course.id">
        <router-link :to="`/courses/${course.id}`">{{ course.title }}</router-link>
      </div>
      <router-link to="/certificate">View Certificate</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard',
    data() {
      return {
        myCourses: [
          { id: 1, title: 'Course 1' },
          { id: 2, title: 'Course 2' },
        ],
      };
    },
  };
  </script>
  