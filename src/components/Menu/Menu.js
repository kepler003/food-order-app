import MenuRow from '../MenuRow/MenuRow';
import cls from './Menu.module.css';
import { useContext } from 'react';
import MenuContext from '../../store/MenuContext';

const Menu = () => {
  const menuCtx = useContext(MenuContext);

  return (
    <div className={cls.menu}>
      {menuCtx.menu.map((dish, index) => {
        return (
          <MenuRow
            key={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            separation={index > 0}
            onAdd={menuCtx.add}
          />
        );
      })}
    </div>
  );
};

export default Menu;
