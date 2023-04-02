import React from "react";

import { Img, List } from "components";

const HeroPartners = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-3 overflow-auto self-stretch w-auto md:w-full">
          <div className="overflow-x-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start self-stretch w-auto">
              <div className="border-gray_601 border-r border-solid flex items-center justify-start p-[29px] sm:px-5 w-[13%] md:w-full">
                <Img
                  src="images/img_pngwing1.png"
                  className="h-[109px] md:h-auto object-cover w-[71%]"
                  alt="pngwingOne"
                />
              </div>
              <div className="border-gray_601 border-r border-solid flex items-center justify-start p-[35px] sm:px-5 w-[13%] md:w-full">
                <Img
                  src="images/img_pngwing3.png"
                  className="h-[98px] md:h-auto object-cover w-[56%]"
                  alt="pngwingThree"
                />
              </div>
              <div className="border-gray_601 border-r border-solid flex items-center justify-start p-[46px] md:px-10 sm:px-5 w-[13%] md:w-full">
                <Img
                  src="images/img_2500pxjbllogo.png"
                  className="h-[76px] md:h-auto object-cover w-[39%]"
                  alt="2500pxjbllogo"
                />
              </div>
              <div className="border-gray_601 border-r border-solid flex items-center justify-center p-[52px] md:px-10 sm:px-5 w-[13%] md:w-full">
                <Img
                  src="images/img_5848242ecef1014c0b5e49c8.png"
                  className="h-[37px] md:h-auto my-[13px] object-cover w-full"
                  alt="5848242ecef1014"
                />
              </div>
              <div className="border-gray_601 border-r border-solid flex items-start justify-start p-[59px] md:px-10 sm:px-5 w-[13%] md:w-full">
                <Img
                  src="images/img_1024pxnestlabslogo.png"
                  className="h-[50px] md:h-auto ml-2 md:ml-[0] object-cover w-[72%]"
                  alt="1024pxnestlabsl"
                />
              </div>
              <div className="border-gray_601 border-r border-solid flex items-center justify-start p-[59px] md:px-10 sm:px-5 w-[13%] md:w-full">
                <Img
                  src="images/img_bekologo1.png"
                  className="h-[50px] md:h-auto object-cover w-[54%]"
                  alt="bekologoOne"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between self-stretch w-auto md:w-full">
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[1680px] grid md:grid-cols-1 grid-cols-2 w-full"
              orientation="horizontal"
            >
              <div className="border-gray_601 border-r border-solid flex flex-1 items-center justify-end p-12 md:px-10 sm:px-5 w-full">
                <Img
                  src="images/img_havellslogo1.png"
                  className="h-[71px] md:h-auto object-cover w-3/4"
                  alt="havellslogoOne"
                />
              </div>
              <div className="border-gray_601 border-r border-solid flex flex-1 items-center justify-end p-12 md:px-10 sm:px-5 w-full">
                <Img
                  src="images/img_havellslogo1.png"
                  className="h-[71px] md:h-auto object-cover w-3/4"
                  alt="havellslogoOne"
                />
              </div>
            </List>
            <div className="border-gray_601 border-r border-solid flex items-center justify-start p-[29px] sm:px-5 w-[15%] md:w-full">
              <Img
                src="images/img_pngwing1.png"
                className="h-[109px] md:h-auto object-cover w-[71%]"
                alt="pngwingOne_One"
              />
            </div>
            <div className="border-gray_601 border-r border-solid flex items-center justify-start p-[35px] sm:px-5 w-[15%] md:w-full">
              <Img
                src="images/img_pngwing3.png"
                className="h-[98px] md:h-auto object-cover w-[56%]"
                alt="pngwingThree_One"
              />
            </div>
            <div className="border-gray_601 border-r border-solid flex items-center justify-start p-[46px] md:px-10 sm:px-5 w-[15%] md:w-full">
              <Img
                src="images/img_2500pxjbllogo.png"
                className="h-[76px] md:h-auto object-cover w-[39%]"
                alt="2500pxjbllogo_One"
              />
            </div>
            <div className="border-gray_601 border-r border-solid flex items-center justify-center p-[52px] md:px-10 sm:px-5 w-[15%] md:w-full">
              <Img
                src="images/img_5848242ecef1014c0b5e49c8.png"
                className="h-[37px] md:h-auto my-[13px] object-cover w-full"
                alt="5848242ecef1014_One"
              />
            </div>
            <div className="border-gray_601 border-r border-solid flex items-start justify-start p-[59px] md:px-10 sm:px-5 w-[15%] md:w-full">
              <Img
                src="images/img_1024pxnestlabslogo.png"
                className="h-[50px] md:h-auto ml-2 md:ml-[0] object-cover w-[72%]"
                alt="1024pxnestlabsl_One"
              />
            </div>
            <div className="border-gray_601 border-r border-solid flex items-center justify-start p-[59px] md:px-10 sm:px-5 w-[15%] md:w-full">
              <Img
                src="images/img_bekologo1.png"
                className="h-[50px] md:h-auto object-cover w-[54%]"
                alt="bekologoOne_One"
              />
            </div>
            <div className="border-gray_601 border-r border-solid flex items-center justify-end p-12 md:px-10 sm:px-5 w-[15%] md:w-full">
              <Img
                src="images/img_havellslogo1.png"
                className="h-[71px] md:h-auto object-cover w-3/4"
                alt="havellslogoOne"
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
