export const PlaylistTile = ({
  url = "https://i.ibb.co/q5d45nj/images-2.jpg",
  listName = "Chill Mix",
}) => {
  return (
    <div className="overflow-hidden flex playlist-tile-container transparent-background gap-20">
      <img src={url} alt="playlist thumbnail" className="thumbnail-sm" />
      <div className="flex align-center">
        <h5>{listName}</h5>
      </div>
    </div>
  );
};
