import cls from './Header.module.css';
import Icon from '../../UI/Icon/Icon';
import Button from '../../UI/Button/Button';

const Header = () => {
  return (
    <header className={cls.header}>
      <div className='row'>
        <a className={cls.logo} href='#'>ReactMeals</a>
        <Button className={cls.btn} btnType='primary-darker'>
          <Icon className={cls.icon} name='cart' color='white' />
          <span className={cls.label}>Your Cart</span>
          <span className={cls.number}>0</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
