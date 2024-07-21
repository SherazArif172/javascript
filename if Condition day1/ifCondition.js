const age = 14;
const hasVoterCard = "yes";

// Example of building logic by if condition

if (age >= 18 && hasVoterCard === "yes") {
  console.log("You can vote");
} else if (age >= 18 && hasVoterCard !== "yes") {
  console.log("Apply for a voter card");
} else if (age < 18) {
  console.log("You are not eligible to vote");
}

// Nested if condition

if (age <= 13) {
  if (hasVoterCard == "yes") {
    alert("get your voter id card");
  } else {
    alert("apply for voter id card");
  }
} else {
  alert("you can't vote");
}

// Login Logout Example

const loggedin = 1; // if login 1 if logout 0

if (loggedin == 0) {
  document.write("login");
} else {
  document.write("logout");
}

// another way (ternary operator)

let option = loggedin == 1 ? "login" : "logout";
console.log(option);

//nullish coalescing

let user;

user = "sheraz";

alert(user ?? "guest mode");
