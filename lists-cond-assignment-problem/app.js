const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredText: "",
      isHide: false,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredText);
      this.enteredText = "";
    },
    toggleHide() {
      this.isHide = !this.isHide;
    },
  },
});

app.mount("#assignment");
