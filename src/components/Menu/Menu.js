import MenuRow from '../MenuRow/MenuRow';
import cls from './Menu.module.css';

const Menu = () => {
  return (
    <div className={cls.menu}>
      <MenuRow />
    </div>
  );
};

export default Menu;
