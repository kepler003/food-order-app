import cls from './Header.module.css';
import CartBtn from '../CartBtn/CartBtn';
import { useContext, useState } from 'react';
import MenuContext from '../../store/MenuContext';
import Modal from '../MenuModal/MenuModal';

const Header = () => {
  const menuCtx = useContext(MenuContext);
  const numOfItems = menuCtx.order.reduce(
    (prev, curr) => prev + curr.amount,
    0
  );

  const [isModalActive, setIsModalActive] = useState(false);

  const openModal = () => setIsModalActive(true);
  const closeModal = () => setIsModalActive(false);

  return (
    <header className={cls.header}>
      <div className='row'>
        <a className={cls.logo} href='#'>
          ReactMeals
        </a>
        <CartBtn numOfItems={numOfItems} onClick={openModal} />
        <Modal isActive={isModalActive} onClose={closeModal} />
      </div>
    </header>
  );
};

export default Header;
