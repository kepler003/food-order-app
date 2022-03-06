import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Icon from '../../UI/Icon/Icon';
import cls from './MenuRow.module.css';

const MenuRow = () => {
  return (
    <div className={cls.row}>
      <div>
        <p>
          <b>Sushi</b>
        </p>
        <p className={cls.description}>
          <i>Finest fish and veggies</i>
        </p>
        <p className={cls.price}>
          <b>$22.99</b>
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
