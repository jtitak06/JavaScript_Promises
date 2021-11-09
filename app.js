console.log("Hello World!\n==========\n");
function watchTurorialCallback(callback, errorCallback) {
    let userLeft = false;
    let userWatchingLiveStream = true;
  
    if (userLeft) {
      errorCallback({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingLiveStream) {
      callback("Thumbs up and Subscribe");
    }
  }
  
  watchTurorialCallback(
    (message) => {
      console.log(message);
    },
    (error) => {
      console.log(error.name + " " + error.message);
    }
  );  


// Exercise 1 Section
let watching = new Promise((resolve, reject) => {
    let userWatchingLiveStream = false;

    if (userWatchingLiveStream) {
        resolve("Subscribe.");
    } else {
        reject("User left.");
    }
});

watching
.then((result) => console.log(result))
.catch((error) =>console.log(error));

console.log("EXERCISE 1:\n==========\n");
