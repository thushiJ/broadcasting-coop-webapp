import React from "react";
import Artist from "../../../Assets/Images/Artist.jpg";

export const ArtistCard = (props: any) => {
  return (
    <div className="inline-block text-center">
      <div className="mx-2 inline-block w-[126px] h-[285px] rounded-full ">
        {/* image */}
        <div className=" w-full h-[126px] items-center justify-center">
          <img
            src={Artist}
            alt="Artist"
            className="w-[126px] h-full  object-cover overflow-hidden rounded-full"
          />
        </div>
        <p className="inline-block mt-2 text-white font-[600] text-[14px]">
          Max Paul
        </p>
      </div>
    </div>
  );
};
