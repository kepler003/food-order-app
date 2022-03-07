import React, { useReducer } from 'react';

const menu = [
  {
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 2299,
    id: Math.random().toString(),
  },
  {
    name: 'Pancaces',
    description: 'Best pancakes in USA',
    price: 1589,
    id: Math.random().toString(),
  },
  {
    name: 'Hamburger',
    description: 'Beef and bun',
    price: 2500,
    id: Math.random().toString(),
  },
  {
    name: 'Pizza',
    description: 'Crunchy crust with delicious cheese and salami',
    price: 3400,
    id: Math.random().toString(),
  },
];

const menuReducer = (state, { type, name }) => {
  switch (type) {
    case 'add': {
      const { price } = menu.find((dish) => dish.name === name);

      if (state.some((item) => item.name === name)) {
        return state.map((item) => {
          if (item.name !== name) return item;
          return { name, price: item.amount * price, amount: item.amount + 1 };
        });
      }

      return [...state, { name, price, amount: 1 }];
    }
    case 'remove': {
      const { price } = menu.find((dish) => dish.name === name);

      return state
        .map((item) => {
          if (item.name !== name) return item;
          return { name, price: item.amount * price, amount: item.amount - 1 };
        })
        .filter((item) => item.amount > 0);
    }
  }
};

const MenuContext = React.createContext({
  menu: [],
  order: [],
  add: () => {},
  remove: () => {},
});

export const MenuContextProvider = ({ children }) => {
  const [order, dispatchMenu] = useReducer(menuReducer, []);

  const add = ({ name }) => {
    dispatchMenu({ type: 'add', name });
  };

  const remove = ({ name }) => {
    dispatchMenu({ type: 'remove', name });
  };

  return (
    <MenuContext.Provider value={{ menu, order, add, remove }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
