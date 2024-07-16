import React from "react";
import "./PreviousDonar.css";

const PreviousDonatorCard = ({ data }) => {
  const { donarName, gborAmount, message, isMessageVisible } = data;
  return (
    <>
    
    {
      isMessageVisible &&
      <div className="bg-gradient-to-r from-[#f07360] to-[#ec5961] p-5 rounded-md shadow hover:shadow-lg">
      <h1 className="font-bold text-lg">{donarName}</h1>
      <h2 className="font-bold mt-2 mb-1">Nbre de Gbôr: {gborAmount}</h2>
      <p className="text">{message}</p>
    </div>
    }
    </>
    
  );
};

export default PreviousDonatorCard;
