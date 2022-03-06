import cls from './Button.module.css';

const Button = (props) => {
  const { children, variant = 'primary' } = props;

  const variants = new Map([
    ['primary', ''],
    ['primary-dark', cls.buttonPrimaryDark],
    ['primary-darker', cls.buttonPrimaryDarker],
  ]);

  if (!variants.has(variant)) {
    throw new Error(`Btn "${variant}" doesn't exist.`);
  }

  props = {
    ...props,
    className: props.className + ' ' + cls.button + ' ' + variants.get(variant),
  };
  delete props.children;
  delete props.variant;

  return <button {...props}>{children}</button>;
};

export default Button;
