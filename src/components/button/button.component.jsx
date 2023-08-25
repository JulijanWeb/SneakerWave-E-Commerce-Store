import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  inverted: "inverted",
  disabled: "disabled",
  checkout: "checkout",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
