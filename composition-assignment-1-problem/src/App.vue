<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-show="showCourseGoal">{{ courseGoal }}</h3>
  <!-- <h3 v-show="data.showCourseGoal">{{ data.courseGoal }}</h3> -->
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  // Composition API

  setup() {
    // Separate refs -->
    // const courseGoal = ref('Finish the course and learn Vue!');
    // const showCourseGoal = ref(true);

    // const toggleVisibility = () => {
    //   showCourseGoal.value = !showCourseGoal.value;
    // };

    // return {
    //   courseGoal,
    //   showCourseGoal,
    //   toggleVisibility,
    // };

    // Ref Object -->
    // const data = ref({
    //   courseGoal: 'Finish the course and learn Vue!',
    //   showCourseGoal: true,
    // });

    // const toggleVisibility = () => {
    //   data.value.showCourseGoal = !data.value.showCourseGoal;
    // };

    // return {
    //   data,
    //   toggleVisibility,
    // };

    // Reactive Object -->
    const data = reactive({
      courseGoal: 'Finish the course and learn Vue!',
      showCourseGoal: true,
    });

    const toggleVisibility = () => {
      data.showCourseGoal = !data.showCourseGoal;
    };

    const dataRefs = toRefs(data);

    return {
      courseGoal: dataRefs.courseGoal,
      showCourseGoal: dataRefs.showCourseGoal,
      toggleVisibility,
    };
  },

  // Options API
  // data() {
  //   return {
  //     courseGoal: 'Finish the course and learn Vue!',
  //     showCourseGoal: true,
  //   };
  // },
  // methods: {
  //   toggleVisibility() {
  //     this.showCourseGoal = !this.showCourseGoal;
  //   },
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
