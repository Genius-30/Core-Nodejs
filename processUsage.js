//argv: argument vector
console.log(process.argv);
console.log(process.argv[2]);

// In the terminal, run the following command:
// node processUsage.js hello
// Output:
// [ 'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\User\\Desktop\\nodejs\\processUsage.js',
//   'hello' ]
// hello

// process.env: environment variables
console.log(process.env);

// process.pid: process id
console.log(process.pid);

// process.uptime(): number of seconds the current Node.js process has been running
console.log(process.uptime());

// process.cwd(): current working directory
console.log(process.cwd());

// process.memoryUsage(): memory usage of the Node.js process
console.log(process.memoryUsage());

// process.title: process title
console.log(process.title);

// process.on(): listen for events
// the code param here comes from the process.exit(code) method
process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

// process.exit(): exit the process
process.exit(0);

// The following code will not be executed
console.log("This will not be printed");
