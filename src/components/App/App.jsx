import "./App.css";

import Product from "../Product/Product.jsx";
import favouriteBooks from "../../data.js";
import Books from "../Books/Books.jsx";
import Card from "../Card/Card.jsx";
import Button from "../Button/Button.jsx";

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Button message="I am a Button. Click me!">Button: Click me!</Button>
      <Product name="Tacos With Lime" price={56.44} />
      <Product name="Fries and Burger" price={74.33} quantity={7} />
      <Product name="Hot dog" price={83.44} quantity={3} />
      {/* <Books books={favouriteBooks} /> */}
      <Card>
        <h1>Card title</h1>
        <Books books={favouriteBooks} />
      </Card>
    </div>
  );
}
