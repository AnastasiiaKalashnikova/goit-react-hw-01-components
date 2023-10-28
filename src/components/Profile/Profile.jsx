
import { Description, Stats, Text } from "./Profile.styled";

export const Profile = ({ username, tag, avatar, location, stats: { followers, views, likes } }) => {
  return (
    <div>
      <Description>
        <img
          src={avatar}
          alt="User avatar"
        />
        <p>{username}</p>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <Stats>
        <li>
          <span>Followers </span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views </span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes </span>
          <span>{likes}</span>
        </li>
      </Stats>
    </div>
  )
};
