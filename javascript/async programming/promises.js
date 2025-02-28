// console.log("Fetching Scores...");

// //a dummy function which will time to complete
// fetchScores(); //fetch score from cricbuzz

// //Print this message after the function
// setTimeout(() => console.log("Fetching DONE"), 2000);

// object which tells us what is the current state of a function or an operation which is not complete yet (an async function).
// The state can be either PENDING, RESOLVED(FULFILLED) or REJECTED.
// When the promise is RESOLVED, it returns the value returned from the function
// When the promise is REJECTED, it returns the error for the rejection

fetch("https://randomuser.me/api")
  .then((response) => {
    return response.json();
  })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log("Something else");
