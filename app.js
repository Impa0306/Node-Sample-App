//import logger from "./logger";

function sayHello(name) {
  console.log("My name is ", name);
}

sayHello("Impa");

// console.log(window);

//Globally available objects in Node - below belongs to window object / global object in node
// console.log();

// setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();

// const message = "Hello";
// console.log(global.message);

console.log(module);

// const logger = require("./logger");
//console.log(logger);

// logger = 1; //To avoid the exception due to overwrting the imported module, declare as const

// logger.log("The message is logged!");

// logger("The message is logged!");

//Built-in modules
const path = require("path");
var pathObj = path.parse(__filename);

console.log(pathObj);

/**
 * Operating System
 */
const os = require("os");
var osTotalMem = os.totalmem();
var osFreeMem = os.freemem();

// console.log('Total Memory :'+ osFreeMem);
//New featured added in ES6/ECMAScript 6 - using Template string as below
console.log(`Total Memory : ${osTotalMem}`);
console.log(`Free Memory : ${osFreeMem}`);

/**
 * File System
 */
const fs = require("fs");
// const files = fs.readdirSync("./");

// console.log(files);

const asyncFiles = fs.readdir("./", function(err, files) {
  if (err) console.log(err);
  else console.log("Result", files);
});

/**
 * Events
 */
const EventEmitter = require("events"); //EventEmitter is a class
// const emitter = new EventEmitter();

//Raise an event
// emitter.emit("messageLogger", { id: 1, url: "http://" }); //Sending a signal that event has happened

const Logger = require("./logger");
const logger = new Logger();

//Register a listener
logger.on("messageLogger", function(arg) {
  //Event arguments
  //Also previously used method - emitter.addListener()
  console.log("Listener called!", arg);
});

logger.log("message");

/**
 * HTTP Module
 */
const http = require("http");

//create a web server. It ia an object of EventEmitter.
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }
  //Other samples
  if (req.url === "./api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
//Register a listener - below is the older way
// server.on("connection", socket => {
//   console.log("New connection");
// });

server.listen(3000);

console.log("Listening on port 3000...");
