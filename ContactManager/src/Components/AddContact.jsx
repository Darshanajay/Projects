import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <>
        <div className="mt-4 pt-2">
          <h2 className=" text-4xl font-medium">Add Contact</h2>
          <div className=" mt-6 ">
          <form >
          <div className="field">
                <label className=" text-2xl">Name</label><br />
                <input type="text" name="name" placeholder="Name" className=" py-2 rounded px-5 border w-1/2 mt-2 mb-4"/>
            </div>
            <div className="field">
                <label className=" text-2xl">Email</label><br />
                <input type="text" name="name" placeholder="Email" className=" py-2 px-5 border w-1/2 mt-2 mb-4 rounded"/>
            </div>
            <button className=" bg-blue-400 text-white py-2 px-6 rounded font-semibold text-2xl">Add</button>
          </form>
          </div>
        </div>
      </>
    );
  }
}

export default AddContact;
