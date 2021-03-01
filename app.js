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

// -------------------------------------------------------------------

// Example Two

// Create a promise function that adds to number, if the answer is correct, then appreciate it other wise tell it to go home
let addNumbers = new Promise((resolve, reject) => {
  let operation = 2 + 0;
  if (operation == 2) {
    resolve("Success, added two numbers succesfuly");
  } else {
    reject("Failed, wrong answer!");
  }
});

// appreciating the promise when it gets the correct answer
addNumbers
  .then((message) => {
    console.log("Thanks a lot");
    // Telling the promise to go home if it fails to give me the correct answer
  })
  .catch(() => {
    console.log("Go Home!");
  });

// -------------------------------------------------------------------

// Exmaple Three
let userWatchingDevEd = true;
let userWatchingDennis = false;

const watchTutorialPromise = new Promise((resolve, reject) => {
  if (userWatchingDevEd) {
    reject({
      name: "User is watching Dev Ed",
      message: "He thinks Ed is better than me in js",
    });
  } else if (userWatchingDennis) {
    reject({
      name: "User is watching Dennis",
      messgae: "He thinks Dennis is better than me in Django",
    });
  } else {
    resolve(console.log("Hooray, I am bette than both Dennis and Ed"));
  }
});

watchTutorialPromise()
  .then((message) => {
    console.log(`Success: ${message}`);
  })
  .cath((error) => {
    console.log(`${error.name} ${error.message}`);
  });
