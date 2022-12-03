<template>
  <section>
    <form @submit.prevent="submitData">
      <!-- <label for="name">Name</label> -->
      <input placeholder="Your name" type="text" v-model="enteredName" />
      <!-- <label for="age">Age</label> -->
      <input placeholder="Your age" type="number" v-model.number="enteredAge" />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: {
    "set-data": function (name, age) {
      if (typeof name !== "string" || typeof age !== "number") {
        console.warn("Invalid payload");
        return false;
      }
      if (name.trim().length === 0) {
        console.warn("Invalid name");
        return false;
      }
      if (age < 1) {
        console.warn("Invalid age");
        return false;
      }
      return true;
    },
  },
  date() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>
