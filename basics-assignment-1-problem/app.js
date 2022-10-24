const app = Vue.createApp({
  data() {
    return {
      name: "Mihai",
      age: 22,
      imgSrc:
        "https://images.unsplash.com/photo-1666126452579-f032d653c7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    };
  },
  methods: {
    getAgeInFiveYears() {
      return this.age + 5;
    },
    getRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
