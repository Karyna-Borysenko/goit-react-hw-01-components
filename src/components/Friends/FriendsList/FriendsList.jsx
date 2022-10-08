import PropTypes from 'prop-types';
import { Friends } from '../FriendsItem/FriendsItem';
import { FriendList, FriendItem } from './FriendsList.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <Friends friend={friend} />
        </FriendItem>
      ))}
    </FriendList>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
