import cls from './CartBtn.module.css';
import Icon from '../../UI/Icon/Icon';
import Button from '../../UI/Button/Button';

const CartBtn = () => {
  return (
    <Button className={cls.btn} btnType='primary-darker'>
      <Icon className={cls.icon} name='cart' color='white' />
      <span className={cls.label}>Your Cart</span>
      <span className={cls.number}>0</span>
    </Button>
  );
};

export default CartBtn;
