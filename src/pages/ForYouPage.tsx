import { Link } from "react-router";
import ArtistCard from "../components/ArtistCard";

export default function ForYouPage() {
  return (
    <div>
      <section>
        <h2 className="text-2xl">Populare Artists</h2>
        <div className="flex gap-2">
          <ArtistCard
            titel="Lady Gaga"
            imageUrl="https://i.scdn.co/image/ab67616100005174aadc18cac8d48124357c38e6"
          />
          <ArtistCard
            titel="The Weekend"
            imageUrl="https://i.scdn.co/image/ab676161000051749e528993a2820267b97f6aae"
          />
          <ArtistCard
            titel="Mirain Bryant"
            imageUrl="https://i.scdn.co/image/ab676161000051747994b16479f2784ee5511662"
          />
          
        </div>
      </section>
      <section>
        <h2 className="text-2xl">Albums and signels</h2>
        <div className="flex gap-2">
          <Link to="artist">Album 1</Link>
          <Link to="artist">Album 2</Link>
          <Link to="artist">Album 3</Link>
          <Link to="artist">Album 4</Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl">Radio Station</h2>
        <div className="flex gap-2">
          <Link to="artist">Radio 1</Link>
          <Link to="artist">Radio 2</Link>
          <Link to="artist">Radio 3</Link>
          <Link to="artist">Radio 4</Link>
        </div>
      </section>
    </div>
  );
}
