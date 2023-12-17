/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Tech = ({ skills, index }) => {
  return (
    <div className="flex gap-4 items-center mt-5">
      <p className="font-poppins font-bold text-lg">Tech: </p>
      {skills?.map(({ id, name, path }, idx) => (
        <img
          className={` ${idx > index ? "h-[25px]" : "h-[30px]"} ${
            idx === 5 ? "h-[22px]" : ""
          }`}
          key={id}
          src={path}
          alt=""
        />
      ))}
    </div>
  );
};

export default Tech;