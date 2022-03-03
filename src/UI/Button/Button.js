import cls from './Button.module.css';

const Button = (props) => {
  const { children } = props;
  props = {
    ...props,
    className: props.className + ' ' + cls.button,
    children: undefined
  }

  return <button {...props}>{ children }</button>
};

export default Button;
