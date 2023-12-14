
import resume from "../../../assets/Resume/MAHADI ISLAM SAZIN.pdf";
import Button from "../../Shared/Button";
const HeroHeader = () => {
  // eslint-disable-next-line no-unused-vars
  const downloadPdf = () => {
    const pdfUrl = "MAHADI ISLAM SAZIN.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-between w-full pt-8 items-center h-[12%]">
      <img
        src="./assets/logo.png"
        alt=""
        className="w-[33%] sm:w-[25%] md:w-[18%] lg:w-[13%]"
      />
      <div>
        <a href={resume} download="MAHADI ISLAM SAZIN">
          <Button className="bg-[rgba(0, 0, 0, 0.46)] border border-white text-white text-[10px] md:text-base px-5 py-1">
            RESUME
            
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroHeader;
