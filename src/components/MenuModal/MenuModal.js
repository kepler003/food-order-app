import { Fragment, useEffect, useRef, useContext } from 'react';
import ReactDOM from 'react-dom';
import Button from '../../UI/Button/Button';
import Row from './Row';
import cls from './MenuModal.module.css';
import MenuContext from '../../store/MenuContext';

const MenuModal = ({ isActive = false, onClose }) => {
  const menuCtx = useContext(MenuContext);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  const modalRef = useRef();

  const totalPrice =
    menuCtx.order.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0) / 100;

  const backgroundClickHandler = (e) => {
    if (modalRef.current.contains(e.target)) return;
    onClose();
  };

  const placeAnOrder = () => {
    console.log('Order has been placed!');
  };

  return ReactDOM.createPortal(
    <Fragment>
      {isActive && (
        <div className={cls.background} onClick={backgroundClickHandler}>
          <div className={cls.modal} ref={modalRef}>
            <div className={cls.list}>
              {menuCtx.order.map((item) => {
                return (
                  <Row
                    key={item.id}
                    {...item}
                    onAdd={menuCtx.add}
                    onRemove={menuCtx.remove}
                  />
                );
              })}
            </div>
            <div>
              <p className={cls.summary}>
                Total price:
                <span>${totalPrice}</span>
              </p>
              <div className={cls.footerBtns}>
                <Button
                  className={cls.footerBtn}
                  variant='outline-primary'
                  onClick={onClose}
                >
                  Close
                </Button>
                <Button
                  className={cls.footerBtn}
                  onClick={() => {
                    placeAnOrder();
                    onClose();
                  }}
                >
                  Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>,
    document.body
  );
};

export default MenuModal;
