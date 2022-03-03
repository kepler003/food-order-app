import cls from './Icon.module.css';
import cartIcon from '../../icons/cart.png';

const Icon = ({ className, name, color }) => {
  const icons = new Map([['cart', cartIcon]]);

  if (!icons.has(name)) {
    throw Error(`Icon "${name}" doesn't exist.`);
  }

  return (
    <span className={`${cls.box} ${className}`}>
      <img
        className={`${cls.img} ${color === 'white' ? cls.white : ''}`}
        src={icons.get(name)}
      />
    </span>
  );
};

export default Icon;
