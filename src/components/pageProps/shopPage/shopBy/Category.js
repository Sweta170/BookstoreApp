import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import {motion} from "framer-motion";
import NavTitle from "./NavTitle";

const Category = () => {
  const [showSubCatOne, setShowSubCatOne] = useState(false);
  const items = [
    {
      _id: 990,
      title: "New Arrivals",
      icons: true,
    },
    {
      _id: 991,
      title: "Gudgets",
    },
    {
      _id: 992,
      title: "Accessories",
      icons: true,
    },
    {
      _id: 993,
      title: "Electronics",
    },
    {
      _id: 994,
      title: "Others",
    },
  ];
  return (
    <div>
    <div 
    onClick={() => setShowSubCatOne(!showSubCatOne)}
    className="cursor-pointer"
    >
      <NavTitle title="Shop by Category" icons={false} />   
      </div>

      {showSubCatOne && (
        <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        >
      
      
        <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676] cursor-pointer">
          {items.map(({ _id, title, icons }) => (
            <li
              key={_id}
              className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer"
              >
              {title}
              {icons && (
                <span
                  onClick={() => setShowSubCatOne(!showSubCatOne)}
                  className="text-[10px] lg:text-xs cursor-pointer text-gray-400 hover:text-primeColor duration-300"
                >
                  <ImPlus />
                </span>
              )}
            </li>
          ))}
        </ul>
     </motion.div>
     )}
    </div>
  );
};

export default Category;
