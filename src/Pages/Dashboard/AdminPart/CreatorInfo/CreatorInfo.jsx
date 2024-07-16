import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Input, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Category } from "../../../../ReduxSlice/categorySlice";
import { ContentCreators } from "../../../../ReduxSlice/creatorsSlice";
import { Register, reset } from "../../../../ReduxSlice/registerSlice";
import CreatorInfoTable from "./CreatorInfoTable";
const { Title, Text } = Typography;

const CreatorInfo = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [creator, setCreator] = useState({});
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState();
  const { message, isSuccess, isLoading, isError } = useSelector(
    (state) => state.register
  );
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [reload, setReload] = useState(1);
  const [searchData, setSearchData] = useState("");
  const { categoryLists } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(Category());
  }, [dispatch]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newData = { ...creator };
    newData[name] = value;
    setCreator(newData);
  };

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  const handlePagination = (page) => {
    const data = {
      search: searchData,
      limit: 12,
      page: page,
    };
    dispatch(ContentCreators(data));
  };

  const handleSearch = (page) => {
    const data = {
      search: searchData,
      limit: 12,
      page: page,
    };
    if (searchData !== "") {
      dispatch(ContentCreators(data));
    }
  };

  useEffect(() => {
    const data = {
      search: searchData,
      limit: 12,
      page: 1,
    };
    if (searchData === "") {
      dispatch(ContentCreators(data));
    }
  }, [searchData, reload]);

  const handleRegistration = (e) => {
    e.preventDefault();
    const formData = new FormData();

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
    } else {
      setError("Empty value is not accepted");
      return;
    }
  };

  useEffect(() => {
    if (isSuccess) {
      Swal.fire(
        "Successfully created",
        "Send verify link to creator  email",
        "success"
      );
      dispatch(reset());
      setIsDrawerVisible(false);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
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
    }
  }, [isError]);

  return (
    <div style={{ padding: "0px 60px" }}>
      <h2
        style={{ fontSize: "25px", marginBottom: "10px", fontWeight: "normal" }}
      >
        Search Creator
      </h2>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Input
          prefix={<CiSearch style={{ fontSize: "18px" }} />}
          style={{ height: "50px", borderColor: "#fb7c29" }}
          placeholder="Search by Name"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <Button
          onClick={handleSearch}
          style={{
            background: "#fb7c29",
            color: "white",
            height: 50,
            width: "180px",
            border: 0,
          }}
        >
          Search
        </Button>
      </div>

      <div className="flex  items-center justify-between mt-10 mb-4">
        <h2
          style={{
            fontSize: "25px",

            fontWeight: "normal",
          }}
        >
          Creators List
        </h2>
        <button
          className="bg-[#fb7c29] text-white px-4 font-medium py-3 rounded flex items-center gap-1 text-md"
          onClick={showDrawer}
        >
          Add Creator <AiOutlineUserAdd fontSize={20} />
        </button>
      </div>
      <CreatorInfoTable
        setReload={setReload}
        handlePagination={handlePagination}
        handleSearch={handleSearch}
      />
      {/* creator create drawer */}
      <Drawer
        title={
          <div>
            <Typography>
              <Title level={5} style={{ color: "white" }} strong>
                Add New Creator
              </Title>
              <Text style={{ color: "white" }}>Create a new creator ID</Text>
            </Typography>
          </div>
        }
        headerStyle={{ background: "#fb7c29", color: "#fff" }}
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        width={600}
        closable={false}
        extra={
          <Space>
            <Button
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "100%",
                backgroundColor: "#f5f5f5",
                color: "#fb7c29",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={closeDrawer}
            >
              <CloseOutlined />
            </Button>
          </Space>
        }
      >
        <form onSubmit={handleRegistration}>
          <input
            type="text"
            className="border border-gray-300 outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
          />
          <input
            type="text"
            className="border border-gray-300 outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
          />

          <input
            type="email"
            className="border border-gray-300 outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            className="border border-gray-300 outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />

          <input
            type="date"
            className="border border-gray-300 outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
            name="dateOfBirth"
            onChange={handleChange}
            placeholder="DD/MM/YYYY"
            style={{ color: "#a4a6ac" }}
          />
          <input
            type="password"
            className="border border-gray-300 outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <input
            type="password"
            className="border border-gray-300 outline-none mb-2 bg-transparent rounded-md h-12 px-2 w-full focus:border-orange-500"
            placeholder="Confirm password"
            name="confirmPassword"
            onChange={handleChange}
          />
          <div className="flex items-center justify-between border border-gray-300 outline-none mb-4 bg-transparent rounded-md p-3 px-2 w-full select-none hover:border-orange-500">
            <p className={`${file ? "text-black" : "text-[#a4a6ac]"}`}>
              {file ? file.name : "Upload your Image"}
            </p>
            <div>
              <label
                htmlFor="file"
                className="bg-[#fb7c29] text-white p-3 rounded-md cursor-pointer"
              >
                Browse file
              </label>
              <input
                type="file"
                className="hidden"
                name="image"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>

          <select
            id="countries"
            className="border border-gray-300 outline-none mb-2 bg-transparent rounded-md  h-12 px-2 w-full bg-orange-400 focus:ring-orange-500 "
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Type of creator</option>
            {categoryLists.map((category) => (
              <option
                className="mt-2"
                key={category.categoryName}
                value={category.categoryName}
              >
                {category.categoryName.charAt(0).toUpperCase() +
                  category.categoryName.slice(1)}
              </option>
            ))}
          </select>
          <p className="text-red-500">{error}</p>
          <div
            style={{
              position: "absolute",
              bottom: 10,
            }}
          >
            <button
              className="bg-[#fb7c29] text-white px-4  py-3 rounded-md hover:bg-red-500 "
              type="submit"
              style={{ width: "555px" }}
            >
              Create Account
            </button>
          </div>
        </form>
      </Drawer>
    </div>
  );
};

export default CreatorInfo;
