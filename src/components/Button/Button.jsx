const Button = ({ message, children }) => {
  return (
    <button
      onClick={() => {
        hendleClick(message);
      }}
    >
      {children}
    </button>
  );
};

const hendleClick = (message) => {
  console.log(message);
};
export default Button;
