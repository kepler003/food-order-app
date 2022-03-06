import cls from './Main.module.css';
import foodImg from '../../images/food.jpg';
import Menu from '../Menu/Menu';

const Main = () => {
  return (
    <main className={cls.main}>
      <div className={cls.imgBox}>
        <img className={cls.img} src={foodImg} alt='Food on the table' />
      </div>
      <div className={cls.info}>
        <h1 className={cls.heading}>Delicious food</h1>
        <p className={cls.subheading}>
          Quaerat autem quisquam labore possimus repudiandae incidunt id
          distinctio saepe, reprehenderit vitae vero atque optio eveniet omnis.
        </p>
        <p className={cls.subheading}>
          Adipisci voluptas eum obcaecati magnam temporibus expedita fuga saepe?
          Molestiae, perspiciatis soluta?
        </p>
      </div>
      <div className={cls.menuBox}>
        <Menu />
      </div>
    </main>
  );
};

export default Main;
