const EventEmitter = require("events"); //EventEmitter is a class
// const emitter = new EventEmitter();

console.log(__filename);
console.log(__dirname);

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    //Send an HTTP request
    console.log(message);
    this.emit("messageLogger", { id: 1, url: "http://" });
  }
}

// const _log = log;
// export { _log as log };

// module.exports.log = log;

//Object is not required as there is a single function here. Thus export the function
//Object would be useful if there are multiple methods in an object
module.exports = Logger;
