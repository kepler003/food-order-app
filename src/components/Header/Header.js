import cls from './Header.module.css';
import CartBtn from '../CartBtn/CartBtn';
import { useContext } from 'react';
import MenuContext from '../../store/MenuContext';

const Header = () => {
  const menuCtx = useContext(MenuContext);
  const numOfItems = menuCtx.order.reduce(
    (prev, curr) => prev + curr.amount,
    0
  );

  return (
    <header className={cls.header}>
      <div className='row'>
        <a className={cls.logo} href='#'>
          ReactMeals
        </a>
        <CartBtn numOfItems={numOfItems} />
      </div>
    </header>
  );
};

export default Header;
