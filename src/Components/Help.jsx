import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const Help = ({helpDetails}) =>{
  const [isOpen, setIsOpen]=React.useState(null);

  const handleChange = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };
  

  return(
    <>
    <h1 className="about-header1">Frequently Asked Questions</h1>
    <h4 className="about-header2">Help Center</h4>
    {helpDetails.map((item, index) => (
      <div key={index}>
        <h2>
          <button type="button" className="question-button" onClick={() => handleChange(index)} >
          <span className="question">{item.question}</span>
          {isOpen ? (<IoIosArrowUp size={18} />) : (<MdKeyboardArrowDown size={18} />)}
          </button>
        </h2>

    <div className={`transition-all duration-300 ${
          isOpen === index ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}>
      <div className="p-5 bg-gray-200 border border-b-0 border-gray-100">
        <p className="mb-2 text-gray-700">{item.answer}</p>
      </div>
    </div>
    </div>
    ))}
    </>
  );
};
export default Help;