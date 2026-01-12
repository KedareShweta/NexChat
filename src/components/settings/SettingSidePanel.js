// import React from 'react'

// export const SettingSidePanel = () => {
//   return (
//     <div className='flex flex-col gap-5'>
//       <h2 className='text-2xl font-medium tracking-wide font-poppins'>
//         Settings
//       </h2>

//       profile
//       <div>
//         {/* profiles data */}
//         <div>
//           {/* profile image  */}
//           <div>
//             {/* profile name */}
//             <div>
//               <h3>Shweta Kedare</h3>
//               <p>Do not disturb</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// =============================================================================================

import { ChevronRight } from "lucide-react";
import React from "react";

const SettingsSidePanel = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-3xl font-medium tracking-wide font-poppins ">
        Settings
      </h2>
      {/* Profile */}
      <div className="w-full flex items-center justify-between bg-hovergreen p-4 rounded-xl">
        {/* Profile's Data  */}
        <div className="w-full flex gap-4 items-center justify-center">
          {/* Profile Image  */}
          <div className="size-16 bg-icongreen rounded-full shrink-0"></div>
          {/* Profile's Name  */}
          <div className="flex flex-col w-full font-roboto">
            <h3 className="text-xl font-medium text-gray-300">Shweta Kedare</h3>
            <p className="text-sm">DND</p>
          </div>
        </div>
        {/* Arrow */}
        <ChevronRight />
      </div>
    </div>
  );
};

export default SettingsSidePanel;