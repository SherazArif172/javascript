const age = 14;
const hasVoterCard = "yes";

if (age >= 18 && hasVoterCard === "yes") {
  console.log("You can vote");
} else if (age >= 18 && hasVoterCard !== "yes") {
  console.log("Apply for a voter card");
} else if (age < 18) {
  console.log("You are not eligible to vote");
}
