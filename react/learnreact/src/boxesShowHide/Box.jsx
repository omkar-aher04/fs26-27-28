import { FaChevronUp } from "react-icons/fa";
 import { useState } from "react";
 
function Box({ heading }) {
   
  const [show, setShow] = useState(true);
 function toggleContent() {
      setShow(!show);
    };
   
  return (
    <div className="box h-48 w-1/4 border-2 border-amber-300 rounded-lg">
      <h2 className="p-3 h-1/4 text-2xl bg-gray-400 font-bold flex justify-between items-center">
        {heading}
        <FaChevronUp className={`box cursor-pointer ${show ? 'rotate' : ''}`}  onClick={toggleContent}/>
      </h2>

      {show && (<p className="p-3 h-3/4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        laborum voluptatum corporis. Ut eaque aliquam a voluptates quisquam
        assumenda odio.
      </p>)}
    </div>
  );
}

export default Box;
