import cls from './Input.module.css';

const Input = ({ className, ...props }) => {
  className = className + ' ' + cls.input;
  return <input className={className} {...props} />;
};

export default Input;
