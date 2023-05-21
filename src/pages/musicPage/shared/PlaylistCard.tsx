import MusicArt from "../../../Assets/Images/MusicArt.jpg";

export const PlaylistCard = (props: any) => {
  return (
    <div className="mx-2 inline-block w-[198px]  rounded-md ">
      {/* image */}
      <div className=" w-full h-[198px] items-center justify-center">
        <div className="absolute w-[198px] h-[61px]  object-cover overflow-hidden rounded-md mt-[137px] opacity-80 backdrop-blur-xl"></div>
        <img
          src={MusicArt}
          alt="Live Channel"
          className="w-[198px] h-full  object-cover overflow-hidden rounded-md"
        />
      </div>

      <div className="absolute mt-[-60px] ml-1">
        <div className="my-[4px]">
          <p className="text-[15px] font-[500] text-white">
            Red (Taylor’s Version)
          </p>

          <p className="text-[12px] font-[400] text-[#7B9DB4] mt-[5px]">
            Taylor Swift
          </p>
        </div>
      </div>
    </div>
  );
};
