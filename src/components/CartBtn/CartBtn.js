import cls from './CartBtn.module.css';
import Icon from '../../UI/Icon/Icon';
import Button from '../../UI/Button/Button';

const CartBtn = ({ numOfItems }) => {
  return (
    <Button className={cls.btn} variant='primary-darker'>
      <Icon className={cls.icon} name='cart' color='white' />
      <span className={cls.label}>Your Cart</span>
      <span className={cls.number}>{numOfItems}</span>
    </Button>
  );
};

export default CartBtn;
