import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  List,
  Checkbox,
  Input,
  Space,
  Alert,
} from "antd";
import { BookFilled, BookTwoTone, CheckCircleFilled, YoutubeFilled } from "@ant-design/icons";
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

const curriculum = [
  {
    title: "Getting Started With This Course",
  },
  {
    title: "What is forex?",
  },
  {
    title: "Different Types of Orders",
  },
  {
    title: "Opening your First Trade",
  },
  {
    title: "Brokers and Why you Need Them",
  },
  {
    title: "Basic Market Terminologies",
  },
  {
    title: "Funding Your Deriv Account",
  },
  {
    title: "Deriv Course pt. 1",
  },
  {
    title: "Deriv Course pt. 2",
  },
  {
    title: "Deriv Course pt. 3",
  },
  {
    title: "Deriv Course pt. 4",
  },
  {
    title: "Deriv Course pt. 5",
  },
  {
    title: "Deriv Course pt. 6",
  },
  {
    title: "Deriv Course pt. 7",
  },
  {
    title: "The Successful Trader",
  },
  {
    title: "The End (Grind Time)"
  }
];

const promoCodes = ["shamz", "danny"];

const CourseCard = ({ onBuyBtnClick, coursePrice, setCoursePrice }) => {
  const [isPromoOpen, setIsPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const onApplyPromoCode = () => {
    if (promoCodes.includes(promoCode.toLowerCase())) {
      setCoursePrice({
        naira: 135000,
        usd: 90,
      });
      setDiscountApplied(true);
      setShowAlert(true);
      setMessage("10% discount applied!");
    } else {
      setDiscountApplied(false);
      setShowAlert(true);
      setMessage("this isn't a valid code");
    }
  };

  return (
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
        {showAlert && (
          <Alert
            message={discountApplied ? "Success" : "Error"}
            description={message}
            type={discountApplied ? "success" : "error"}
            style={{ marginTop: "4%" }}
            showIcon
            closable
            onClose={() => setShowAlert(false)}
          />
        )}
        <p className="price">
          <span className="main">₦{coursePrice.naira.toLocaleString()}</span>
          <span className="former">₦200,000</span>
        </p>
        <p className="main-usd">${coursePrice.usd}</p>

        <div className="promo-container">
          <p onClick={() => setIsPromoOpen(!isPromoOpen)}>promo code?</p>
        </div>
        {isPromoOpen && (
          <Space.Compact style={{ width: "100%", marginBottom: "1rem" }}>
            <Input
              placeholder="Type Promo code..."
              onChange={(e) => {
                setPromoCode(e.target.value);
              }}
            />
            <Button type="primary" onClick={() => onApplyPromoCode()}>
              Apply
            </Button>
          </Space.Compact>
        )}
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
};

const SecondDerivCoursePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [coursePrice, setCoursePrice] = useState({
    naira: 150000,
    usd: 100,
  });
  const onButtonClick = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div className="main-deriv-page">
      <PaymentModal
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        coursePrice={coursePrice}
      />
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
            <CourseCard
              onBuyBtnClick={() => onButtonClick()}
              coursePrice={coursePrice}
              setCoursePrice={setCoursePrice}
            />
          </Col>
        </Row>
      </div>
      <div className="rest-of-body">
        <h2>Course Content</h2>
        <List
          itemLayout="horizontal"
          dataSource={curriculum}
          renderItem={(item, index) => (
            <List.Item style={{color: "white"}}>
              <List.Item.Meta
                avatar={<YoutubeFilled />}
                title={<a href="#">{item.title}</a>}
                // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default SecondDerivCoursePage;
