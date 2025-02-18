import { useParams } from "react-router";
import { mockedArtrist } from "../data";

export default function ArtistPage() {
  const params = useParams();
  const artist = mockedArtrist.find((a) => a.id === params.id);

  if (!artist) {
    return <p>Missing...</p>
  }

  return (
    <div>
      <h2>{artist.name}</h2>
      <img src={artist.imageUrl} />
    </div>
  );
}
