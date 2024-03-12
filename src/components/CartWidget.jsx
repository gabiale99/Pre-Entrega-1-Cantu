import { RiShoppingBasketLine } from 'react-icons/ri';

export const CartWidget = () => {
  return (
    <div id="cart-widget">
      <a href="#">
        <RiShoppingBasketLine />
      </a>
      <span>2</span>
    </div>
  );
};
