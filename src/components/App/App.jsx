// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Product from "../Product/Product.jsx";
import favouriteBooks from "../../data.js";
import Books from "../Books/Books.jsx";
import Card from "../Card/Card.jsx";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React is amasing :)</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

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
