import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ContentCreators } from "../../ReduxSlice/creatorsSlice";
import CreatorCard from "../Common/CreatorCard/CreatorCard";

const OurCreatorsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataCount, setDataCount] = useState(8);
  const [title, setTitle] = useState("all");

  const dispatch = useDispatch();
  const { creatorsData } = useSelector((state) => state.creators);
  const [searchData, setSearchData] = useState("");

  const handleSearch = () => {
    if (searchData !== "") {
      navigate(`/search/${searchData}`);
    }
    localStorage.setItem("location", JSON.stringify(location));
  };

  useEffect(() => {
    dispatch(ContentCreators());
  }, []);

  let filteringData;

  if (title !== "all") {
    filteringData = creatorsData.filter(
      (data) => data.creator_category === title
    );
  } else {
    filteringData = creatorsData;
  }

  return (
    <div className="pt-12 bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-28">
      <div className="flex flex-col lg:flex-row items-center w-full lg:w-3/4 p-4 lg:p-0 mx-auto justify-between">
        <div className="w-full">
          <h1 className="text-5xl font-bold text-[#252525] drop-shadow-xl">
            Ut enim ad minima veniam,
            <br /> quis nostrum exercitationem.
          </h1>
          <p className="mt-5 text-[#4B5563]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum.
          </p>
        </div>
        <div className="w-full lg:w-2/4 mt-4 lg:mt-0">
          <div className="border border-[#4B5563] flex items-center rounded-md ">
            <input
              type="text"
              className="border-0 outline-none bg-transparent p-3 px-2 w-5/6"
              placeholder="Search your favourite creator"
              onChange={(e) => setSearchData(e.target.value)}
            />
            <button
              style={{ marginLeft: "auto" }}
              className="pr-2 hover:scale-125 transition"
              onClick={handleSearch}
            >
              <FiSearch style={{ fontSize: "20px", color: "#4B5563" }} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-3/4 mx-auto mt-28 mb-16 text-center flex flex-col lg:flex-row justify-center gap-2">
        <button
          onClick={() => setTitle("all")}
          className={`${
            title === "all" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-5 rounded-md`}
        >
          All Creators
        </button>
        <button
          onClick={() => setTitle("art")}
          className={`${
            title === "art" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-5 rounded-md`}
        >
          Arts and Culture
        </button>
        <button
          onClick={() => setTitle("dance")}
          className={`${
            title === "dance" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-5 rounded-md`}
        >
          Dance
        </button>
        <button
          onClick={() => setTitle("photography")}
          className={`${
            title === "photography" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-5 rounded-md`}
        >
          Photography
        </button>
        <button
          onClick={() => setTitle("entrepreneur")}
          className={`${
            title === "entrepreneur" ? "bg-[#fb7c29] text-white" : ""
          } border py-3 px-5 rounded-md`}
        >
          Entrepreneur
        </button>
      </div>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 w-full p-4 lg:p-0  lg:w-3/4 mx-auto gap-4 mt-10">
        {filteringData.slice(0, dataCount).map((creator) => (
          <CreatorCard key={creator.id} data={creator} />
        ))}
      </div>
      <div className="text-center">
        <button
          className="bg-[#252525] text-white px-6 py-3 rounded-md mt-10"
          onClick={() => setDataCount(dataCount + 4)}
        >
          Discover more creators
        </button>
      </div>
    </div>
  );
};

export default OurCreatorsPage;
