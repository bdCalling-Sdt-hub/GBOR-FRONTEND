/* eslint-disable no-unused-vars */
import { MenuOutlined, SettingOutlined } from "@ant-design/icons";
import {
  Badge,
  Button,
  Divider,
  Dropdown,
  Layout,
  Menu,
  Select,
  theme,
} from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiMessageDots, BiTransfer, BiUser } from "react-icons/bi";
import { FaPeopleLine } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import { IoIosNotificationsOutline, IoIosPeople } from "react-icons/io";
import { PiImage, PiSignOutThin } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import colors from "../../Constant/colors.jsx";
import GBORLOGO from "../../Images/GBORLOGO.png";
import Styles from "./Dashboard.module.css";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

const items = [...Array(5).keys()].map((item, index) => {
  return {
    key: index,
    label: (
      <Link to="/dashboard/notification" style={{}} rel="noreferrer">
        <div
          className={Styles.everyNotify}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{
              backgroundColor: "#d9cffb",
              borderRadius: "100%",
              padding: "5px",
              marginRight: "15px",
            }}
            width="30"
            height="30"
            src="https://img.icons8.com/3d-fluency/94/person-male--v2.png"
            alt="person-male--v2"
          />
          <div className="" style={{ marginTop: "" }}>
            <p>
              <span>Sanchej haro manual </span>started a new trip from mexico.
            </p>
            <span style={{ color: "#d2d2d2" }}>1 hr ago</span>
          </div>
        </div>
      </Link>
    ),
  };
});

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.lang || "en"
  );
  const location = useLocation();
  const { identity, userInfo } = JSON.parse(localStorage.yourInfo);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [t, i18n] = useTranslation("global");

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout from here!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fb7c29",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("yourInfo");

        navigate("/signin");
      } else if (result.isDenied) {
        Swal.fire("Ok", "", "info");
      }
    });
  };

  const profileItems = [
    {
      key: 1,
      label: (
        <Link
          to="/dashboard/setting/personal-information"
          className="flex items-center gap-2 text-lg"
          style={{ padding: "0px" }}
        >
          <BiUser color="#fb7c29" fontSize={20} />
          Profile
        </Link>
      ),
    },
    {
      key: 2,
      label: (
        <Link
          to="/dashboard/notification"
          className="flex items-center gap-2 text-lg"
        >
          <IoIosNotificationsOutline color="#fb7c29" fontSize={20} />
          Notification
        </Link>
      ),
    },
    {
      key: 3,
      label: (
        <div onClick={logout} className="flex items-center gap-2 text-lg">
          <PiSignOutThin color="#fb7c29" fontSize={20} />
          Logout
        </div>
      ),
    },
  ];

  const handleSelectLanguage = (value) => {
    setSelectedLanguage(value);
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("lang", value);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const menu = (
    <Menu>
      <Menu.Item disabled>
        <h2
          style={{
            color: "#fb7c29",
            fontWeight: "500",
            borderBottom: "1px solid #e6e7f4",
            paddingBottom: "20px",
          }}
        >
          Notifications
        </h2>
        {/* <span style={{ fontWeight: 'bold', color: '#000' }}>Notifications</span> */}
      </Menu.Item>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "15px",
        }}
      >
        <Button
          type="primary"
          block
          style={{
            height: "50px",
            backgroundColor: "#e6e7f4",
            color: "#fb7c29",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <Link to="/dashboard/notification">See all</Link>
        </Button>
      </div>
    </Menu>
  );

  const breadCrumb = [
    {
      path: "/dashboard",
      title: "Dashboard",
    },
    {
      path: "/dashboard/message",
      title: "Message",
    },
    {
      path: "/dashboard/donar-list",
      title: "Donar List",
    },
    {
      path: "/dashboard/earning/today-income",
      title: "Earnings",
    },
    {
      path: "/dashboard/earning/weekly-income",
      title: "Earnings",
    },
    {
      path: "/dashboard/earning/monthly-income",
      title: "Earnings",
    },
    {
      path: "/dashboard/creator-info",
      title: "Creator Information",
    },
    {
      path: "/dashboard/creator-request",
      title: "Creator Information",
    },
    {
      path: "/dashboard/transaction",
      title: "Transaction",
    },
    {
      path: "/dashboard/banner",
      title: "Banner",
    },
    {
      path: "/dashboard/notification",
      title: "Notification",
    },
    {
      path: "/dashboard/setting",
      title: "Settings",
    },
    {
      path: "/dashboard/setting/personal-information",
      title: "Settings",
    },
    {
      path: "/dashboard/setting/login-activity",
      title: "Settings",
    },
    {
      path: "/dashboard/setting/privacy-policy",
      title: "Settings",
    },
    {
      path: "/dashboard/setting/terms-condition",
      title: "Settings",
    },
    {
      path: "/dashboard/setting/about-us",
      title: "Settings",
    },
  ];

  const dashboardBreadCrumb = breadCrumb.find(
    (path) => path.path === location.pathname
  );

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider
        width="313px"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          position: "fixed",
          height: "100vh",
          zIndex: 2,
          backgroundColor: colors.primaryColor,
        }}
      >
        <div className="demo-logo-vertical" />
        <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <img
            src={GBORLOGO}
            height={collapsed ? "40px" : "150px"}
            width={collapsed ? "40px" : "150px"}
          />
        </div>

        <Menu
          style={{
            padding: collapsed ? "0px" : "20px",
            border: "none",
            backgroundColor: colors.primaryColor,
            color: "white",
          }}
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1" icon={<FiMonitor style={{ fontSize: "20px" }} />}>
            <Link to="/dashboard" style={{ fontSize: "16px" }}>
              {t("dashboard")}
            </Link>
          </Menu.Item>
          <Divider style={{ backgroundColor: "white" }} />
          {identity && (
            <Menu.Item
              key="2"
              icon={<BiMessageDots style={{ fontSize: "20px" }} />}
            >
              <Link to="/dashboard/message" style={{ fontSize: "16px" }}>
                {t("Message")}
              </Link>
            </Menu.Item>
          )}

          <SubMenu
            style={{ fontSize: "16px" }}
            key="2"
            icon={<AiOutlineDollarCircle style={{ fontSize: "20px" }} />}
            title={t("earning.title")}
          >
            <Menu.Item key="31">
              <Link to="/dashboard/earning/today-income">
                {t("earning.subTitle1")}
              </Link>
            </Menu.Item>
            <Menu.Item key="32">
              <Link to="/dashboard/earning/weekly-income">
                {t("earning.subTitle2")}
              </Link>
            </Menu.Item>
            <Menu.Item key="33">
              <Link to="/dashboard/earning/monthly-income">
                {t("earning.subTitle3")}
              </Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item
            key="50"
            icon={<IoIosPeople style={{ fontSize: "20px" }} />}
          >
            <Link to="/dashboard/donar-list" style={{ fontSize: "16px" }}>
              {t("Donar List")}
            </Link>
          </Menu.Item>

          {identity && (
            <SubMenu
              style={{ fontSize: "16px" }}
              key="4"
              icon={<FaPeopleLine style={{ fontSize: "20px" }} />}
              title={t("hostInfo.title")}
            >
              <Menu.Item key="39">
                <Link to="/dashboard/creator-info">
                  {t("hostInfo.subTitle1")}
                </Link>
              </Menu.Item>
              <Menu.Item key="40">
                <Link to="/dashboard/creator-request">
                  {t("hostInfo.subTitle2")}
                </Link>
              </Menu.Item>
            </SubMenu>
          )}

          <Menu.Item key="5" icon={<BiTransfer style={{ fontSize: "20px" }} />}>
            <Link to="/dashboard/transaction" style={{ fontSize: "16px" }}>
              {t("Transaction")}
            </Link>
          </Menu.Item>

          {identity && (
            <Menu.Item key="9" icon={<PiImage style={{ fontSize: "20px" }} />}>
              <Link to="/dashboard/banner" style={{ fontSize: "16px" }}>
                {t("Banner")}
              </Link>
            </Menu.Item>
          )}

          <Menu.Item
            key="90"
            icon={<SettingOutlined style={{ fontSize: "20px" }} />}
          >
            <Link to="/dashboard/setting" style={{ fontSize: "16px" }}>
              {t("setting.title")}
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100vw",
            height: "80px",
            zIndex: 1,
            padding: 0,
            background: colorBgContainer,
            borderBottom: `2px solid ${colors.primaryColor}`,
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "60px",
          }}
        >
          <div
            className=""
            style={{ display: "flex", alignItems: "center", gap: "2px" }}
          >
            <Button
              type="text"
              icon={
                collapsed ? (
                  <MenuOutlined style={{ color: "#fb7c29" }} size={25} />
                ) : (
                  <MenuOutlined style={{ color: "#fb7c29" }} size={25} />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              style={{
                marginLeft: collapsed ? "125px" : "360px",
                width: 45,
                height: 45,
                fontSize: "12px",
              }}
            />
            {
              <h2 className="text-xl font-medium text-[#fb7c29] tracking-wide">
                {/* {t("header.title")} */}
                {dashboardBreadCrumb?.title}
              </h2>
            }
          </div>

          <div
            className={Styles.notificatonProfileSection}
            style={{ display: "flex", alignItems: "center", lineHeight: 0 }}
          >
            <div className="" style={{ marginRight: "30px" }}>
              <Select
                value={selectedLanguage}
                style={{ width: 150 }}
                onChange={handleSelectLanguage}
              >
                <Option value="en">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg"
                      alt="English"
                      style={{ marginRight: 8, width: 16, height: 16 }}
                    />
                    English
                  </div>
                </Option>
                <Option value="es">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://e0.pxfuel.com/wallpapers/630/608/desktop-wallpaper-spain-flag-in-collection.jpg"
                      style={{ marginRight: 8, width: 16, height: 16 }}
                    />
                    Spanish
                  </div>
                </Option>
              </Select>
            </div>
            <div className={Styles.notificaton} style={{ marginRight: "20px" }}>
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: true,
                }}
                trigger={["click"]}
              >
                <Button
                  type="text"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Badge count={1} color="#fb7c29">
                    <IoIosNotificationsOutline
                      className="cursor-pointer"
                      fontSize={35}
                      color="#fb7c29"
                    />
                  </Badge>
                </Button>
              </Dropdown>
            </div>
            {!identity && (
              <div style={{ marginRight: "20px" }}>
                <Button
                  type="text"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Badge dot={show} color="#fb7c29">
                    <RiMessage2Line
                      className="cursor-pointer"
                      fontSize={30}
                      color="#fb7c29"
                    />
                  </Badge>
                </Button>
              </div>
            )}
            <div>
              <Dropdown
                menu={{
                  items: profileItems,
                }}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: true,
                }}
                trigger={["click"]}
              >
                <img
                  style={{
                    cursor: "pointer",
                    borderRadius: "100%",
                    height: "40px",
                    width: "40px",
                  }}
                  className="border-2 drop-shadow-sm border-orange-400"
                  src={userInfo.uploadId}
                  alt="admin-image"
                />
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          style={{
            marginTop: "120px",
            marginBottom: "50px",
            marginLeft: collapsed ? "130px" : "360px",
            marginRight: "60px",
            background: "white",

            padding: 50,
            minHeight: 280,
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
