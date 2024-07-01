import PropTypes from "prop-types";

export const Product = ({ name = "something", price, quantity }) => {
  const src =
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <div>
      <h2>{name}</h2>
      <img src={src} alt="Tacos With Lime" width="640" />
      {price && <p>Price: {price} credits</p>}
      {quantity ? (
        <p>available quantity {quantity}</p>
      ) : (
        <p>sorry, it's not avalible</p>
      )}
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string,
  price: PropTypes.number.isRequired,
  // quantity: PropTypes.number.isRequired,
};

export default Product;
