import cls from './Header.module.css';
import CartBtn from '../CartBtn/CartBtn';

const Header = () => {
  return (
    <header className={cls.header}>
      <div className='row'>
        <a className={cls.logo} href='#'>ReactMeals</a>
        <CartBtn />
      </div>
    </header>
  );
};

export default Header;
