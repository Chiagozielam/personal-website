import "./style.scss";
const Button = ({ btn_text, className, href }) => {
  return (
    <button className={`button ${className}`}>
      <a href={href} target="_blank">
        {btn_text}
      </a>
    </button>
  );
};

export default Button;
