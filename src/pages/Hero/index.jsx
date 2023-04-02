import React from "react";

import { Img, Text, Button, List } from "components";
import HeroPartners from "components/HeroPartners";


const HeroPage = () => {
  

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start self-stretch w-auto md:w-full">
          <div className="flex flex-col md:gap-10 gap-[167px] items-center justify-start pb-[173px] w-full">
            <header className="flex flex-col items-center justify-center md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1396px] mx-auto my-7 w-full">
                <div className="header-row my-0.5">
                  <Img
                    src="images/img_globe.svg"
                    className="h-[60px] w-[90px]"
                    alt="globe"
                  />
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[41px] sm:hidden items-start justify-start self-stretch w-auto">
                  <Text
                    className="capitalize text-black_900 text-center w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Products
                  </Text>
                  <Text
                    className="capitalize text-black_900 text-center w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Solutions
                  </Text>
                  <Text
                    className="capitalize text-black_900 text-center w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Resource
                  </Text>
                  <Text
                    className="capitalize text-black_900 text-center w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Enterprise
                  </Text>
                  <Text
                    className="capitalize text-black_900 text-center w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Pricing
                  </Text>
                </div>
                <Button className="bg-bluegray_900 capitalize cursor-pointer font-semibold sm:hidden min-w-[125px] sm:px-5 px-8 py-4 rounded-[30px] text-base text-center text-white_A700 w-auto hover:border-black hover:border-2  hover:bg-transparent hover:text-black">
                  Sign up
                </Button>
              </div>
            </header>
            <div className="flex flex-col gap-6 items-center justify-start md:px-5 self-stretch w-auto md:w-full">
              <div className="flex flex-col gap-2 items-center justify-start self-stretch w-auto md:w-full">
                <Text
                  className="text-black_900 text-center w-auto"
                  as="h1"
                  variant="h1"
                >
                  Transform with
                </Text>
                <div className="flex flex-col gap-6 items-center justify-start md:px-5 self-stretch w-auto md:w-full">
                <div className="flex flex-col gap-2 items-center justify-start self-stretch w-auto md:w-full">
                  <Text
                    className="text-black_900 text-center w-auto center"
                    as="h1"
                    variant="h1"
                  >
                    SaaS Solution
                  </Text>
                  <div className="flex relative w-[220px]">
                    <div className="flex my-auto w-[78%]">
                      <div className="flex my-auto w-[71%]">
                        {/* Rounded profile images */}
                        <Img
                          src="images/img_ellipse1.png"
                          className="h-[70px] my-auto rounded-[50%] w-[70px]"
                          alt="ellipseOne"
                        />
                        <Img
                          src="images/img_ellipse2.png"
                          className="h-[70px] ml-[-20px] my-auto rounded-[50%] w-[70px] z-[1]"
                          alt="ellipseTwo"
                        />
                      </div>
                      <Img
                        src="images/img_ellipse3.png"
                        className="h-[70px] ml-[-20px] my-auto rounded-[50%] w-[70px] z-[1]"
                        alt="ellipseThree"
                      />
                    </div>
                    <Img
                      src="images/img_ellipse4.png"
                      className="h-[70px] ml-[-20px] my-auto rounded-[50%] w-[70px] z-[1]"
                      alt="ellipseFour"
                    />
                  </div>
                </div>
              </div>
              </div>
              <Text
                className="leading-[32.00px] max-w-[658px] md:max-w-full text-center text-gray_600"
                as="h5"
                variant="h5"
              >
                Vitae dictum mollis vel aliquam tortor aliquam sed nunc. Congue
                eros velit augue nisl. Vitae convallis blandit vulputate enim
                sollicitudin tristique velit orci.
              </Text>
              <Button className="bg-bluegray_900 capitalize cursor-pointer font-semibold min-w-[192px] sm:px-5 px-8 py-4 rounded-[30px] text-base  text-center text-white_A700 w-auto hover:border-black hover:border-2  hover:bg-transparent hover:text-black">
                Check out Tools
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-start p-[50px] md:px-10 sm:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-5 h-[700px] md:h-auto items-start justify-start max-w-[1395px] mx-auto w-full">
              <div className="flex flex-1 flex-col gap-5 h-full items-start justify-start w-full">
                <div className="bg-blue_50 flex items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-start max-w-[687px] md:px-10 sm:px-5 px-[50px] w-full">
                    <div className="flex flex-1 flex-col gap-5 h-[340px] md:h-auto items-start justify-center w-full">
                      <Text
                        className="capitalize leading-[40.00px] text-black_900 text-left"
                        as="h3"
                        variant="h3"
                      >
                        <>
                          Automated
                          <br />
                          Reports
                        </>
                      </Text>
                      <Text
                        className="capitalize leading-[24.00px] max-w-[378px] md:max-w-full text-gray_800 text-left"
                        as="h5"
                        variant="h5"
                      >
                        Fermentum ut cras gravida et malesuada curabitur netus
                        ac. Id mauris nibh turpis sed laoreet rhoncus gravida.
                      </Text>
                    </div>
                    <div className="md:h-[150px] h-[180px] relative w-[35%] sm:w-full">
                      <div className="absolute bottom-[0] flex h-[150px] items-center justify-start left-[11%] outline outline-[15px] outline-white_A700 p-[25px] sm:px-5 rounded-[50%] w-[150px]">
                        <div className="bg-white_A700 flex h-[100px] items-center justify-end p-[29px] sm:px-5 rounded-[50%] w-[100px]">
                          <Img
                            src="images/img_google.svg"
                            className="common-pointer h-10 w-10"
                            
                            alt="google"
                          />
                        </div>
                      </div>
                      <div className="absolute bottom-[8%] flex flex-row inset-x-[0] items-start justify-between mx-auto w-full">
                        <Img
                          src="images/img_ellipse9.png"
                          className="h-11 md:h-auto mt-5 rounded-[50%] w-11"
                          alt="ellipseNine"
                        />
                        <Img
                          src="images/img_ellipse10.png"
                          className="h-11 md:h-auto mb-5 rounded-[50%] w-11"
                          alt="ellipseTen"
                        />
                      </div>
                      <Img
                        src="images/img_ellipse11.png"
                        className="absolute h-11 inset-x-[0] mx-auto rounded-[50%] top-[0] w-11"
                        alt="ellipseEleven"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-yellow_100 flex h-full items-start justify-start p-[50px] md:px-10 sm:px-5 w-full">
                  <div className="flex md:flex-col flex-row gap-2.5 items-start justify-start ml-auto self-stretch w-auto md:w-full">
                    <div className="flex flex-col gap-5 h-[290px] md:h-auto items-start justify-start p-[50px] md:px-10 sm:px-5 w-[393px] sm:w-full">
                      <Text
                        className="capitalize text-black_900 text-left w-auto"
                        as="h3"
                        variant="h3"
                      >
                        User Journey
                      </Text>
                      <Text
                        className="capitalize leading-[24.00px] max-w-[293px] md:max-w-full text-gray_800 text-left"
                        as="h5"
                        variant="h5"
                      >
                        Duis amet est ante erat aliquet tellus sed vel in. Nibh
                        dictum suspendisse purus tincidunt fringilla velit.
                      </Text>
                    </div>
                    <div className="w-[90%]">
                      <div className="flex h-[340px] md:h-[90%]  relative rounded-lg">
                        <Img
                          src="images/14_pro.png"
                          className="h-[80%] ml-[20%] mt-auto w-[100%]"
                          alt="black"
                        />
                        {/* <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[100%] items-center justify-end right-[0] w-full rounded-lg"
                          style={{
                            backgroundImage: "url('images/img_group2.png')",
                          }}
                        > */}
                          
{/*                             
                              <Img
                                src="images/img_group11.png"
                                className="h-[95%] m-auto object-cover w-[90%] rounded-lg"
                                alt="groupEleven"
                              />
                              <Img
                                src="images/img_group9.png"
                                className="absolute h-[18px] object-cover right-[30%] top-[3%] w-auto rounded-lg"
                                alt="groupNine"
                              />
                         */}
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-red_50 flex md:flex-1 items-center justify-center w-1/2 md:w-full">
                <div className="flex flex-col gap-10 h-[800px] md:h-auto items-center justify-center max-w-[687px] md:px-10 sm:px-5 px-[50px] w-full">
                  <div className="flex flex-row gap-5 items-center justify-center self-stretch w-auto">
                    <div className="flex flex-col gap-4 items-start justify-center self-stretch w-auto">
                      <div className="bg-white_A700 flex h-[100px] items-center justify-center p-[18px] rounded-lg w-[100px]">
                        <Img
                          src="images/img_linkedin.svg"
                          className="h-16 w-16"
                          alt="linkedin"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[100px] items-center justify-center p-[18px] rounded-lg w-[100px]">
                        <Img
                          src="images/img_globe_blue_a400.svg"
                          className="h-16 w-16"
                          alt="globe_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-center self-stretch w-auto">
                      <div className="bg-white_A700 flex h-[100px] items-center justify-center p-[18px] rounded-lg w-[100px]">
                        <Img
                          src="images/img_youtube.svg"
                          className="h-16 w-16"
                          alt="youtube"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[100px] items-center justify-center p-[18px] rounded-lg w-[100px]">
                        <Img
                          src="images/img_google_red_501.svg"
                          className="h-16 w-16"
                          alt="google_One"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[100px] items-center justify-center p-[18px] rounded-lg w-[100px]">
                        <Img
                          src="images/img_cut.svg"
                          className="h-16 w-16"
                          alt="cut"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-center self-stretch w-auto">
                      <div className="bg-white_A700 flex h-[100px] items-center justify-start p-[18px] rounded-lg w-[100px]">
                        <Img
                          src="images/img_alarm.svg"
                          className="h-16 w-16"
                          alt="alarm"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[100px] items-center justify-center p-[18px] rounded-lg w-[100px]">
                        <Img
                          src="images/img_cart.svg"
                          className="h-16 w-16"
                          alt="cart"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-end w-full">
                    <Text
                      className="capitalize leading-[40.00px] text-black_900 text-left"
                      as="h3"
                      variant="h3"
                    >
                      <>
                        Funnel
                        <br />
                        Optimization
                      </>
                    </Text>
                    <Text
                      className="capitalize leading-[24.00px] max-w-[587px] md:max-w-full text-gray_800 text-left"
                      as="h5"
                      variant="h5"
                    >
                      Fermentum ut cras gravida et malesuada curabitur netus ac.
                      Id mauris nibh turpis sed laoreet rhoncus gravida.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex items-center justify-start p-1 w-full">
            <div className="flex items-center justify-start max-w-[1396px] mx-auto md:px-5 w-full">
              <HeroPartners className="bg-white_A700 flex flex-col items-center justify-end py-[81px] w-full" />
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col md:gap-10 gap-[83px] items-center justify-start p-[100px] md:px-10 sm:px-5 w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1396px] mx-auto w-full">
              <Text
                className="capitalize leading-[48.00px] text-black_900 text-left"
                as="h2"
                variant="h2"
              >
                <>
                  Integrated with
                  <br />
                  the tools you love
                </>
              </Text>
              <Button className="bg-bluegray_900 capitalize cursor-pointer font-semibold min-w-[192px] sm:px-5 px-8 py-4 rounded-[30px] text-base text-center text-white_A700 w-auto hover:border-black hover:border-2  hover:bg-transparent hover:text-black">
                Check our Tools
              </Button>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1396px] mb-[7px] mx-auto w-full">
              <div className="bg-white_A700 flex flex-1 flex-col gap-5 h-full items-start justify-between p-[30px] sm:px-5 rounded-[10px] shadow-bs w-full">
                <Img
                  src="images/img_google.svg"
                  className="h-10 w-10"
                  alt="google_Two"
                />
                <div className="flex flex-col gap-2.5 items-start justify-start self-stretch w-auto">
                  <Text
                    className="capitalize text-black_900 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Google
                  </Text>
                  <Text
                    className="capitalize leading-[24.00px] max-w-[223px] md:max-w-full not-italic text-gray_800 text-left"
                    as="h6"
                    variant="h6"
                  >
                    Dictum pharetra arcu vel mi gravida etiam ut tortor nam.
                    Volutpat mauris euismod a massa.
                  </Text>
                </div>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 w-[52%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-5 h-[314px] md:h-auto items-start justify-start">
                  <div className="bg-white_A700 flex flex-row gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[10px] self-stretch shadow-bs w-auto">
                    <Button className="bg-indigo_A400 flex h-10 items-center justify-center p-1.5 rounded-[9px] w-10">
                      <Img
                        src="images/img_vector.svg"
                        className=""
                        alt="vector"
                      />
                    </Button>
                    <div className="flex flex-col gap-2.5 items-start justify-start self-stretch w-auto">
                      <Text
                        className="capitalize text-black_900 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Webflow
                      </Text>
                      <Text
                        className="capitalize leading-[24.00px] max-w-[223px] md:max-w-full not-italic text-bluegray_900 text-left"
                        as="h6"
                        variant="h6"
                      >
                        In in ut urna placerat. Pellentesque mauris euismod a{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-row gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[10px] self-stretch shadow-bs w-auto">
                    <Img
                      src="images/img_twitter.svg"
                      className="h-10 w-[49px]"
                      alt="twitter"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start self-stretch w-auto">
                      <Text
                        className="capitalize text-black_900 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Twitter
                      </Text>
                      <Text
                        className="capitalize leading-[24.00px] max-w-[223px] md:max-w-full not-italic text-bluegray_900 text-left"
                        as="h6"
                        variant="h6"
                      >
                        Dictum pharetra arcu vel mi gravida etiam ut tortor nam.{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 h-[314px] md:h-auto items-start justify-start">
                  <div className="bg-white_A700 flex flex-row gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[10px] self-stretch shadow-bs w-auto">
                    <Img
                      src="images/img_cut_light_blue_a200.svg"
                      className="h-10 w-10"
                      alt="cut"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start self-stretch w-auto">
                      <Text
                        className="capitalize text-black_900 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Slack
                      </Text>
                      <Text
                        className="capitalize leading-[24.00px] max-w-[223px] md:max-w-full not-italic text-bluegray_900 text-left"
                        as="h6"
                        variant="h6"
                      >
                        Dictum pharetra arcu vel mi gravida etiam ut tortor nam.{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-row gap-5 items-start justify-start p-[30px] sm:px-5 rounded-[10px] self-stretch shadow-bs w-auto">
                    <Img
                      src="images/img_group.png"
                      className="h-10 md:h-auto object-cover w-10"
                      alt="group"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start self-stretch w-auto">
                      <Text
                        className="capitalize text-black_900 text-left w-auto"
                        as="h4"
                        variant="h4"
                      >
                        Instagram
                      </Text>
                      <Text
                        className="capitalize leading-[24.00px] max-w-[223px] md:max-w-full not-italic text-bluegray_900 text-left"
                        as="h6"
                        variant="h6"
                      >
                        Dictum pharetra arcu vel mi gravida etiam ut tortor nam.{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="bg-white_A700 flex flex-1 flex-col gap-5 h-full items-start justify-between p-[30px] sm:px-5 rounded-[10px] shadow-bs w-full">
                <Img
                  src="images/img_vector_black_900.svg"
                  className="h-10 w-10"
                  alt="vector"
                />
                <div className="flex flex-col gap-2.5 items-start justify-start self-stretch w-auto">
                  <Text
                    className="capitalize text-black_900 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Wordpress
                  </Text>
                  <Text
                    className="capitalize leading-[24.00px] max-w-[223px] md:max-w-full not-italic text-gray_800 text-left"
                    as="h6"
                    variant="h6"
                  >
                    Dictum pharetra arcu vel mi gravida etiam ut tortor nam.
                    Volutpat mauris euismod a massa.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
