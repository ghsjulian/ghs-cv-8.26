import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { VscErrorCompact } from "react-icons/vsc";

const Popup = ({ type }) => {
  return (
    <div className="full-page">
      {type ? (
        <>
          <IoMdCheckmarkCircleOutline size={50} color="#02a518" />
          <h3 className="success">
            Your Contact Message Has Been Submitted Successfully !
          </h3>
        </>
      ) : (
        <>
          <VscErrorCompact size={50} color="#e04402" />
          <h3 className="error">Failed To Send Contact Message !</h3>
        </>
      )}
    </div>
  );
};

export default Popup;
