import Button from '../../UI/Button/Button';
import Icon from '../../UI/Icon/Icon';
import cls from './Row.module.css';

const Row = ({ name, price, amount, onAdd, onRemove }) => {
  const addHandler = () => {
    onAdd({ name });
  }

  const removeHandler = () => {
    onRemove({ name });
  }
  
  return (
    <div className={cls.row}>
      <div>
        <p className={cls.name}>{name}</p>
        <p className={cls.price}>${price / 100}</p>
      </div>
      <div className={cls.controlBtns}>
        <p className={cls.amount}>x{amount}</p>
        <Button className={cls.controlBtn} variant='outline-primary' size='small' onClick={removeHandler}>
          <Icon name='minus' />
        </Button>
        <Button className={cls.controlBtn} size='small' onClick={addHandler }>
          <Icon name='plus' color='white' />
        </Button>
      </div>
    </div>
  );
};

export default Row;
