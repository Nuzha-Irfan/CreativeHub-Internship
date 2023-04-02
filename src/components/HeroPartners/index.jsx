import React from "react";

import { Img } from "components";

const HeroPartners = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-8 items-start justify-between mt-3 self-stretch w-auto md:w-full">
          <div className="overflow-x-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between self-stretch w-auto md:w-full">
          <div className=" flex items-center justify-start p-[15px] sm:px-5 w-[25%] md:w-full">
              <Img
                src="images/img_pngwing3.png"
                className= "animate-marquee motion-safe:h-[70px] md:h-auto object-cover w-3/4 filter grayscale"
                alt="pngwingThree_One"
              />
            </div>
            <div className=" flex items-center justify-start p-[28px] sm:px-5 w-[35%] md:w-full">
                <Img
                  src="images/img_pngwing1.png"
                  className="animate-marquee motion-safe:h-[60px] md:h-auto object-cover w-[95%] filter grayscale"
                  alt="pngwingOne"
                />
              </div>
               <div className=" flex items-center justify-start p-[28px] sm:px-5 w-[28%] md:w-full">
                <Img
                  src="images/img_havellslogo1.png"
                  className="animate-marquee motion-safe:h-[50px] md:h-auto object-cover w-[88%] filter grayscale"
                  alt="pngwingThree"
                />
              </div>
              <div className=" flex items-center justify-start p-[25px] sm:px-5 w-[25%] md:w-full">
          
                <Img
                  src="images/img_2500pxjbllogo.png"
                  className="animate-marquee motion-safe:h-[65px] md:h-auto object-cover w-[85%] filter grayscale"
                  alt="2500pxjbllogo"
                />
              </div>
              <div className=" flex items-center justify-start p-[60px] sm:px-5 w-[38%] md:w-full">
             
                <Img
                  src="images/img_5848242ecef1014c0b5e49c8.png"
                  className="animate-marquee motion-safe:h-[18px] md:h-auto object-cover w-[85%] filter grayscale"
                  alt="5848242ecef1014"
                />
              </div>
              <div className=" flex items-center justify-start p-[80px] sm:px-5 w-[40%] md:w-full">
            
                <Img
                  src="images/img_1024pxnestlabslogo.png"
                  className="animate-marquee motion-safe:h-[33px] md:h-auto object-cover w-[85%] filter grayscale"
                  alt="1024pxnestlabsl"
                />
              </div>
              <div className=" flex items-center justify-start p-[35px] sm:px-5 w-[23%] md:w-full">
                <Img
                  src="images/img_bekologo1.png"
                  className="animate-marquee motion-safe:h-[35px] md:h-auto object-cover w-[95%] filter grayscale"
                  alt="bekologoOne"
                />
              </div> 
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between self-stretch w-auto md:w-full">
            
          
              <div className=" flex items-center justify-start p-[30px] sm:px-5 w-[95%] md:w-full">
                <Img
                  src="images/img_havellslogo1.png"
                  className="animate-marquee motion-safe:h-[35px] md:h-auto object-cover w-[100%] filter grayscale"
                  alt="havellslogoOne"
                />
              </div>
              
           
            <div className=" flex items-center justify-start p-[30px] sm:px-5 w-[95%] md:w-full">
              <Img
                src="images/img_pngwing1.png"
                className= "animate-marquee motion-safe:h-[50px] md:h-auto object-cover w-[95%] filter grayscale"
                alt="pngwingOne_One"
              />
            </div>
           
          </div>
        </div>
      </div>
      
    </>
  );
};

HeroPartners.defaultProps = {};

export default HeroPartners;
