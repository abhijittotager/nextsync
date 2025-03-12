'use client'
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

// Partner logo data
const partnerLogos = [
  { id: 1, name: 'Microsoft', image: '/images/microsoft-logo.png' },
  { id: 2, name: 'Google', image: '/images/vecteezy_google-logo-icon-symbol_28667072.png' },
  { id: 3, name: 'IBM', image: '/images/ibmlogo.png' },
  { id: 4, name: 'AWS', image: '/images/AWS-Logo.png' },
  { id: 5, name: 'Adobe', image: '/images/Adobe-logo.png' },
  { id: 6, name: 'Coursera', image: '/images/Coursera-Logo.png' },
];

const Partners = () => {
  const scrollRef = useRef(null);
  
  // Duplicate logos to create infinite scroll effect
  const allLogos = [...partnerLogos, ...partnerLogos];
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let animationId;
    let scrollPosition = 0;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      // Move from right to left by incrementing scroll position
      scrollPosition += 1;
      
      // Reset when we've scrolled through the first set of logos
      if (scrollPosition >= scrollContainer.firstChild.offsetWidth * partnerLogos.length) {
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(scroll);
    };
    
    animationId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">Our Trusted Partners</h2>
      
      <div className="overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex transition-transform duration-300 ease-linear"
          style={{ width: 'fit-content' }}
        >
          {allLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`} 
              className="w-36 h-36 mx-3 bg-white/50 rounded-xl flex flex-col items-center justify-center p-4 shadow-sm"
            >
              <div className="relative w-full h-20 mb-2">
                <Image
                  src={logo.image}
                  alt={`${logo.name} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <span className="text-gray-800 font-semibold text-center">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;

// 'use client'
// import React from 'react';
// import Image from 'next/image';

// // Partner logo data
// const partnerLogos = [
//   { id: 1, name: 'Microsoft', image: '/images/microsoft-logo.png' },
//   { id: 2, name: 'Google', image: '/images/vecteezy_google-logo-icon-symbol_28667072.png' },
//   { id: 3, name: 'IBM', image: '/images/ibmlogo.png' },
//   { id: 4, name: 'AWS', image: '/images/AWS-Logo.png' },
//   { id: 5, name: 'Adobe', image: '/images/Adobe-logo.png' },
//   { id: 6, name: 'Coursera', image: '/images/Coursera-Logo.png' },
// ];

// const Partners = () => {
//   return (
//     <div className="py-8">
//       <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">Our Trusted Partners</h2>
      
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
//         {partnerLogos.map((logo) => (
//           <div 
//             key={logo.id} 
//             className="w-36 h-36 bg-white/50 rounded-xl flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-all duration-300"
//           >
//             <div className="relative w-full h-20 mb-2">
//               <Image
//                 src={logo.image}
//                 alt={`${logo.name} logo`}
//                 fill
//                 style={{ objectFit: 'contain' }}
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//             <span className="text-gray-800 font-semibold text-center">{logo.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Partners;
