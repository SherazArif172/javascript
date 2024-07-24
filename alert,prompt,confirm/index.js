//alert

alert("error is here ");

// prompt

let age = prompt("put you age");

if (age == null) {
  document.write("age is not full filled");
} else {
  document.write(`your age is ${age}`);
}

//confirm

let confirmed = confirm("are you sure ?");

if (confirmed) {
  document.write("get lost");
}
