import "./App.css";
import { useState } from "react";

import Product from "../Product/Product.jsx";
import favouriteBooks from "../../data.js";
import Books from "../Books/Books.jsx";
import Card from "../Card/Card.jsx";
import Button from "../Button/Button.jsx";
import Counter from "../Counter/Counter.jsx";
import BtnEffect from "../BtnEffect/BtnEffect.jsx";
import ModalApp from "../Modal/ModalApp.jsx";
import ControlledForm from "../ControlledForm/ControlledForm.jsx";
import UncontrolledForm from "../UncontrolledForm/UncontrolledForm.jsx";
import UnContrForm from "../UncontrolledForm/UnContrForm.jsx";

export default function App() {
  //  "підняття стану"до батька , щоб змінити стан батька під час події в дитині.

  const [clicks, setClicks] = useState(0);
  // const [clicks, setClicks] = useState({
  //   x: 1,
  //   y: 2,
  // });

  // const updateX = () => {
  //   setClicks(3);
  // };
  // const updateY = () => {
  //   setClicks({ ...clicks, y: clicks.y + 1 });
  // };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  const register = (data) => {
    console.log("Register in progres...");
    setTimeout(() => {
      console.log("Register done");
      console.log(data);
    }, 2000);
  };

  return (
    <div>
      {/* <UnContrForm /> */}
      {/* <UncontrolledForm onLogin={handleLogin} /> */}
      <ControlledForm register={register} />
      {/* <ModalApp />

      <BtnEffect />
      <h1>Best selling</h1>
      <Counter value={clicks} onClick={handleClick} /> */}
      {/* <Counter /> */}
      {/* <Button message="I am a Button. Click me!">Button: Click me!</Button>
      <Product name="Tacos With Lime" price={56.44} />
      <Product name="Fries and Burger" price={74.33} quantity={7} />
      <Product name="Hot dog" price={83.44} quantity={3} /> */}
      {/* <Books books={favouriteBooks} /> */}
      {/* <Card>
        <h1>Card title</h1>
        <Books books={favouriteBooks} />
      </Card> */}
    </div>
  );
}
