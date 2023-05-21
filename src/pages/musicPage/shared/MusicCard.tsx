import MusicArt from "../../../Assets/Images/MusicArt.jpg";

export const MusicCard = (props: any) => {
  return (
    <div className="mx-2 inline-block w-[171px]  rounded-md ">
      {/* image */}
      <div className=" w-full h-[171px] items-center justify-center">
        <img
          src={MusicArt}
          alt="Live Channel"
          className="w-[171px] h-full  object-cover overflow-hidden rounded-md"
        />
      </div>

      <div className="relative top-1">
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
