import MenuRow from '../MenuRow/MenuRow';
import cls from './Menu.module.css';

const dishes = [
  {
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    id: Math.random().toString(),
  },
  {
    name: 'Pancaces',
    description: 'Best pancakes in USA',
    price: 22.99,
    id: Math.random().toString(),
  },
  {
    name: 'Hamburger',
    description: 'Beef and bun',
    price: 22.99,
    id: Math.random().toString(),
  },
  {
    name: 'Pizza',
    description: 'Crunchy crust with delicious cheese and salami',
    price: 22.99,
    id: Math.random().toString(),
  },
];

const Menu = () => {
  return (
    <div className={cls.menu}>
      {dishes.map((dish, index) => {
        return (
          <MenuRow
            key={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            separation={index > 0}
          />
        );
      })}
    </div>
  );
};

export default Menu;
