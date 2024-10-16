console.log("Hello World");

// This callback is pushed to the callstack only when the Global Execution Context is completed
// Means when call stack is empty
setTimeout(() => {
  console.log("Print is right now");
}, 0);

setTimeout(() => {
  console.log("Print is after 3 seconds");
}, 3000);

console.log("End of sync code");
