import { Col, Row } from "antd";
import React from "react";
import "./DashboardHome.css";

import { HiOutlineCurrencyDollar } from "react-icons/hi";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import InvoiceTable from "./InvoiceTable";

import "swiper/css";
import "swiper/css/pagination";

function DashboardHome() {
  const contentStyle = {
    height: "400px",
    width: "100%",
    borderRadius: "15px",
  };

  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  return (
    <div>
      <Row style={{ marginBottom: 30 }}>
        <Col>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            style={contentStyle}
          >
            <SwiperSlide>
              <img
                style={contentStyle}
                src="https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hnck0391.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={contentStyle}
                src="https://cyberplexafrica.com/wp-content/uploads/2017/02/slider-img1.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginBottom: "20px" }}>
        <Col
          className="gutter-row"
          style={{ marginBottom: "10px" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <div className="bg-[#fb7c29] p-8 text-center flex flex-col items-center rounded-md space-y-4 text-white select-none">
            <HiOutlineCurrencyDollar
              style={{ width: "28px", height: "28px" }}
            />
            <h1 className="text-2xl">Today's income</h1>
            <h3 className="text-2xl">$ 250.00</h3>
          </div>
        </Col>
        <Col
          className="gutter-row"
          style={{ marginBottom: "10px" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <div className="bg-[#fb7c29] p-8 text-center flex flex-col items-center rounded-md space-y-4 text-white select-none">
            <HiOutlineCurrencyDollar
              style={{ width: "28px", height: "28px" }}
            />
            <h1 className="text-2xl">Weekly income</h1>
            <h3 className="text-2xl">$ 250.00</h3>
          </div>
        </Col>
        <Col
          className="gutter-row"
          style={{ marginBottom: "10px" }}
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <div className="bg-[#fb7c29] p-8 text-center flex flex-col items-center rounded-md space-y-4 text-white select-none">
            <HiOutlineCurrencyDollar
              style={{ width: "28px", height: "28px" }}
            />
            <h1 className="text-2xl">Monthly income</h1>
            <h3 className="text-2xl">$ 250.00</h3>
          </div>
        </Col>
      </Row>
      {/* 
    <Row gutter={16}>
      <Col className="gutter-row" style={{marginBottom:"10px"}} xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:6}}>
         <div  className='rent-status' style={{backgroundColor:"#fff"}}>
            <MdCarRental style={{fontSize:"1.5rem",color:"#fb7c29"}}/>
            <div className='single-status'>
                <h2 style={{fontSize:"1.5rem",fontWeight:"600",marginTop:"10px",marginBottom:"10px",color:"#fb7c29"}}>Today's Rent</h2>
                <h3 style={{fontSize:"1.5rem",letterSpacing:"1px",color:"gray"}}>32</h3>
            </div>
            
         </div>
      </Col>
      <Col className="gutter-row" style={{marginBottom:"10px"}} xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:6}}>
      <div  className='rent-status' style={{backgroundColor:"#fff"}}>
            <GrHistory style={{fontSize:"1.5rem",color:"#fb7c29"}}/>
            <div className='single-status'>
                <h2 style={{fontSize:"1.5rem",fontWeight:"600",marginTop:"10px",marginBottom:"10px",color:"#fb7c29"}}>Pendings</h2>
                <h3 style={{fontSize:"1.5rem",letterSpacing:"1px",color:"gray"}}>40</h3>
            </div>
            
         </div>
      </Col>
      <Col className="gutter-row" style={{marginBottom:"10px"}} xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:6}}>
      <div  className='rent-status' style={{backgroundColor:"#fff"}}>
            <SlRefresh style={{fontSize:"1.5rem",color:"#fb7c29"}}/>
            <div className='single-status'>
                <h2 style={{fontSize:"1.5rem",fontWeight:"600",marginTop:"10px",marginBottom:"10px",color:"#fb7c29"}}>Ongoing</h2>
                <h3 style={{fontSize:"1.5rem",letterSpacing:"1px",color:"gray"}}>103</h3>
            </div>
            
         </div>
      </Col>
      <Col className="gutter-row" style={{marginBottom:"10px"}} xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:6}}>
        <div className='rent-status' style={{backgroundColor:"#fff"}}>
            <BsFillCheckCircleFill style={{fontSize:"1.5rem",color:"#fb7c29"}}/>
            <div className='single-status'>
                <h2 style={{fontSize:"1.5rem",fontWeight:"600",marginTop:"10px",marginBottom:"10px",color:"#fb7c29"}}>Complete</h2>
                <h3 style={{fontSize:"1.5rem",letterSpacing:"1px",color:"gray"}}>562</h3>
            </div>
            
         </div>
      </Col>
    </Row> */}

      {/* <Row style={{ marginTop: "20px" }} gutter={24}>
        <Col lg={{ span: 12 }}>
          <DailyRentChart />
        </Col>
        <Col lg={{ span: 12 }}>
          <div
            className=""
            style={{
              border: "3px solid #fb7c29",
              padding: "30px",
              borderRadius: "15px",
              backgroundColor: "#fff",
            }}
          >
            <h1 style={{ color: "#fb7c29" }}>Most using car</h1>
            <MostRentCarChart />
          </div>
        </Col>
      </Row> */}

      <Row>
        <h2
          style={{ fontSize: "25px", margin: "30px 0px", fontWeight: "normal" }}
        >
          Transaction histroy
        </h2>
      </Row>
      <InvoiceTable />
    </div>
  );
}

export default DashboardHome;