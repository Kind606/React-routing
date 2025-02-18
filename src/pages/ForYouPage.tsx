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
            <ArtistCard artist={artist} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl">Albums and signels</h2>
        <div className="flex gap-2">
          <Link to="album">Album 1</Link>
          <Link to="album">Album 2</Link>
          <Link to="album">Album 3</Link>
          <Link to="album">Album 4</Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl">Radio Station</h2>
        <div className="flex gap-2">
          <Link to="radio">Radio 1</Link>
          <Link to="radio">Radio 2</Link>
          <Link to="radio">Radio 3</Link>
          <Link to="radio">Radio 4</Link>
        </div>
      </section>
    </div>
  );
}
