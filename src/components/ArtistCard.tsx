import { Link } from "react-router";

interface Props {
  titel: string;
  imageUrl: string;
}

export default function ArtistCard(props: Props) {
  return (
    <Link to="artist" className="p-2 hover:bg-slate-800 rounded">
      <img className="rounded-full" src={props.imageUrl} alt="" />
      <h3>{props.titel}</h3>
      <span className="text-sm text-slate-300">Artist</span>
    </Link>
  );
}
