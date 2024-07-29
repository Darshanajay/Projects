var Umail = document.querySelector("#useMail");
var Upass = document.querySelector("#pass");
var btn = document.querySelector("#btn");
var subdiv = document.querySelector(".cont");
// var added = document.querySelector("#");

const passaccess = (e) => {};

const CheckValid = (e) => {
  e.preventDefault();
  let UmailValue = Umail.value;
  if (UmailValue === "darshanajay60@gmail.com" || Umail === 7411941292) {
  } else if (
    UmailValue !== "darshanajay60@gmail.com" ||
    UmailValue !== 7411941292
  ) {
    window.alert("Incorrect emil or number");
  }

  let UpassValue = Upass.value;
  if (UpassValue === "darshan1234") {
  } else if (UpassValue !== "darshan1234") {
    window.alert("Incorrect Password");
  }

  console.log(UmailValue);
  console.log(UpassValue);

  if (
    UmailValue === "darshanajay60@gmail.com" ||
    (UmailValue === 7411941292 && UpassValue === "darshan1234")
  ) {
    console.log("You are logged in successfully");
    let el = document.createElement("h2");
    el.textContent = "Your added to Darshan's group";

    subdiv.append(el);
  }

  Umail.value = "";
  Upass.value = "";
};

// const finalChick = (e) => {
//   e.preventDefault();
//   if (
//     Umail.value === "darshanajay60@gmail.com" ||
//     (Umail.value === 7411941292 && Upass.value === "darshan1234")
//   ) {
//     let el = document.createElement("h1");
//     el.textContent = "Login Successfull";
//     subdiv.append(el);
//   }
// };
// function add(e) {
//     e.preventDefault();
//   console.log(e);
// }

// btn.onclick = () => {
//   console.log("clicked");
// };
btn.addEventListener("click", CheckValid);
// btn.addEventListener("click", finalChick);
