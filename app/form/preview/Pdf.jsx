import React from "react";

const Pdf = ({ backgroundImage, data }) => {
  return (
    <section
      className="text-black w-[49.5rem] h-[39rem] bg-no-repeat bg-contain flex items-center justify-center text-[20px] font-medium p-10 "
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center mb-16">
        <div className="flex gap-1">
          <span>Name:</span>
          <span>{data.name}</span>
        </div>
        <div className="flex gap-4 mt-8 ">
          <div className="flex flex-col min-w-[19rem] gap-0.5">
            <div className="flex gap-1 items-start">
              <span className="flex-none min-w-[20px]">Date of Birth:</span>
              <span className="leading-[120%] mt-0.5">{data.dateOfBirth}</span>
            </div>
            <div className="flex gap-1 items-start">
              <span className="flex-none min-w-[20px]">Time of Birth:</span>
              <span className="leading-[120%] mt-0.5">{data.timeOfBirth}</span>
            </div>
            <div className="flex gap-1 items-start">
              <span className="flex-none min-w-[20px]">Interest:</span>
              <span className="leading-[120%] mt-0.5">
                {data.interests.join(", ")}
              </span>
            </div>
          </div>
          <div className="flex flex-col min-w-[19rem] gap-0.5">
            <div className="flex gap-1 items-start">
              <span className="flex-none min-w-[20px]">Gender:</span>
              <span className="leading-[120%] mt-0.5">{data.gender}</span>
            </div>
            <div className="flex gap-1 items-start">
              <span className="flex-none min-w-[20px]">Zodiac Sign:</span>
              <span className="leading-[120%] mt-0.5">{data.zodiacSign}</span>
            </div>
            <div className="flex gap-1 items-start ">
              <span className="flex-none min-w-[20px]">Place of Birth:</span>
              <span className="leading-[120%] mt-0.5">{data.placeOfBirth}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pdf;
