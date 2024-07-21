let input;

input = "n";

// if (input === 1) {
//   document.write("continue...");
// } else if (input === "y") {
//   document.write("continue...");
// } else if (input === "yes") {
//   document.write("continue...");
// } else if (input === 0) {
//   document.write("end...");
// } else if (input === "n") {
//   document.write("end...");
// } else if (input === "no") {
//   document.write("end...");
// } else {
//   document.write("wrong entery");
// }

// all above by switch condition

switch (input) {
  case 1:
  case "y":
  case "yes":
    document.write("continue...");
    break;
  case 0:
  case "n":
  case "no":
    document.write("end...");
    break;
  default:
    document.write("wrong entery");
}
