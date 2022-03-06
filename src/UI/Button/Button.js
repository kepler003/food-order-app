import cls from './Button.module.css';

const Button = (props) => {
  const { children, variant = 'primary', size = 'normal' } = props;

  const variants = new Map([
    ['primary', ''],
    ['primary-dark', cls.buttonPrimaryDark],
    ['primary-darker', cls.buttonPrimaryDarker],
  ]);

  const sizes = new Map([
    ['normal', ''],
    ['small', cls.small],
  ]);

  if (!variants.has(variant)) {
    throw new Error(`Btn variant "${variant}" doesn't exist.`);
  }

  if (!sizes.has(size)) {
    throw new Error(`Btn size "${size}" doesn't exist.`);
  }

  props = {
    ...props,
    className:
      props.className +
      ' ' +
      cls.button +
      ' ' +
      variants.get(variant) +
      ' ' +
      sizes.get(size),
  };

  delete props.children;
  delete props.variant;

  return <button {...props}>{children}</button>;
};

export default Button;
