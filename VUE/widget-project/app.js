const app = Vue.createApp({
    data() {
        return {
            message: "Hello, Vue.js!",
            number: 0,
            showMessage: true,
            showNumber: true,
            x: 0,
            y: 0,
            showPeople: true,
            people: [
                { name: "Alice", age: 25, isEmployed: true },
                { name: "Bob", age: 30, isEmployed: false },
                { name: "Charlie", age: 28, isEmployed: false },
                { name: "David", age: 32, isEmployed: true },
                { name: "Eve", age: 27, isEmployed: false }
            ],
            url: "https://google.com"
        };
    },
    methods: {
        changeMessage(message) {
            this.message = message;
        },
        toggleShowMessage() {
            this.showMessage = !this.showMessage;
        },
        toggleShowNumber() {
            this.showNumber = !this.showNumber;
        },
        handleEvent(event) {
            console.log(event, event.type, event.data, event.target);
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        toggleEmployed(person) {
            person.isEmployed =!person.isEmployed;
        }
    },
    computed: {
        filteredPeople() {
            return this.people.filter((person) => person.isEmployed);
        }
    }
});
app.mount("#app");