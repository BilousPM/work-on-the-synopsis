const Button = ({ message, children }) => {
  return (
    <button
      onClick={() => {
        handleClick(message);
      }}
    >
      {children}
    </button>
  );
};

const handleClick = (message) => {
  console.log(message);
};
export default Button;
