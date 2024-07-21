// "use client";
// import { motion } from "framer-motion";
// import React, { useState } from "react";

// const items = ["Premio 1", "Premio 2", "Premio 3", "Premio 4", "Premio 5"];

// const Noria = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="relative flex items-center justify-center w-full h-screen overflow-hidden">
//       <motion.div
//         className="relative w-96 h-96 rounded-full border-4 border-gray-300"
//         animate={{ rotate: 360 }}
//         transition={{
//           repeat: Infinity,
//           duration: 10,
//           ease: "linear",
//         }}
//       >
//         {items.map((item, index) => {
//           const angle = (index / items.length) * 360;
//           const itemStyle = {
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: `rotate(${angle}deg) translate(12rem) rotate(-${angle}deg)`,
//             transformOrigin: "0 0",
//           };
//           return (
//             <motion.div
//               key={index}
//               className="absolute w-20 h-20 bg-blue-500 text-white flex items-center justify-center rounded-lg cursor-pointer"
//               style={itemStyle}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               animate={{
//                 scale: hoveredIndex === index ? 1.5 : 1,
//                 transition: { type: "spring", stiffness: 300 },
//               }}
//             >
//               {item}
//             </motion.div>
//           );
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default Noria;
