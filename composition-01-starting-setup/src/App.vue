<template>
  <section class="container">
    <user-data
      class="test"
      :first-name="firstName"
      :last-name="lastName"
    ></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" /> -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<!-- <script setup> -->
<script>
import { computed, ref, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

// const userName = ref('Maximilian');

// setTimeout(() => {
//   userName.value = 'Anna';
// }, 2000);

export default {
  components: {
    UserData,
  },
  setup() {
    // const userName = ref('Maximilian');
    const age = ref(30);
    provide('age', age);
    // const user = reactive({ name: 'Maximilian', age: 30 });

    // console.log(isRef(age));
    // console.log(isReactive(user));

    // setTimeout(() => {
    //   // userName.value = 'Anna';
    //   // age.value = 31;
    //   // user.value.name = 'Anna';
    //   // user.value.age = 31;
    //   user.name = 'Anna';
    //   user.age = 31;
    // }, 2000);

    // const userRefs = toRefs(user);

    function setNewAge() {
      // user.age = 31;
      age.value = 32;
    }

    const firstName = ref('');
    const lastName = ref('');

    // function setFirstName(event) {
    //   firstName.value = event.target.value;
    // }

    // function setLastName(event) {
    //   lastName.value = event.target.value;
    // }

    const userName = computed(function () {
      return `${firstName.value} ${lastName.value}`;
    });

    watch([age, userName], function (newValues, oldValues) {
      console.log('old age value is ' + oldValues[0]);
      console.log('new age value is ' + newValues[0]);
      console.log('old user name value is ' + oldValues[1]);
      console.log('new user name value is ' + newValues[1]);
    });

    const lastNameInput = ref(null);

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      userName,
      age,
      // userName: user.value.name, // is just a string
      // age: user.value.age, // is just a number
      // userName: userRefs.name,
      // age: userRefs.age,
      // user,
      setAge: setNewAge,
      firstName,
      lastName,
      // setFirstName,
      // setLastName,
      lastNameInput,
      setLastName,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 31,
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   },
  // },
  // computed: {},
  // watch: {
  // age(value) {
  //   if (value > 35) {
  //     const that = this;
  //     setTimeout(function () {
  //       that.age = 30;
  //     }, 3000);
  //   }
  // },
  // },
  // provide() {
  //   return {
  //     age: this.age,
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
