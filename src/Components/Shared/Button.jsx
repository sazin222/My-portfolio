/* eslint-disable react/prop-types */

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`active:scale-95 duration-300 font-bold  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;