import { HiMusicNote } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaPodcast } from "react-icons/fa";
import { MdOutlineRadio, MdLiveTv } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
function NavbarPageNav() {
  return (
    <div className="items-center text-gray-100 ">
      <div className="grid grid-cols-2 mb-2 md:grid-cols-3">
        <div className="mb-2">
          <Link to="/video">
            <button className="p-1 mb-1 rounded-full button-red md:p-2">
              <BsCameraVideo className="text-lg md:text-2xl" />
            </button>
            <p className="text-xs gray-text">Video</p>
          </Link>
        </div>

        <div className="mb-2">
          <Link to="/music">
            <button className="p-1 mb-1 rounded-full button-red md:p-2">
              <HiMusicNote className="text-lg md:text-2xl" />
            </button>

            <p className="text-xs gray-text">Music</p>
          </Link>
        </div>
        <div className="mb-2">
          <Link to="/livetv">
            <button className="p-1 mb-1 rounded-full button-red md:p-2">
              <MdLiveTv className="text-lg md:text-2xl" />
            </button>

            <p className="text-xs gray-text">Live Tv</p>
          </Link>
        </div>
        <div className="mb-2">
          <button className="p-1 mb-1 rounded-full button-red md:p-2">
            <FaPodcast className="text-lg md:text-2xl" />
          </button>

          <p className="text-xs gray-text">Podcast</p>
        </div>
        <div className="mb-2">
          <button className="p-1 mb-1 rounded-full button-red md:p-2">
            <HiMusicNote className="text-lg md:text-2xl" />
          </button>

          <p className="text-xs gray-text">PPV</p>
        </div>
        <div className="mb-2">
          <button className="p-1 mb-1 rounded-full button-red md:p-2">
            <MdOutlineRadio className="text-lg md:text-2xl" />
          </button>

          <p className="text-xs gray-text">Radio</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarPageNav;
