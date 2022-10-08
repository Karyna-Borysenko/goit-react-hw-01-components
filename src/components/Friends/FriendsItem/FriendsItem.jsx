import PropTypes from 'prop-types';
import { OnlineMarker, UserImage, UserName } from './FriendsItem.styled';

export const Friends = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <OnlineMarker isOnline={isOnline}></OnlineMarker>
      <UserImage src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </>
  );
};

Friends.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
