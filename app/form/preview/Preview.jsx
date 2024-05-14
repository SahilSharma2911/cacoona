import React from "react";

const Preview = ({ backgroundImage, data }) => {
  return (
    <section
      className="text-black w-[18.5rem] sm:w-[37rem] md:w-[44.5rem] lg:w-[50rem] h-[14.5rem] sm:h-[29rem] md:h-[34rem] lg:h-[39rem] bg-no-repeat bg-contain flex items-center justify-center text-[7.5px] sm:text-[14.2px] md:text-[18px] lg:text-[21px] font-medium p-6 sm:p-10 md:p-14 "
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center mb-6 sm:mb-10 md:mb-14">
        <div className="flex gap-1">
          <span>Name:</span>
          <span>{data.name}</span>
        </div>
        <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-6 lg:mt-8 ">
          <div className="flex flex-col lg:min-w-[22rem] sm:gap-0.5">
            <div className="flex gap-[1.2px] sm:gap-1 items-start">
              <span className="flex-none min-w-[5px]">Date of Birth:</span>
              <span className="leading-[120%] mt-[1.05px] sm:mt-[2.36px] md:mt-[3px] lg:mt-1">{data.dateOfBirth}</span>
            </div>
            <div className="flex gap-[1.2px] sm:gap-1 items-start">
              <span className="flex-none min-w-[5px]">Time of Birth:</span>
              <span className="leading-[120%] mt-[1.05px] sm:mt-[2.36px] mdmt-[3px] lg:mt-1">{data.timeOfBirth}</span>
            </div>
            <div className="flex gap-[1.2px] sm:gap-1 items-start">
              <span className="flex-none min-w-[5px]">Interest:</span>
              <span className="leading-[120%] mt-[1.05px] sm:mt-[2.36px] mdmt-[3px] lg:mt-1">
                {data.interests.join(", ")}
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:min-w-[21rem] sm:gap-0.5">
            <div className="flex gap-[1.2px] sm:gap-1 items-start">
              <span className="flex-none min-w-[5px]">Gender:</span>
              <span className="leading-[120%] mt-[1.05px] sm:mt-[2.36px] mdmt-[3px] lg:mt-1">{data.gender}</span>
            </div>
            <div className="flex gap-[1.2px] sm:gap-1 items-start">
              <span className="flex-none min-w-[5px]">Zodiac Sign:</span>
              <span className="leading-[120%] mt-[1.05px] sm:mt-[2.36px] mdmt-[3px] lg:mt-1">{data.zodiacSign}</span>
            </div>
            <div className="flex gap-[1.2px] sm:gap-1 items-start ">
              <span className="flex-none min-w-[5px]">Place of Birth:</span>
              <span className="leading-[120%] mt-[1.05px] sm:mt-[2.36px] mdmt-[3px] lg:mt-1">{data.placeOfBirth}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
