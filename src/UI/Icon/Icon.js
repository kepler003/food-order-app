import cls from './Icon.module.css';
import cartIcon from '../../icons/cart.png';
import checkIcon from '../../icons/check.png';
import plusIcon from '../../icons/plus.png';
import minusIcon from '../../icons/minus.png';

const Icon = (props) => {
  const { className, name, color } = props;

  props = {
    ...props,
    className: className + ' ' + cls.box,
  };

  delete props.name;
  delete props.color;

  const icons = new Map([
    ['cart', cartIcon],
    ['check', checkIcon],
    ['plus', plusIcon],
    ['minus', minusIcon],
  ]);

  if (!icons.has(name)) {
    throw Error(`Icon "${name}" doesn't exist.`);
  }

  const imgClass = color === 'white' ? cls.white : '';

  return (
    <span {...props}>
      <img className={[cls.img, imgClass].join(' ')} src={icons.get(name)} />
    </span>
  );
};

export default Icon;
