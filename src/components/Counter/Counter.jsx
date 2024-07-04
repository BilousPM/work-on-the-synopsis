import { useEffect, useState } from "react";

const Counter = ({ value, onClick }) => {
  // const [clicks, setClicks] = useState(10);
  const [moseMove, setMousMove] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return savedClicks;
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", moseMove);
  }, [moseMove]);

  const handleMousEnter = () => {
    setMousMove(moseMove + 1);
  };

  // const handleClick = () => {
  //   setClicks(clicks + 2);
  // };

  return (
    <div>
      {/* <p>{value}</p>
      <p>{moseMove}</p> */}

      <button onClick={onClick} onMouseEnter={handleMousEnter}>
        click: {value} move: {moseMove}
      </button>
      <button onMouseEnter={() => setMousMove(0)}>Reset</button>
    </div>
  );
};

export default Counter;
