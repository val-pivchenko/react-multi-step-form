/* eslint-disable react/prop-types */
import React from "react";

const Buttons = ({ firstPage, lastPage }) => {
  return (
    <div
      className={
        firstPage ? "btn-end-position buttons-container" : "buttons-container"
      }
    >
      {!firstPage && <button className="back-btn">Go Back</button>}
      <button className={lastPage ? "confirm-btn" : "next-btn"}>
        {lastPage ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default Buttons;
