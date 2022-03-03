import cls from './Button.module.css';

const Button = (props) => {
  const { children, btnType = 'primary' } = props;

  const btnTypes = new Map([
    ['primary', ''],
    ['primary-dark', cls.buttonPrimaryDark],
    ['primary-darker', cls.buttonPrimaryDarker],
  ]);

  if (!btnTypes.has(btnType)) {
    throw new Error(`Btn "${btnType}" doesn't exist.`);
  }

  props = {
    ...props,
    className: props.className + ' ' + cls.button + ' ' + btnTypes.get(btnType),
  };
  delete props.children;
  delete props.btnType;

  return <button {...props}>{children}</button>;
};

export default Button;
