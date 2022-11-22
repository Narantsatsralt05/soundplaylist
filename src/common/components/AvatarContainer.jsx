export const AvatarContainer = ({
  name = "Naraa",
  image = "https://i.ibb.co/7JzsBT1/DSC4998-2.jpg",
}) => {
  return (
    <div className="flex avatar-container align-center">
      <img className="avatar" alt="avatar" src={image} />
      <h6>{name}</h6>
    </div>
  );
};
