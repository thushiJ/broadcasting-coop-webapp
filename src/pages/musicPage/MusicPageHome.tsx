import { ArtistCard } from "./shared/ArtistCard";
import { MusicCard } from "./shared/MusicCard";
import { PlaylistCard } from "./shared/PlaylistCard";

function MusicPageHome() {
  return (
    <div>
      <div className="flex justify-center gap-10">
        <ArtistCard />
        <MusicCard />
        <PlaylistCard />
      </div>
    </div>
  );
}

export default MusicPageHome;
