// Promises are great alternatives to callbacks, they are called promises because they promise to do a task once a certain task is completed
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
  { title: "Post Three", body: "This is post three" },
];

// Synchronous way of creating and getting posts
// -------------------//
// // function for creating posts
// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// // Function for getting posts
// function getPosts() {
//   setTimeout(function () {
//     output = ``;
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "Post Four", body: "This is post four" });

// Runing getPosts seperatly
// getPosts();

// ----------------------------------------------------------------------------------//
// Asynchronous way of creating and getting posts
// function for creating posts
function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      resolve();
    }, 2000);
  });
}

// Function for getting posts
function getPosts() {
  setTimeout(function () {
    output = ``;
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Four", body: "This is post four" }).then(getPosts);

// A Simple example to understand promises
function DeliveryGuy() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!err) {
        console.log("The promise made by DeliveryGuy has been resolved");
        resolve("Your Package has been delivered");
      } else {
        console.log("The promise made by DeliveryGuy has been resolved");
        reject("Your Package has not been delivered");
      }
    });
}


DeliveryGuy()
  .then(() => {
    console.log("Thanks for delivering the Package");
  })
  .catch(() => {
    console.log("I hope you can deliver the package on time next time");
  });
