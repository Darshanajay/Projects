import React from "react";

const ContactList = ({contacts}) => {

  return (
  <>
      <div className=" mt-4 text-2xl">Contact List</div>
      {contacts.map(val=>(
        <p>{val.id}{val.sname}{val.email}</p>
        

      ))}
  </>
)
};

export default ContactList;
