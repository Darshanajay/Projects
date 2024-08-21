import React from "react";
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import AddContact from "./Components/AddContact";

const contacts = [
  {
    id: "1",
    sname: "Nithish",
    email: "nithish@gmail.com",
  },
  {
    id: "2",
    sname: "GuruKiran",
    email: "GuruKiran@gmail.com",
  },
];

function App() {
  return (
    <>
      <Header />
      <div className=" ml-4">
        <AddContact />
        <ContactList contacts = {contacts}/>
      </div>
    </>
  );
}

export default App;
