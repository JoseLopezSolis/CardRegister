import Classes from "./Button.module.css";
const Button = function ({ value, onClick, type }) {
  return (
    <input
      type={type}
      value={value}
      className={Classes.button}
      onClick={onClick}
    />
  );
};

export default Button;
