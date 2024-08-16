import { useEffect } from "react";
import Header from "../../components/header/header";
import NormalText from "../../components/normal_text/normal_text";
import linkin_icon from "../../images/linkin.png";
import twitter_icon from "../../images/twitter.png";
import github_icon from "../../images/github.png"
import { BackTop } from "antd";
import "./style.scss";
const Connect = ({ contact, contactSticky }) => {
  return (
    <>
      <section className="want_to_connect" id="connect">
        <Header className={contact ? "header_fixed" : "header_scroll"}>
          Want to Connect?
        </Header>
        <span ref={contactSticky}></span>
        <NormalText
          fontWeight="500"
          textAlign="center"
          className="connect_text"
          color=" #FFFFFF"
        >
          I’m open to opportunities around Software engineering and
          Devrel/advocacy roles. Let’s talk via mail{" "}
          <a href="mailto: iamdanieldon@gmail.com">iamdanieldon@gmail.com</a>{" "}
          or any of these socials.
        </NormalText>
        <div className="linkin_and_twitter_icon">
          <a href="https://www.linkedin.com/in/iamdanieldon/">
            <img src={linkin_icon} className="icon" />
          </a>
          <a href="https://twitter.com/iamdanieldon">
            <img src={twitter_icon} className="icon" />
          </a>
          <a href="https://github.com/Chiagozielam">
            <img src={github_icon} className="icon" />
          </a>
        </div>
        <BackTop />
        <NormalText
          fontWeight="500"
          textAlign="center"
          fontSize="18px"
          color="#CCCCCC"
          className="daniel_don"
        >
          Daniel Don
        </NormalText>
        This is something I love to do alright??
      </section>
    </>
  );
};

export default Connect;
