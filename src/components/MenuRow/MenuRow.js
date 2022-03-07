import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Icon from '../../UI/Icon/Icon';
import cls from './MenuRow.module.css';
import { useState } from 'react';

const MenuRow = ({
  name,
  description,
  price,
  separation,
  onAdd,
}) => {
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const onAddHandler = () => {
    onAdd({ name, amount });
  };

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
          <b>${price / 100}</b>
        </p>
      </div>
      <div className={cls.addBox}>
        <div>
          <label>Amount</label>
          <Input
            className={cls.amount}
            onChange={handleAmountChange}
            type='number'
            min='1'
            step='1'
            value={amount}
          />
        </div>
        <Button className={cls.add} size='small' onClick={onAddHandler}>
          <Icon className={cls.addIcon} color='white' name='plus' />
          Add
        </Button>
      </div>
    </div>
  );
};

export default MenuRow;
