import cls from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'normal',
  className,
  ...props
}) => {
  const variants = new Map([
    ['primary', ''],
    ['primary-dark', cls.buttonPrimaryDark],
    ['primary-darker', cls.buttonPrimaryDarker],
    ['outline-primary', cls.buttonOutlinePrimary],
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

  className =
    className +
    ' ' +
    cls.button +
    ' ' +
    variants.get(variant) +
    ' ' +
    sizes.get(size);

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
