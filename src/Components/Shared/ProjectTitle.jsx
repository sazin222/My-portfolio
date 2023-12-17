/* eslint-disable react/prop-types */


const ProjectTitle = ({ title }) => {
  return (
    <h1 className="dark:text-dark-mode font-poppins font-semibold text-2xl mt-28 mb-16 border-b-2 pb-2 ">
      {title}
    </h1>
  );
};

export default ProjectTitle;