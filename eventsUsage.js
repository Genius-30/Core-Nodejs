import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log(`Hello, ${name}!`);
}

function goodbyeHandler(name) {
  console.log(`Goodbye, ${name}!`);
}

// Registering the event listeners
myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emitting the events
myEmitter.emit("greet", "John");
myEmitter.emit("goodbye", "John");

// Error event
myEmitter.on("error", (err) => {
  console.error("An error occurred:", err);
});

// Simulating an error
myEmitter.emit("error", new Error("Something went wrong"));

// Removing the event listener
myEmitter.off("greet", greetHandler);

// Real world example
// Event handler for 'login'
const loginHandler = (username) => {
  console.log(`${username} has logged in.`);
};

// Event handler for 'logout'
const logoutHandler = (username) => {
  console.log(`${username} has logged out.`);
};

// Adding event listeners
myEmitter.on("login", loginHandler);
myEmitter.on("logout", logoutHandler);

// Emitting events
myEmitter.emit("login", "Alice");
myEmitter.emit("logout", "Alice");

// Error event
myEmitter.on("error", (err) => {
  console.error("An error occurred:", err);
});

// Simulating an error
myEmitter.emit("error", new Error("Login failed"));

// Removing the event listener
myEmitter.off("login", loginHandler);

// Trying to emit 'login' event after removing the listener
myEmitter.emit("login", "Bob"); // This will not trigger the loginHandler
