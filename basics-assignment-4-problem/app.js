const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      isVisible: true,
      backgroundColor: "",
    };
  },
  methods: {
    addClass(event) {
      this.userInput = event.target.value;
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
    setBackgroundColor(event) {
      this.backgroundColor = event.target.value;
    },
  },
  computed: {
    pClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
  },
});

app.mount("#assignment");
