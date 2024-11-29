import React, { useState } from "react";
import { Modal, Row, Col, Button, Input } from "antd";
import walletImg from "./wallet.jpg";
import "./modalStyle.scss";

const PaymentModal = ({ modalOpen, setModalOpen, coursePrice }) => {
  const paymentOptionsObj = {
    crypto: "CRYPTO",
    bank: "BANK",
  };
  const [paymentOption, setPaymentOption] = useState("");
  const onCopyText = async (id) => {
    var copyText = document.getElementById(id).innerHTML;
    try {
      await navigator.clipboard.writeText(copyText);
      alert("Copied the text: " + copyText);
    } catch (error) {
      console.log(error);
    }
  };
  const onSelectPaymentOption = (option) => {
    setPaymentOption(option);
  };
  return (
    <Modal
      title="Select payment option"
      centered
      open={modalOpen}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
    >
      <div className="payment-modal-container">
        <Row>
          <Col span={12}>
            <Button
              className={`pay-option-btn ${
                paymentOption === paymentOptionsObj.crypto ? "active-btn" : ""
              }`}
              onClick={() => onSelectPaymentOption(paymentOptionsObj.crypto)}
            >
              Pay with crypto
            </Button>
          </Col>
          <Col span={12}>
            <Button
              className={`pay-option-btn ${
                paymentOption === paymentOptionsObj.bank ? "active-btn" : ""
              }`}
              onClick={() => onSelectPaymentOption(paymentOptionsObj.bank)}
            >
              Pay with bank transfer
            </Button>
          </Col>
        </Row>

        {paymentOption == paymentOptionsObj.crypto && (
          <div className="crypt-container">
            <div className="wallet-info">
              <p className="heading">Wallet address:</p>
              <div className="flex-container">
                <p className="flex-1" id="address">
                  TY1ohh1gtE1Sfu4D7qej9SA2CnvwBefwxN
                </p>
                <p className="flex-2" id="address-btn">
                  <button onClick={() => onCopyText("address")}>Copy</button>
                </p>
              </div>
              <p className="heading" id="network-heading">
                Amount:
              </p>
              <div className="flex-container">
                <p className="flex-1" id="amount">
                  ${coursePrice?.usd}
                </p>
                <p className="flex-2">
                  <button onClick={() => onCopyText("address")}>Copy</button>
                </p>
              </div>
              <p className="heading" id="network-heading">
                Network:
              </p>
              <div className="flex-container">
                <p className="flex-1" id="network">
                  TRC20
                </p>
                <p className="flex-2">
                  <button onClick={() => onCopyText("network")}>Copy</button>
                </p>
              </div>
              <img
                src={walletImg}
                alt="crypto usdt wallet address"
                className="wallet-img"
              />
              <a href="https://shorturl.at/upBzo">
                <button className="proof-btn">Send Payment Proof</button>
              </a>
            </div>
          </div>
        )}
        {paymentOption === paymentOptionsObj.bank && (
          <div>
            <div className="crypt-container">
              <div className="wallet-info">
                <p className="heading">Bank Name:</p>
                <div className="flex-container">
                  <p className="flex-1" id="bankName">
                    Access Bank
                  </p>
                  <p className="flex-2" id="address-btn">
                    <button onClick={() => onCopyText("bankName")}>Copy</button>
                  </p>
                </div>
                <p className="heading">Account Number:</p>
                <div className="flex-container">
                  <p className="flex-1" id="account_no">
                    1537075800
                  </p>
                  <p className="flex-2" id="address-btn">
                    <button onClick={() => onCopyText("account_no")}>Copy</button>
                  </p>
                </div>
                <p className="heading" id="network-heading">
                  Amount:
                </p>
                <div className="flex-container">
                  <p className="flex-1" id="amount">
                    ₦{coursePrice?.naira.toLocaleString()}
                  </p>
                  <p className="flex-2">
                    <button onClick={() => onCopyText("amount")}>Copy</button>
                  </p>
                </div>
                <p className="heading" id="network-heading">
                  Account Name:
                </p>
                <div className="flex-container">
                  <p className="flex-1" id="name">
                    Daniel Don-Ugwu
                  </p>
                  <p className="flex-2">
                    <button onClick={() => onCopyText("name")}>Copy</button>
                  </p>
                </div>
                <a href="https://shorturl.at/upBzo">
                  <button className="proof-btn">Send Payment Proof</button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default PaymentModal;
