import PropTypes from 'prop-types';
import {
  FriendItem,
  OnlineMarker,
  UserImage,
  UserName,
} from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendItem>
      <OnlineMarker isOnline={isOnline}></OnlineMarker>
      <UserImage src={avatar} alt="User avatar" width="48" />
      <UserName>{name}</UserName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
