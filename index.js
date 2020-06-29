const alert = require("alert");
const open = require("open");
const cpy = require("cpy");

const run = async () => {
  //   for (let i = 1; i < 11; i++) {
  // show user alert
  alert(`Hello this is alert ${i}`);

  // Opens the URL in the default browser.
  await open("http://example.com");

  //open image
  await open("wow-js.jpg");


  //copying files
  await cpy(["*.jpg"], "../output/dist", { rename: `${i}.jpg`, parents: true });
  console.log("Files copied!");
  //   }
};

run();
