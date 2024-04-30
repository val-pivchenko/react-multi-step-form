import React from "react";

const Info = () => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="heading">Personal info</h2>
        <p className="instructions">
          Please provide your name, email address, and phone number.
        </p>
        <div className="input-div">
          <label htmlFor="">Name</label>
          <input placeholder="e.g. Stephen King" type="text" />
        </div>
        <div className="input-div">
          <label htmlFor="">Email Address</label>
          <input placeholder="e.g. stephenking@lorem.com" type="email" />
        </div>
        <div className="input-div">
          <label htmlFor="">Phone Number</label>
          <input placeholder="e.g. +1 234 567 890" type="tel" />
        </div>
      </div>
    </div>
  );
};

export default Info;
