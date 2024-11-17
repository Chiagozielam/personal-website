import React from "react";
import walletImg from "./wallet.jpg";
import "./style.scss";

const DerivCoursePage = () => {
  const onCopyText = async (id) => {
    var copyText = document.getElementById(id).innerHTML;
    try {
      await navigator.clipboard.writeText(copyText);
      alert("Copied the text: " + copyText);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="deriv">
      <h1>
        At last you can learn how I consistently flip deriv accounts, stack
        positions, and live the successful forex lifestyle of your dreams by
        trading volatility100 with precision{" "}
      </h1>
      <p className="assurance">
        It doesn't matter whether you've been unsuccessful for a very long time,
        if you follow what I'm about to teach you for a week, you'll message me
        on instagram and on the community with your positive results and profit
        screenshots.
      </p>

      <a href="https://selar.co/derivcashout">
        <button className="buy-btn">Buy Now</button>
      </a>

      <div className="cryp-container">
        <p className="info">
          To make payment with crypto, transfer to the wallet address below and
          send proof of payment on WhatsApp to the number <b>08034391101</b>, or
          click on the button below. You'll be added to the exclusive WhatsApp
          community and given access to the course and personal access to Daniel
          Don.
        </p>
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
          <p className="heading" id="network-heading">Amount:</p>
          <div className="flex-container">
            <p className="flex-1" id="amount">
              $100
            </p>
            <p className="flex-2">
              <button onClick={() => onCopyText("address")}>Copy</button>
            </p>
          </div>
          <p className="heading" id="network-heading">Network:</p>
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
    </div>
  );
};

export default DerivCoursePage;
