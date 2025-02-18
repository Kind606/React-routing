import { Link } from "react-router";
import ArtistCard from "../components/ArtistCard";
import { mockedArtrist } from "../data";

export default function ForYouPage() {
  return (
    <div>
      <h2 className="text-2xl">Populare Artists</h2>
      <section className="overflow-auto">
        <div className="flex gap-2">
          {mockedArtrist.map((artist) => (
            <ArtistCard titel={artist.name} imageUrl={artist.imageUrl} />
          ))}
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
