import cls from './Input.module.css';

const Input = (props) => {
  props = {
    ...props,
    className: props.className + ' ' + cls.input,
  };

  return <input {...props} />;
};

export default Input;
