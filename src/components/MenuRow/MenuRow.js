import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Icon from '../../UI/Icon/Icon';
import cls from './MenuRow.module.css';

const MenuRow = ({ name, description, price, separation }) => {
  return (
    <div className={[cls.row, separation ? cls.separation : ''].join(' ')}>
      <div>
        <p>
          <b>{name}</b>
        </p>
        <p className={cls.description}>
          <i>{description}</i>
        </p>
        <p className={cls.price}>
          <b>${price}</b>
        </p>
      </div>
      <div className={cls.addBox}>
        <div>
          <label>Amount</label>
          <Input className={cls.amount} type='number' min='1' step='1' />
        </div>
        <Button className={cls.add} size='small'>
          <Icon className={cls.addIcon} color='white' name='plus' />
          Add
        </Button>
      </div>
    </div>
  );
};

export default MenuRow;
