import React, { useState } from "react";
import { Card, Col, Row, Button, List, Checkbox } from "antd";
import { BookTwoTone, CheckCircleFilled } from "@ant-design/icons";
import PaymentModal from "./paymentModal";
import "./style.scss";
import DanielImg from "../images/profileImg.png";
import CourseImg from "../images/courseImg.png";

const { Meta } = Card;
const benefitList = [
  {
    title: "1 live class with me",
  },
  {
    title: "Access to the exclusive community",
  },
  {
    title: "Live class with Shamz",
  },
];

const promoCodes = ["shamz", "danny"]

const CourseCard = ({ onBuyBtnClick }) => (
  <div className="course-card">
    <Card
      hoverable
      style={{ width: 340 }}
      cover={<img alt="example" src={CourseImg} />}
    >
      <Meta
        title="Cashout with Deriv"
        description="Master deriv and financial freedom with Daniel Don"
      />
      <p className="price">
        <span className="main">₦150,000</span>
        <span className="former">₦200,000</span>
      </p>
        <p className="main-usd">$100</p>
      <Button
        type="primary"
        size="large"
        className="buy-button"
        onClick={onBuyBtnClick}
      >
        Buy now
      </Button>
      <div className="benefits">
        <p className="heading">This course includes:</p>
        <List
          itemLayout="horizontal"
          dataSource={benefitList}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<CheckCircleFilled />}
                title={<a href="#">{item.title}</a>}
                // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    </Card>
  </div>
);

const SecondDerivCoursePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const onButtonClick = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div className="main-deriv-page">
      <PaymentModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <div className="top-flex-container">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12} xs={24} lg={12}>
            <h1>
              Let me show you how I flip Deriv accounts, stack winning trades,
              and live the forex lifestyle you’ve been dreaming of with
              precision trading on volatility100!
            </h1>
            <img src={DanielImg} className="profile_img" alt="" />
            <p className="bio">
              I am Daniel Don, and I'm teaching you everything I know about
              Deriv, and how I flip small accounts to huge amounts in hours.
              This course is suitable for beginners (who know nothing about
              trading), intermediate traders, and advanced guys who want to
              learn my personal strategy and how I enter with precision and make
              money from the market quickly.
            </p>
          </Col>
          <Col span={12} xs={24} lg={12}>
            <CourseCard onBuyBtnClick={() => onButtonClick()} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SecondDerivCoursePage;
