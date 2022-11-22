import { BackIcon, ForwardIcon } from "../../assets/icons";
import { AvatarContainer } from "./AvatarContainer";

export const Header = () => {
  return (
    <header className="flex justify-between">
      <div className="flex gap-20">
        <BackIcon />
        <ForwardIcon />
      </div>
      <AvatarContainer />
    </header>
  );
};
