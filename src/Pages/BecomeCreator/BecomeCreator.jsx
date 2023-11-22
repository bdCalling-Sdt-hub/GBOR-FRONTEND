import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import img from "../../Images/become-creator.png";
import { Register } from "../../ReduxSlice/registerSlice";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const BecomeCreator = () => {
  const [creator, setCreator] = useState({});
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState();
  const [termCon, setTermCon] = useState(false);
  const { message, isError, isSuccess, isLoading } = useSelector(
    (state) => state.register
  );
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newData = { ...creator };
    newData[name] = value;
    setCreator(newData);
  };

  const differentAgeFromToday = (date) => {
    const birthDate = new Date(date);
    const today = new Date();

    const ageInMilliseconds = today - birthDate;

    const age = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    return age;
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    const formData = new FormData();

    const age = differentAgeFromToday(creator.dateOfBirth);

    if (age <= 18) {
      Swal.fire({
        icon: "warning",
        title: "Something Went Wrong",
        text: "This Site is Intended for Adults (18+)",
        confirmButtonColor: "#ff5252",
        backdrop: `
          #a53c3cb3
          left top`,
      });
      return;
    }

    const value = {
      fName: creator.firstName,
      lName: creator.lastName,
      email: creator.email,
      userName: creator.username,
      dateOfBirth: creator.dateOfBirth,
      password: creator.password,
      confirmPass: creator.confirmPassword,
      uploadId: file,
      creator_category: category,
      termAndCondition: termCon,
    };

    for (let key in value) {
      formData.append(key, value[key]);
    }

    if (
      value.fName !== undefined &&
      value.lName !== undefined &&
      value.email !== undefined &&
      value.userName !== undefined &&
      value.dateOfBirth !== undefined &&
      value.password !== undefined &&
      value.confirmPass !== undefined &&
      value.uploadId !== null &&
      value.creator_category !== undefined
    ) {
      //dispatch here for create creator
      dispatch(Register(formData));

      //  error message
      setError("");
      setFile(null);
      setTermCon(false);
    } else {
      setError("Empty value is not accepted");
      return;
    }
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire(
        "Successfully created",
        "Check your email inbox to verify account",
        "success"
      );
      //dispatch(reset());
      setTermCon(false);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log(message);
      if (message.includes("409")) {
        Swal.fire({
          icon: "error",
          title: "Creator already exists",
          text: "Please choose another email to create account",
          confirmButtonColor: "#fb7c29",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Please try again",
          confirmButtonColor: "#fb7c29",
        });
      }

      setTermCon(false);
    }
  }, [isError]);

  return (
    <>
      <Navbar />
      <div className=" bg-gradient-to-r from-[#f3afaf] to-[#ff9e5f] pb-28 ">
        <div className="w-full lg:w-3/4 mx-auto p-4 lg:p-0">
          <div>
            <h1 className="text-center text-4xl font-bold text-[#252525] p-4 lg:p-0">
              Ut enim ad minima veniam,
              <br /> quis nostrum exercitationem.
            </h1>
            <p className="w-full lg:w-2/4 mx-auto mt-5 text-[#4B5563] text-center p-4 lg:p-0">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum.
            </p>
          </div>
          <div className="grid grid-cols lg:grid-cols-2 gap-6 mt-16">
            <div className="order-2 lg:order-1">
              {!isLoading ? (
                <form onSubmit={handleRegistration}>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      className="border border-black outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
                      placeholder="First Name"
                      name="firstName"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className="border border-black outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
                      placeholder="Last Name"
                      name="lastName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="email"
                      className="border border-black outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className="border border-black outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
                      placeholder="Username"
                      name="username"
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    type="date"
                    className="border border-black outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
                    name="dateOfBirth"
                    onChange={handleChange}
                    placeholder="DD/MM/YYYY"
                    style={{ color: "#a4a6ac" }}
                  />
                  <input
                    type="password"
                    className="border border-black outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                  <input
                    type="password"
                    className="border border-black outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
                    placeholder="Confirm password"
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                  <div className="flex items-center justify-between border border-black outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full select-none hover:border-orange-500">
                    <p
                      className={`${
                        file ? "text-black" : "text-[#a4a6ac]"
                      } w-full`}
                    >
                      {file ? file.name : "Upload your Image"}
                    </p>
                    <div className="w-32 ">
                      <label
                        htmlFor="file"
                        className="bg-[#fb7c29] text-white p-3 rounded-md cursor-pointer h-56"
                      >
                        Browse file
                      </label>
                      <input
                        type="file"
                        className="hidden"
                        name="image"
                        id="file"
                        accept="image"
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>
                  </div>
                  <select
                    id="countries"
                    className="border border-black outline-none mb-2 bg-transparent rounded-md  h-12 px-2 w-full bg-orange-400 focus:ring-orange-500 "
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Type of creator</option>
                    <option value="art">Arts and Culture</option>
                    <option value="dance">Dance</option>
                    <option value="photography">Photography</option>
                    <option value="entrepreneur">Entrepreneur</option>
                  </select>
                  <p className="text-red-500">{error}</p>
                  <div className="mt-3 mb-8">
                    <input
                      type="checkbox"
                      className="hidden"
                      name="termCon"
                      id="term"
                      value={termCon}
                      onChange={() => setTermCon(!termCon)}
                    />
                    <label
                      htmlFor="term"
                      className="cursor-pointer label relative"
                    >
                      I accept the{" "}
                      <Link className="text-orange-500 tracking-wide">
                        terms and conditions
                      </Link>
                    </label>
                  </div>
                  <button
                    className={`${
                      termCon
                        ? "bg-[#fb7c29]"
                        : "bg-orange-400 cursor-not-allowed"
                    } text-white px-4 w-full py-3 rounded-md active:bg-red-500 `}
                    type="submit"
                    disabled={!termCon}
                  >
                    Create Account
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-center h-[100%]">
                  <Spin />
                </div>
              )}
              <p className="text-center mt-6">
                Already have an account?{" "}
                <Link to="/signin" className="text-[#ff7044]">
                  Login
                </Link>
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img width="100%" src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BecomeCreator;
