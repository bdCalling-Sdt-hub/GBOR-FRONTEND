import React, { useEffect, useState } from "react";
import CreatorCard from "../../Common/CreatorCard/CreatorCard";

const Creators = () => {
  const [dataCount, setDataCount] = useState(4);
  const [title, setTitle] = useState("all");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./fakeDB.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  let filteringData;

  if (title !== "all") {
    filteringData = data.filter((data) => data.title === title);
  } else {
    filteringData = data;
  }

  return (
    <div className="bg-gradient-to-r from-[#f7bcbc] to-[#ff9e5f] pb-28 text-center">
      <h1 className="w-3/4 mx-auto text-center text-5xl font-bold pb-4">
        Our Creators
      </h1>
      <div className="w-3/4 mx-auto mt-10 text-center flex flex-col md:flex-row justify-center gap-2">
        <button
          onClick={() => setTitle("all")}
          className={`${
            title === "all" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-2 md:px-5 rounded-md`}
        >
          All Creators
        </button>
        <button
          onClick={() => setTitle("art")}
          className={`${
            title === "art" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-2 md:px-5 rounded-md`}
        >
          Arts and Culture
        </button>
        <button
          onClick={() => setTitle("dance")}
          className={`${
            title === "dance" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-2 md:px-5 rounded-md`}
        >
          Dance
        </button>
        <button
          onClick={() => setTitle("photography")}
          className={`${
            title === "photography" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-2 md:px-5 rounded-md`}
        >
          Photography
        </button>
        <button
          onClick={() => setTitle("entrepreneur")}
          className={`${
            title === "entrepreneur" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-2 md:px-5 rounded-md`}
        >
          Entrepreneur
        </button>
      </div>
      <div className="grid grid-cols md:grid-cols-4 w-full p-4 md:p-0 md:w-3/4 mx-auto gap-4 mt-10">
        {filteringData.slice(0, dataCount).map((creator) => (
          <CreatorCard key={creator.id} data={creator} />
        ))}
      </div>
      <button
        className="bg-[#252525] text-white px-6 py-3 rounded-md mt-10 hover:bg-[#fb7c29] transition"
        onClick={() => setDataCount(dataCount + 4)}
      >
        Discover more creators
      </button>
    </div>
  );
};

export default Creators;
