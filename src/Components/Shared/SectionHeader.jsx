/* eslint-disable react/prop-types */


const SectionHeader = ({ name }) => {
  return (
    <div className="">
      {name === "CONTACT" ? (
        <div className="pt-10 md:pt-12">
          <h1 className="font-generalBold text-3xl sm:text-4xl md:text-5xl text-dark-mode  border-l-[8px] border-l-secondary pl-3">
            CONTACT
          </h1>
        </div>
      ) : (
        <h1 className="dark:text-dark-mode font-generalBold text-3xl sm:text-4xl md:text-5xl text-title mb-6 mt-12 md:mt-16 border-l-[8px] border-l-secondary pl-3">
          {name}
        </h1>
      )}
    </div>
  );
};

export default SectionHeader;