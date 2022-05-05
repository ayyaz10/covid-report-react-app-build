const Button = ({ btnText, styles, onAdding, clickValue }) => {
  return (
    <>
      <button onClick={() => onAdding(clickValue)} className={styles}>
        {btnText}
      </button>
    </>
  );
};

export default Button;
