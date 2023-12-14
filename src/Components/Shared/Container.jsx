/* eslint-disable react/prop-types */
const Container = ({ children, className, id }) => {
    return (
      <section className={`${className} mx-auto w-[90%] `} id={id}>
        {children}
      </section>
    );
  };
  
  export default Container;
  