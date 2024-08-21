import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    courses: [],
    enrollments: [],
  },
  mutations: {
    addUser(state, user) {
      state.users.push(user);
    },
    addCourse(state, course) {
      state.courses.push(course);
    },
    enrollUser(state, enrollment) {
      state.enrollments.push(enrollment);
    },
  },
  actions: {
    signup({ commit }, user) {
      commit('addUser', user);
    },
    createCourse({ commit }, course) {
      commit('addCourse', course);
    },
    enrollUserInCourse({ commit }, enrollment) {
      commit('enrollUser', enrollment);
    },
  },
  getters: {
    getUserCourses: (state) => (userId) => {
      return state.enrollments.filter(enrollment => enrollment.userId === userId);
    },
  },
});
