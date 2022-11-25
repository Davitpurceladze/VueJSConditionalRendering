const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      tasks: [],
      taskVisibility: true,
      buttonName: "Hide",
    };
  },
  methods: {
    getInputValue() {
      this.tasks.push(this.enteredValue);
    },
    visibility() {
      this.taskVisibility = !this.taskVisibility;
      if (this.buttonName === "Hide") {
        this.buttonName = "Show";
      } else if (this.buttonName === "Show") {
        this.buttonName = "Hide";
      }
    },
  },
});

app.mount("#assignment");
