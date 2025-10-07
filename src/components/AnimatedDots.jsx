import React from "react";


  const AnimatedDots = () => {
  return (
    <span className="flex space-x-1 ml-2">
      <span className="w-2 h-2 bg-white rounded-full animate-[typing_2.5s_infinite]"></span>
      <span className="w-2 h-2 bg-white rounded-full animate-[typing_2.5s_infinite] [animation-delay:0.3s]"></span>
      <span className="w-2 h-2 bg-white rounded-full animate-[typing_2.5s_infinite] [animation-delay:0.6s]"></span>
    </span>
  );
};
     
                   

          

export default AnimatedDots;
