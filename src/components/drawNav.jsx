import React from 'react';
import { useNavigate } from 'react-router-dom';

const DrawNav = ({ href, path, label, setIsOpen, setIsModalOpen }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (setIsModalOpen) {
      setIsModalOpen(true);
    } else if (path) {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <div className="px-4 md:px-6 lg:px-10">
      {path ? (
        <div 
          className="border-2 border-[#0F6EDB] bg-white shadow rounded-lg p-4 w-full max-w-[250px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px] items-center cursor-pointer transition-all duration-300 hover:shadow-md"
          onClick={handleClick}
        >
          <div className="flex space-x-4">
            <div className="h-4 rounded text-black text-sm sm:text-md md:text-lg">
              {label}
            </div>
          </div>
        </div>
      ) : (
        <a 
          href={href}
          onClick={handleClick}
        >
          <div  className="border-2 border-[#0F6EDB] bg-white shadow rounded-lg p-4 w-full max-w-[250px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px] items-center cursor-pointer transition-all duration-300 hover:shadow-md" >
            <div className="h-4 rounded text-black text-sm sm:text-md md:text-lg">
              {label}
            </div>
          </div>
        </a>
      )}
    </div>
  );
};

export default DrawNav;
