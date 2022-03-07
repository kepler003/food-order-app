import cls from './CartBtn.module.css';
import Icon from '../../UI/Icon/Icon';
import Button from '../../UI/Button/Button';
import { useEffect, useState } from 'react';

const CartBtn = ({ numOfItems, ...props }) => {
  const [jump, setJump] = useState(false);

  useEffect(() => {
    setJump(true);
    setTimeout(() => setJump(false), 150);
  }, [numOfItems]);

  return (
    <Button className={[cls.btn, jump ? cls.jump : ''].join(' ')} variant='primary-darker' {...props}>
      <Icon className={cls.icon} name='cart' color='white' />
      <span className={cls.label}>Your Cart</span>
      <span className={cls.number}>{numOfItems}</span>
    </Button>
  );
};

export default CartBtn;
