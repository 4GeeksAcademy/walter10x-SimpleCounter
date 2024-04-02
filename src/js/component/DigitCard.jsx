import React from "react";

const DigitCard = ({ value, icon }) => {
  return (
    <div className="card digit-card">
      <div className="card-body">
        <i
          className={icon}
          style={{ fontSize: "54px", marginLeft: "-6px" }}
        ></i>
        {value}
      </div>
    </div>
  );
};

export default DigitCard;
