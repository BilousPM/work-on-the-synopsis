import { useState } from "react";

const Counter = ({ value, onClick }) => {
  // let clicks = 10;
  const [clicks, setClicks] = useState(10);
  const [moseMove, setMousMove] = useState(1);

  const handleMousEnter = () => {
    setMousMove(moseMove + 1);
  };

  const handleClick = () => {
    setClicks(clicks + 2);
  };

  return (
    <div>
      <p>{value}</p>
      <p>{moseMove}</p>

      <button onClick={onClick} onMouseEnter={handleMousEnter}>
        click: {value} move: {moseMove}
      </button>
    </div>
  );
};

export default Counter;
