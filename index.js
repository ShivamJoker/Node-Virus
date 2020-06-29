const alert = require("alert");
const open = require("open");
const cpy = require("cpy");
const brightness = require("brightness");
const robot = require("robotjs");

const run = async () => {
  // show user alert
  // alert(`Hello this is alert ${i}`);

  // // Opens the URL in the default browser.
  // await open("http://example.com");

  // // open image
  // await open("wow-js.jpg");

  // // copying files
  // await cpy(["*.jpg"], "../output/dist", { rename: `${i}.jpg`, parents: true });
  // console.log("Files copied!");

  // // change brightness to 0
  // await brightness.set(0);

  // moveMouse()

  lockMac();
};

const moveMouse = () => {
  // Speed up the mouse.
  robot.setMouseDelay(2);

  var twoPI = Math.PI * 2.0;
  var screenSize = robot.getScreenSize();
  var height = screenSize.height / 2 - 10;
  var width = screenSize.width;

  for (var x = 0; x < width; x++) {
    y = height * Math.sin((twoPI * x) / width) + height;
    robot.moveMouse(x, y);
  }
};

setTimeout(() => {
  robot.keyTap("q", ["command", "control"]);
}, 2000);

const lockMac = () => {
  robot.keyTap("Q", ["command", "control"]);
};

// run();
